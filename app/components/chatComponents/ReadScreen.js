import React, { Component } from 'react';
import {Text,
        View,
        TextInput,
        Dimensions,
        ScrollView,
        ToastAndroid,
        TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/chatStyle/ChatWrapStyle';

import { GuideMessages } from '../../data/data';

let { height, width } = Dimensions.get('screen')


export default class ReadMessage extends Component {
    render() {
        let { conversation } = this.props
        console.log("READ SCREEN 35", conversation)
        return(
            <View style={style.readMainWrap}>
                    {conversation ? 
                        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                            {Object.keys(conversation).map((key, i) => {
                                let message  = conversation[key]
                                var sender = message.sender === 'u' ? true : false
                                var date = new Date(parseInt(key)).toTimeString().split(':', 2)
                                console.log("READ SCREEN 48, MAP", message, key)
                                    return (
                                        <View 
                                            key={i}
                                            style={sender ? style.msgUser : style.msgGuide}>
                                            <View 
                                                style={sender ? style.msgWrapUser : style.msgWrapGuide}>
                                                <Text 
                                                    style={[sender ? style.msgBodyUser : style.msgBodyGuide, {fontSize: width * 0.05}]}>
                                                    {message.message}
                                                </Text>
                                                <Text 
                                                    style={sender ? style.msgDateUser : style.msgDateGuide}>
                                                    {date[0]}:{date[1]}
                                                </Text>
                                            </View>
                                        </View>
                                    )
                            })}
                        </ScrollView>
                        :
                        <Text style={[style.chatTitle, {fontSize: width * 0.07, marginVertical: height * 0.2}]}>Write your message</Text>
                    } 

            </View>
        )
    }
}