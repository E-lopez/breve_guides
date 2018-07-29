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

import { WordBox } from './ItemBox';

import style from '../../style/sub/StrengthsStyle'

export default class Dictionary extends Component {
    constructor(props) {
        super(props);
        this.saveContent = this.saveContent.bind(this);
        this.contentToState = this.contentToState.bind(this);
        this.state = {
            wrd: {},
            count: 0,
        }
    }

    contentToState(key, value) {
        let { wrd } = this.state
        wrd[key] = value

        this.setState({wrd})
    }

    saveContent() {
        let { wrd, count } = this.state
        var Keys = Object.keys(wrd)
   
        if(Keys.includes('word') && Keys.includes('example') && Keys.includes('definition')) 
        {
            this.props.saveContent('dictionary', wrd)
            ToastAndroid.showWithGravity('Word saved!', ToastAndroid.SHORT, ToastAndroid.CENTER);
            this.setState({wrd: {}, count:  count + 1})
        } 
        else 
        {
            ToastAndroid.showWithGravity('Fill every field please.', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
    }    

    render(){
        let { baseColor } = this.props
        let { count } = this.state
        return(
            <View style={[style.strengthsWrap, {marginBottom: 20}]}>
                <View style={{flexDirection: 'row', paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={style.levelMessageIndex}>4</Text>
                    <Text style={[style.levelMessage, {paddingHorizontal: 10}]}>VOCABULARY: share up to five (5) words, expressions or phrasal verbs with your student. Keep it as short as you can.</Text>
                </View>

                <View style={style.strengthsBox}>
                    <WordBox baseColor={baseColor} contentToState={this.contentToState} saveContent={this.saveContent} />       
                </View>

                <Text style={{color: "#fff", fontFamily: 'Exo2-Regular', fontSize: 18, marginBottom: 20}}>Words added: {count}</Text>
            </View>
        )
    }
}