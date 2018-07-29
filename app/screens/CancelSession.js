import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    Modal,
    Image,
    Button,
    TextInput,
    Dimensions,
    ScrollView,
    ToastAndroid,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/CancelSessionStyle';

import { FloatingSingle } from '../components/FloatingMenu';
import Header from '../components/UserHeader';

import { CANCEL_SESSION, VERIFY_PENDING_SESSION } from '../services/DataManager';

import { GuideCancelReasons } from '../data/data';

let { width } = Dimensions.get('screen')

export default class CancelSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: false,
            reason: ''
        }
    }

    check_verified_session(){
        VERIFY_PENDING_SESSION()
        .then((user, db) => {
            this.validate_cancel_session(user, db)
        })
        .catch((err) => {
            ToastAndroid.showWithGravity( 
                "You cannot cancel a session after it is verified.", ToastAndroid.LONG, ToastAndroid.CENTER
            );
        })
    }

    validate_cancel_session(user, db) {
        let { type, code } = this.state
        let { data } =  this.props.navigation.state.params

        var scheduled_time = data.session.scheduled
        var expected_time = parseInt(data.session.time) * (60 * Math.pow(10, 3))

        var expected_hour = new Date(parseInt(scheduled_time) + expected_time).toLocaleTimeString()

        var waiting_time = (Date.now() + (15 * (60 * Math.pow(10, 3)))) > (parseInt(scheduled_time) + expected_time)

        var minutes_toll = (Date.now() - parseInt(data.session.time)) * (60 * Math.pow(10, 3))


        data_min = {
            userKey: data.user,
            type: data.session.type,
            amount: toll
        }

        var toll;
        
                if(waiting_time) 
                { 
                    toll = 0 
                }
                else if(!waiting_time && minutes_toll < 10) 
                {
                    toll = 2000
                }
                else  if(!waiting_time && minutes_toll >= 10)
                {
                    toll = ((Math.ceil(minutes_toll).toFixed(0) - 10) * 10) + 2000
                }


        if(!waiting_time) {
            ToastAndroid.showWithGravity( 
                "You cannot cancel a session before the time you are expected to arrive.", ToastAndroid.LONG, ToastAndroid.CENTER
            );
        }
        if(!waiting_time && code === 'waiting') 
        {
            Alert.alert(
               'Be patient',
               'You are supposed to meet at' + " " + expected_hour + ". Wanna give 10 minutes grace?",
                [
                  {text: 'No', onPress: () => { 
                      this.cancel_confirmed(user, db, type, code, data_min)
                    }},
                  {text: "I'll wait", onPress: () => { return; } , style: 'cancel'}
                ],
                { cancelable: true }
            )
        }
        else {
            Alert.alert(
                'Cancelar sesión',
                '¿Estás seguro de cancelar tu sesión?',
                [
                  {text: 'Continuar', onPress: () => { 
                      this.cancel_confirmed(user, db, type, code, data_min)
                    }},
                  {text: 'Volver', onPress: () => { return; } , style: 'cancel'}
                ],
                { cancelable: true }
            )
        }

    }

    cancel_confirmed(user, db, type, reason, data) {
        CANCEL_SESSION(user, db, type, reason, data)
        .then(() => {
            this.props.navigation.navigate('Entry')
        })
        .catch((err) => console.log(err)) 
    }

    render() {
        let { type, code, reason } = this.state
        return(
            <View style={style.cancelWrap}>
                <Header title={'Cancel session'} color={"#eee"}/>

                <ScrollView>
                    <View style={style.cancelListWrap}>
                        <Text style={style.cancelListTitle}>Tell us the reason you want to cancel your session</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40}}>
                        {GuideCancelReasons.map((item, i) => {
                            var color = item.code === code ? "#00bfff" : "#537A9A"
                                return (
                                    <TouchableHighlight 
                                        key={i}
                                        onPress={() => 
                                            this.setState({
                                                    type: item.type,
                                                    code: item.code
                                                })
                                            }
                                        style={style.cancelReasonWrap} 
                                        underlayColor="transparent"
                                        >
                                        <View style={[style.cancelReason, {width: width*0.45, backgroundColor: color}]}>
                                            <Image source={item.icon} style={{width: 40, height: 40}} />
                                            <Text style={style.cancelReasonTxt}>{item.title}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )
                            })
                        }
                    </View>

                    <TouchableHighlight 
                        onPress={() => 
                            code ?
                            this.check_verified_session()
                            :
                            null
                        }
                        style={style.cancelButtonWrap}
                        underlayColor="transparent">
                        <View style={style.cancelButton}>
                            <Icon name="delete" color="#4D6171" size={60} />
                        </View>
                    </TouchableHighlight>
                    
                </ScrollView>
                    
                <FloatingSingle icon={'arrow-back'} func={'goTo'} target={'Entry'} navigate={this.props.navigation.navigate} />
            </View>
        )
    }
}