import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Alert,
    Button,
    Animated,
    TextInput,
    ScrollView,
    Dimensions,
    ToastAndroid,
    ActivityIndicator,
    TouchableHighlight
    } from 'react-native';
import { Card, Icon } from 'react-native-material-design';
import emptyImage from '../assets/attention.png'

import { cancelSession, GET_SESSIONS, VERIFY_SESSION } from '../services/DataManager';

import style from '../style/UpcomingStyle'

let { width, height } = Dimensions.get('screen')


export default class UpcomingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessions: {},
            showPrompt: false,
            code: '',
            showCancel: false,
            loading: false
        }
    }

    componentDidMount() {
        let { data, pendingSession } = this.props

        if(data) {
            var time =  parseInt(data.sessions[0].info.scheduled, 10)
            var arrive = (parseInt(data.sessions[0].info.time, 10) + 10) * (60 * Math.pow(10, 3))
            var expected = time + arrive
    
            this.setState({
                showCancel: Date.now() > expected && !pendingSession
            })
        }       
    }

    checkCode(){
        if(!this.state.code) { return; }

        let { userKey, sessions } = this.props.data;
        var control = sessions[0].info.control

        VERIFY_SESSION(parseInt(this.state.code), userKey, parseInt(sessions['0'].info.scheduled))
        .then((result) => {
            console.log("UPCOMING LIST", result)
            var message;
            if(result === true) {
                message = 'Confirmed session, yay! Student confirmed identity.',
                this.props.set_pending_state()
            } else if (result === false) {
                message = 'Code incorrect. Check it and try again.'
            } else if(result ==='done') {
                message = 'Code already verified. This is your warranty for any disagreement with your students.'
            }

            return message
        })
        .then((message) => {
            ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.CENTER),
            this.setState({
                loading: false
            })
        })
    }

    codeInfo() {
        var message = "3 digit number on the top of your user's app. Once verified, identities are confirmed!"
        ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.CENTER);
    }

    setTime(data){
        if(data) {
            var time = new Date(parseInt(data.sessions[0].info.scheduled)).toTimeString().split(':', 2)
            time = time[0] + ':' + time[1]
            return time 
        }
    }

    validateCancel(params) {
        let { navigation } = this.props
        navigation.navigate('Cancel', {data: {session: params.sessions['0'].info, user: params.userKey}})
    }

    render(){
        let { data, pendingSession } = this.props;
        let { showPrompt, showCancel, loading } = this.state;
        var controlKey = data ? true : false

        console.log("UPCOMING LIST 97", showCancel, pendingSession, data)

        return (
           <ScrollView style={{flex: 1, minWidth: width * 0.95}}>
            <View>
                    <View style={style.upcomingTitle}>
                        <Text style={style.upcomingSubTitles}>{(new Date()).toDateString()}</Text>
                    </View>
                    {!controlKey ?  
                        <View style={style.sessionEmpty}>
                            <Text style={style.sessionEmptyTitle}>Nothing for today!</Text>
                            <Image
                            style={{height:80, width:80, margin: 20}} 
                            source={emptyImage} />
                        </View> 
                        :
                        <View style={style.sessionCard}>
                            <View style={style.sessionDue}>
                                <Text style={style.sessionTitle}>Upcoming Session </Text>
                            </View> 

                            <View style={style.sessionInfo}>
                                <View style={style.upcomingListBox}>
                                    <Text style={style.upcomingTextChunk}>
                                        {data.sessions[0].info.skill}
                                    </Text>
                                    <Text style={style.upcomingTextChunk}>
                                        {data.profile.name +' ' + data.profile.surname}
                                    </Text>
                                    <Text style={style.upcomingTextChunk}>
                                        {(data.sessions[0].info.address).split(',', 1)}
                                    </Text>
                                </View>
                                {pendingSession ? 
                                    null 
                                    :
                                    <View>
                                        <TouchableHighlight
                                        underlayColor="transparent"
                                        onPress={() => this.codeInfo()}>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={style.upcomingCode}>
                                                    Ask for your customer's code. 
                                                </Text>
                                                    <View style={{paddingTop: 5}}>
                                                            <Icon name="help" size={30} color="#fff" />
                                                    </View>
                                            </View>
                                        </TouchableHighlight> 
                                        
                                        {loading ? 
                                            <ActivityIndicator size='large'  color="#F5546A" style={{marginTop: 50}}/>
                                            :
                                            <View style={style.codeEntryBox}>
                                                <Icon name="vpn-key" color="#fff" size={50} /> 
                                                <TextInput
                                                    autoFocus={true}
                                                    style={style.codeEntry}
                                                    keyboardType="numeric"
                                                    maxLength={3}
                                                    selectionColor={"#fff"}
                                                    onChangeText={(text) => this.setState({code: text})}
                                                    onEndEditing={() => {
                                                        this.checkCode(),
                                                        this.setState({
                                                            loading: true
                                                        })
                                                    }}
                                                    underlineColorAndroid="transparent"
                                                    value={this.state.code}
                                                />
                                            </View>
                                        }
                                        
                                    </View>
                                }
                            </View>
                            
                            {showCancel ?  
                                <View style={style.buttons}>
                                    <TouchableHighlight
                                    underlayColor={"#FFF"}
                                    onPress={() => {this.validateCancel(data)}}>
                                        <View style={style.icons}>
                                            <Icon name="delete" color="#FFF"/>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                                :
                                null
                            }
                        </View>  
                    }
                    </View>
           </ScrollView>
        )
    }
}