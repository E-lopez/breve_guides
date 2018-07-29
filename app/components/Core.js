import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    Modal,
    Dimensions,
    TextInput,
    ScrollView,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/CoresStyle';

import Upcoming from '../components/Upcoming';
import { FloatingSingle } from '../components/FloatingMenu';
import InitialUseGuide from '../components/InitialGuide/InitialUseGuide';

import { CoreButtons } from '../data/data';

import { REMOVE_NEW_FLAG } from '../services/DataManager';

let { width, height } = Dimensions.get('screen')


export default class Cores extends Component {
    constructor(props) {
        super(props);
        this.showGuide = this.showGuide.bind(this);
        this.state = {
            conversation: false,
            showGuide: false
        }
    }

    componentDidMount() {
        let { user } = this.props.screenProps
        console.log("CORE 37", user.profile)
        if(user.profile.new) {
            this.setState({
                showGuide: true
            }, () => {
                console.log("CORE 44 removing flag")
                REMOVE_NEW_FLAG()
            })
        }
    }

    goTo(arg) {
        this.props.navigation.navigate(arg)
    }

    showGuide() {
        this.setState({showGuide: !this.state.showGuide})
      }

  render() {
    let { navigation } = this.props
    let { conversation, 
          user, 
          nextSession,
          New_message_notification, 
          guide_received,
          sender } = this.props.screenProps
    //console.log("CORE 42", conversation)
    return(
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={style.coresBox}>
                    <View style={style.instruction}>
                        <View style={{width: '80%'}}>
                            <Text style={{textAlign: 'center', fontSize: 16, marginTop: 5, color: '#fff', fontFamily: 'Comfortaa-Regular'}}>Control your sessions, read your feedback and handle money</Text>
                        </View>
                    </View>
        
                    <View 
                        style={[style.reqBox, {backgroundColor: "#fff"}]}>
                            <Upcoming navigation={navigation} nextSession={nextSession} />
                    </View>    

                    {CoreButtons.map((item, i) => {
                        return (
                            <TouchableHighlight 
                            key={i}
                            style={[style.coreBox, {backgroundColor: item.color}]}
                            activeOpacity={100}
                            underlayColor={"#EEE"}
                            onPress={() => this.goTo(item.arg)}>
                                <View style={style.innerCoreBox}>
                                    <Image
                                    style={{height:80, width:80}} 
                                    source={item.img} />
                                    <Text style={style.coreName}>{item.name}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })}

                    <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => this.showGuide()}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 10, marginTop: 10}}>
                        <Icon name="help" color="#fff" size={30} />
                        <Text style={{fontSize: 24, fontFamily: 'Exo2-Regular', bottom: 15, marginTop: 15, color: "#fff"}}>How to use</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
            </ScrollView>

            <FloatingSingle 
                conversation={conversation}
                guide_received={guide_received}
                sender={sender}
                icon={'chat'} 
                func={'chat'} 
                New_message_notification={New_message_notification}
                userKey={nextSession ? nextSession.userKey : false} />

            <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.showGuide}
            onRequestClose={() => {return;}}>
                <View style={{flex: 1}}>
                    <InitialUseGuide
                    showGuide={this.showGuide}  />  
                </View>
            </Modal>
            
        </View>
    )
  }
}
