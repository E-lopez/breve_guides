import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    Modal,
    Image,
    Button,
    Animated,
    Vibration,
    TextInput,
    Dimensions,
    ScrollView,
    ToastAndroid,
    ActivityIndicator,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import { InitialButtons, ChangerButtons } from './ScoreBoardButtons'

import ScoreWrap from './ScoreWrap';

import style from '../../style/sub/ScoreBoardStyle'

import { POST_PENDING_SESSION, POST_FEEDBACK } from '../../services/DataManager';


export default class GuideScoreBoard extends Component {
    constructor(props) {
        super(props);
        this.showContent = this.showContent.bind(this);
        this.updateState = this.updateState.bind(this);
        this.triggerAnim = this.triggerAnim.bind(this);
        this.postFeedback = this.postFeedback.bind(this);
        this.state = {
            showContent: false,
            pendingSession: false,
            loading: false,
            fadeAnim: new Animated.Value(500),
        }
    }

    postFeedback(data) {
        let { pendingSession, hide_modal, navigate } = this.props
        POST_FEEDBACK(pendingSession.userKey, data).then(() => {
            ToastAndroid.showWithGravity("You are done! Many thanks.", ToastAndroid.SHORT, ToastAndroid.CENTER),
            hide_modal()
        })

    }

    showContent(){
        this.setState({
            showContent: !this.state.showContent, 
            loading: true
            }, () => {
                if(this.state.showContent){
                    this.triggerAnim()
                    return;
                }
            })
    }

    updateState() {
        let { type, hide_modal, pendingSession } = this.props

        if(type === "new") {
            POST_PENDING_SESSION(pendingSession).then(() => {
                hide_modal()
            }) 
        } else {
            hide_modal()
        }

        ToastAndroid.showWithGravity("Next time you change your status, score screen will show.", ToastAndroid.LONG, ToastAndroid.CENTER);
    }

    triggerAnim() {
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 500, duration: 0}
            ),
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 0, duration: 325}
            ),
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 15, duration: 325}
            ),
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 0, duration: 325}
            )
        ])
        .start();   
    }

    render() {
        let { pendingSession } = this.props
        let { showContent, fadeAnim, loading } = this.state
        return(
            <ScrollView style={style.scoreBoardWrap}>
  
                    <View>
                        <Text style={style.scoreInitialLine}>Score your student! </Text>
                        <Text style={style.scoreInitialIndication}>Tap on LATER to postpone this step. START to begin your scoring.</Text>
                    
                        <View style={style.scoreSession}>
                            <View style={style.scoreImage}>
                                <Image
                                style={{height:80, width:80}} 
                                source={require('../../assets/attention.png')} />
                            </View>
                            <View style={style.scoreInfo}>
                                <Text style={style.scoreInfoDate}>{new Date().toDateString()}</Text>
                                <Text style={style.scoreInfoText}>{pendingSession.name + ' - ' + pendingSession.sessionInfo}</Text>
                            </View>                
                        </View>
                    </View>

                {showContent? 
                    <Animated.View style={{marginBottom: 10, top: fadeAnim}}>
                        <ScoreWrap data={pendingSession.feedback? pendingSession.feedback : {}} postFeedback={this.postFeedback} showContent={this.showContent} />
                    </Animated.View>
                    :
                    <InitialButtons showContent={this.showContent} updateState={this.updateState} />
                }

                {loading ? 
                    null
                    :
                    <ActivityIndicator size='large' color="#F5546A" />
                }

                {showContent? 
                    null 
                    :
                    <Text style={style.scoreBottomLine}>IMPORTANT: if you do not score, you won't be able to change your status again.</Text>
                }
            </ScrollView>
        )
    }
}