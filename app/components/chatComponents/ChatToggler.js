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

let { width } = Dimensions.get('screen')


export default class Toggler extends Component {
    render() {
        let { closeChat, toggleContent } = this.props
        return(
            <View style={style.togglerWrap}>
                <TouchableHighlight
                    onPress={() => toggleContent()}
                    underlayColor="transparent">
                    <View style={style.togglerMssgs}>
                        <Text style={[style.chatTitle, {fontSize: width * 0.05, marginHorizontal: 25}]}>Preset messages</Text>
                        <Icon name="more-horiz" color="#4D6171" size={25} />
                    </View>
                </TouchableHighlight> 
                    
                <TouchableHighlight
                    onPress={() => closeChat()}
                    underlayColor="transparent">
                    <View>
                        <Icon name="close" color="#fff" size={30} />
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}