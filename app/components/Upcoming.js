import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    ScrollView,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/UpcomingStyle';

import { ProSkills, DailySkills, CoreButtons } from '../data/data';
import { logout } from '../services/AuthManager';
import { SORT_UPCOMING } from '../services/DataManager';

import session from '../assets/imagination.png';
import NoSession from '../assets/attention.png';
import single from '../assets/single.png';
import double from '../assets/double.png';

let { width, height } = Dimensions.get('screen')

export default class Upcoming extends Component {
    constructor(props) {
        super(props);
        this.state = { nextUser: '' }
    }

    componentDidUpdate(prevProps, prevState) {
        let { nextSession } = this.props

        if (prevProps.nextSession !== nextSession && Object.keys(nextSession)) {
                this.contentRenderer(nextSession)
        }
    }

    contentRenderer(nextSession) {
        if(!nextSession && !nextSession.sessions[0].due) {
            this.setState({nextUser: false, feedback: false})
        }
        else {
            var profile = nextSession['profile']
            var sessions = nextSession['sessions'][0].info
            var feedback = nextSession['feedback']
            var date = parseInt(sessions.scheduled) + (parseInt(sessions.time) * (60 * Math.pow(10,3))),
                date = (new Date(date).toTimeString()).split(':', 2),
                date = date[0] + ':' + date[1]

            var nextUser = {name: profile.name,
                            age: profile.age,
                            profession: profile.profession,
                            payment: sessions.payment,
                            address: (sessions.address).split(',', 1),
                            indication: sessions.indication,
                            coords: sessions.coords,
                            type: sessions.type,
                            skill: sessions.skill,
                            topic: sessions.topic,
                            time: date,
                            level: feedback ? feedback.level.score : 0 }
            
            this.setState({nextUser: nextUser, feedback: feedback, interests: {interests: profile.interests, goals: profile.goals}})
        }
    }

    continueToDetails(){
        let { feedback, interests, nextUser } = this.state
        this.props.navigation.navigate('Request', {feedback: feedback, interests: interests, nextUser: nextUser})
    }

    render() {
        let { nextUser } = this.state    
        console.log("UPCOMING 76", nextUser, this.state)
        return(
            <TouchableHighlight
            onPress={() => this.continueToDetails()}
            underlayColor='transparent'>
                <View style={{maxWidth: width, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch'}}>

                {!nextUser?
                    <View style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
                        <Text style={[style.upcomingName, {color: "#4D6171"}]}>
                           No Session 
                        </Text>
                        <Image
                        style={{height: 150, width: 150}} 
                        source={session} />
                    </View>
                    :
                    <View style={style.upcomingBoxInner}>
                        <Text style={style.upcomingName}>
                            Upcoming Session
                        </Text>
                        <View style={style.upcommingContent}>
                            <View style={style.upcomingLevel}>
                                <Image source={nextUser.type === 'single' ? single : double}
                                    style={{width: 30, height: 30}}/>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={[style.upcommingUser, {flexWrap: 'wrap'}]}>{nextUser? nextUser.name : 'User Name'}, {nextUser? nextUser.age : 'age'}</Text>
                                <Text style={style.upcommingUser}>{nextUser? nextUser.profession : 'Profession'}</Text>
                            </View>  
                        </View>
                        <View style={[style.upcomingLocation, {width: width * 0.9}]}>
                                <Text style={style.upcommingUser}>{nextUser? nextUser.address : 'Your next user address'}</Text>
                                <Text style={style.upcommingUser}>{nextUser.indication? nextUser.indication : 'Some indication here'}</Text>
                        </View>
                        <View style={style.upcomingTime}>
                            <Text style={[style.upcommingUser, {fontSize: 30}]}>{nextUser? nextUser.time : '00:00'}</Text>
                        </View>
                        <Icon name="more-horiz" color="#4D6171" size={30} />
                    </View>
                    }
                </View>
            </TouchableHighlight>
        )
    }
}