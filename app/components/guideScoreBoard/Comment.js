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
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import { ResourceBox } from './ItemBox';

import style from '../../style/sub/StrengthsStyle'

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        }
    }

    saveContent() {
        this.props.saveContent('comment', this.state.comment)
    }

    render(){
        return(
            <View style={{flex: 1, marginBottom: 50}}>

                <View style={{flexDirection: 'row', paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                    <Text style={style.levelMessageIndex}>5</Text>
                    <Text style={style.levelMessage}>Drop a useful comment here! (Optional)</Text>
                </View>
             
                <View style={style.commentInputWrap}>
                    <View style={style.commentInputBox}>
                        <TextInput
                        ref={input => { this.wordInput = input }} 
                        maxLength={100}
                        placeholderTextColor="#fff"
                        style={style.wordBoxInput}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({comment: text})}
                        onEndEditing={() => this.saveContent()}
                        placeholder={"Tap to comment"} />
                    </View>
                </View>
       
            </View>
        )
    }
}