/**Component gets user from MAIN, who sends retrieved user as a screenProp to the parent route of Entry, which is Content. When it mounts, variable user is an object, and is not accessible since is fetched asynchronously. 
 * This object has three properties: status, profile and sessions. All of them relative to the current user.
 * The resultant object will get stored into the state and thus, pass down as a prop.
 */

import React, { Component } from 'react';
import {Text,
        View,
        Alert,
        Modal,
        Image,
        Button,
        AppState,
        Vibration,
        TextInput,
        Dimensions,
        ScrollView,
        TouchableHighlight } from 'react-native';
import PushNotification from 'react-native-push-notification';

import Header from '../components/MainHeader';
import GuideScoreBoard from '../components/guideScoreBoard/GuideScoreBoard'
import { ContentStack } from '../config/router'; 
import { FloatingSingle } from '../components/FloatingMenu';

import {GET_SESSIONS, APP_LISTENER, APP_CANCEL_LISTENER, ADD_REPLY_LISTENER } from '../services/DataManager';
import NotificationController from '../services/NotificationController';

var {height, width} = Dimensions.get('window'); 


export default class Entry extends Component{
    constructor(props) {
        super(props);
        this.hide_modal = this.hide_modal.bind(this);
        this.new_message = this.new_message.bind(this);
        this.sendNotification = this.sendNotification.bind(this);
        this.SESSIONS_ORGANIZER = this.SESSIONS_ORGANIZER.bind(this);
        this.session_removed = this.session_removed.bind(this);
        this.set_listeners = this.set_listeners.bind(this);
        this.set_pending_state = this.set_pending_state.bind(this);
        this.state = {
                upcoming: {}, 
                nextSession: false, 
                showScoringBoard: false,
                conversation: false
            }
    }
    
    componentDidMount(){
        let { nextSession } = this.state

        if(!nextSession) {
            APP_LISTENER(this.SESSIONS_ORGANIZER)
            .catch((err) => console.log(err))
        }
        else {
            return;
        }
    }

    componentWillUpdate(nextProps, nextState) {

        var control = nextState.nextSession.sessions ? true : false
        var userKey = nextState.nextSession ? nextState.nextSession.userKey : false
        //console.log("ENTRY 68 WILL UPDATE", control, nextState)

        if(control) {
            this.set_listeners(userKey)
        } 
        else {
            return;
        }       
    }

    hide_modal() {
        this.setState({showScoringBoard: false}, () => {
            this.props.navigation.navigate('Home', {scoring: true})
        })
    }

    new_message(data, sender, is_new, guide_received) {
        let { conversation } = this.state
        var conversation_length = conversation ? Object.keys(conversation).length : 0
        let { scoring } = this.props.navigation.state.params

        if(!data) {
            return
        }
        else if(data && Object.keys(data).length !== conversation_length) {
            this.setState({
                conversation: data,
                guide_received: !guide_received,
                sender: sender
            }, () => {
                if(!sender && !scoring && !guide_received) {
                    this.sendNotification(
                        'New message!',
                        'Go to your chat to read what your user answered.'
                    ) 
                }
                else 
                {
                    return;
                }
            })
        }
        else { return; }
    }

    sendNotification(title, message) {
        PushNotification.cancelAllLocalNotifications()
        PushNotification.localNotification({
            title: title,
            message: message,
            color: "#E37382",
            playSound: true,
            soundName: 'default',
            vibrate: true
          });
    }  

    SESSIONS_ORGANIZER(data, date, validated){
        let { nextSession } = this.state
        var coords = data.coords
        
        if(data) {
            GET_SESSIONS(data, date, coords)
            .then((data) => {
                this.setState({
                    nextSession: data
                }, () => {
                    if(validated) {
                        return;
                    } else {
                        this.sendNotification(
                            'You got a new session!',
                            'Double tap here to read the details.'
                        )
                    }
                })
            })
            .catch((err) => console.log(err))
        }
    }

    session_removed(data) {
        // console.log("DATA MAN 39, SESSION REMOVED", data)
        if(data === 'cancelled') 
        {
            this.sendNotification(
                'Your user cancelled!',
                'Find an explanation at your wallet section and the cancelation fee when applicable. Sorry!'
            )
            return this.props.navigation.navigate('Home')
        }
        else {
            return this.props.navigation.navigate('Home')
        }
    }

    set_listeners(userKey) {
        APP_CANCEL_LISTENER(this.session_removed).catch((err) => console.log(err)),
        ADD_REPLY_LISTENER(this.new_message, userKey).catch((err) => console.log(err))
        return;
    }

    set_pending_state(type, data) {
        let { nextSession } = this.state
        var pendingSession = false

        if(nextSession) {
            pendingSession = {
                name: nextSession.profile.name,
                score: nextSession.profile.score,
                date: nextSession.sessions[0].info.scheduled,
                userKey: nextSession.userKey,
                sessionInfo: nextSession.sessions[0].info.skill,
                feedback: nextSession.feedback
            }
        }

        this.setState({
            showScoringBoard: true,
            pendingSession: pendingSession,
            type: type
        })
    }

    render() {
        let { navigation } = this.props
        let { user } = this.props.navigation.state.params
        let { conversation, 
              upcoming, 
              nextSession, 
              pendingSession, 
              type,
              guide_received,
              sender } = this.state
        // console.log("ENTRY 184, conversation", nextSession)
        return(
            <View style={{flex: 1, backgroundColor: "#4D6171"}}>
                <Header 
                    navigation={navigation} 
                    status={user.status} 
                    nextSession={nextSession} 
                    pendingSession={user.pending ?  true : false}
                    score={user.scoring? user.scoring.average : 0} 
                    set_pending_state={this.set_pending_state} />
                
                <NotificationController />

                <ContentStack 
                screenProps={{
                    conversation: conversation, 
                    guide_received: guide_received,
                    sender: sender,
                    user: user, 
                    nextSession: nextSession, 
                    New_message_notification: this.New_message_notification
                }} />   
                          
                <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showScoringBoard}
                onRequestClose={() => {return;}}>
                  <View style={{flex: 1, marginTop: 57}}>
                      <GuideScoreBoard 
                        pendingSession={pendingSession? pendingSession : user.pending} 
                        type={type} 
                        hide_modal={this.hide_modal} 
                        navigate={this.props.navigation.navigate} /> 
                  </View>
                </Modal>
            </View>   
        )
    }
}