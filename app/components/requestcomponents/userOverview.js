import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    Modal,
    Image,
    Button,
    Vibration,
    TextInput,
    Dimensions,
    ScrollView,
    ToastAndroid,
    ActivityIndicator,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/requestComponents/userOverviewStyle';

import str from '../../assets/thumb-up.png';
import opt from '../../assets/thumb-down.png';

import { FloatingSingle } from '../FloatingMenu';
import Card from '../Card';

import { LevelDescription } from '../../data/data';

const TEST = ['past tenses', 'vocabulary', 'present tenses', 'pronunciation', 'past participles']
let { width, height } = Dimensions.get('screen')

export default class UserOverview extends Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.state = {
            showLevelDescription: false
        }
    }

    showModal() {
        let { feedback } = this.props.navigation.state.params

        if(feedback !== undefined) {
            this.setState({showLevelDescription: true})
        } else return 
    }

    render() {
        let { feedback, nextUser } = this.props.navigation.state.params
        var Level = feedback ? LevelDescription["" + feedback.level.level] : false
        var there_is_user = nextUser.name ? true : false

        console.log("USER OVERVIEW 53", feedback, nextUser)
   
        return(
            <View style={{flex: 1, backgroundColor: "#fff"}}>

                {there_is_user ? 
                    <ScrollView style={{flex: 1}}>
                        <View style={style.userInfoWrap}>
                            <TouchableHighlight
                            onPress={() => this.showModal()}
                            underlayColor="transparent">
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <View style={{flex:0.9}}>
                                        <Text style={style.userInfoText}>User name: {nextUser.name}</Text>
                                        <Text style={style.userInfoText}>Main skill: {nextUser.skill}</Text>
                                        <Text style={style.userInfoText}>Topic: {nextUser.topic}</Text>
                                        <Text style={style.userInfoText}>Level: {feedback? feedback.level.level : '--'}</Text>
                                    </View>
                                    <View style={{flex:0.1}}>
                                        <Icon name="add-circle" color="#fff" size={30} />
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={style.userItemsWrap}>
                            <View style={[style.userItemsTitle, {flex: 0.3, paddingVertical: height*0.1}]}>
                                <Text style={[style.userItemsLabel, {color: "#177A1B"}]}>Strengths</Text>
                                <Image source={str} style={{width: 50, height: 50, marginTop: 10}} />
                            </View>
                            <View style={{flex: 0.7}}>
                                <Card data={feedback ? feedback.strengths : false} left={true} />
                            </View>
                        </View>

                        <View style={style.userItemsWrap}>
                            <View style={{flex: 0.7}}>
                                <Card data={feedback ? feedback.oportunities : false} left={false} />
                            </View>
                            <View style={[style.userItemsTitle, {flex: 0.3, paddingVertical: height*0.1        }]}>
                                <Text style={[style.userItemsLabel, {color: "#CF2746"}]}>Oportunities</Text>
                                <Image source={opt} style={{width: 50, height: 50, marginTop: 10}} />
                            </View>
                        </View>
                
                        <View style={style.userOverviewComment}>
                            <Text style={style.userOverviewCommentDate}>{new Date().toDateString()}</Text>
                            <Text style={style.userOverviewCommentText}>"{feedback ?feedback.comment : 'No comments yet'}"</Text>
                        </View>

                    </ScrollView>
                    :
                    <View style={style.userInfoHolder}>
                        <Text style={style.userInfoHolderText}>When available, you will find here user's information</Text>  
                    </View>
                }

                <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showLevelDescription}
                onRequestClose={() => {return;}}>
                <View style={style.levelModalWrap}>
                        
                        <TouchableHighlight
                            style={{flex: 0.5}}
                            onPress={() => this.setState({showLevelDescription: false})}
                            underlayColor="transparent">
                                <Text style={{color: "transparent"}}>.</Text>
                        </TouchableHighlight>
                        
            
                        <TouchableHighlight
                        style={{flex: 0.5}}
                        onPress={() => this.setState({showLevelDescription: false})}
                        underlayColor="transparent">
                            <View style={style.levelModal}>
                                {Level ? 
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={style.levelDescriptionIndex}>{Level.level}</Text>
                                        <Text style={style.levelDescriptionText}>CEFR equivalent: {Level.CEFR}</Text>
                                        <Text style={[style.levelDescriptionText, {fontSize: width * 0.045}]}>{Level.description}</Text>
                                    </View>
                                    :
                                    <View>
                                        <Text style={style.levelDescriptionText}>When a user has no level, it means that is his/her first time with us or is comming back after deactivating his/her account. Nevertheless, needs assesment. Go for it!</Text>
                                    </View>
                                }
                            </View>
                        </TouchableHighlight>
                    </View>
                </Modal>

                <FloatingSingle 
                    icon={'arrow-back'} 
                    func={'goBack'} 
                    goBack={this.props.navigation.goBack} />
            </View>
        )
    }
}