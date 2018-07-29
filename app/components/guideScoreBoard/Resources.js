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

export default class Resources extends Component {
    constructor(props) {
        super(props);
        this.saveContent = this.saveContent.bind(this);
        this.contentToState = this.contentToState.bind(this);
        this.state = {
            res: {link: '', title: '', key: 'listening'},
            count: 0,
        }
    }

    contentToState(key, value) {
        let { res, count } = this.state
        res[key] = value

        this.setState({
            res
        })
    }

    saveContent() {
        let { res, count } = this.state
        var Keys = Object.keys(res)

        if(Keys.includes('link') && Keys.includes('title')) 
        {
            this.props.saveContent('resources', res)
            ToastAndroid.showWithGravity('Resource saved!', ToastAndroid.SHORT, ToastAndroid.CENTER);
            this.setState({res: {link: '', title: '', key: 'listening'}, count:  count + 1})
        } 
        else 
        {
            ToastAndroid.showWithGravity('Fill every field please.', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
    }    

    render(){
        let { count, res } = this.state
        return(
            <View style={[style.strengthsWrap, {marginBottom: 50}]}>
                <View style={{flexDirection: 'row', paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={style.levelMessageIndex}>3</Text>
                    <Text style={style.levelMessage}>Share at least one online resource, based on what you learned from your student.
                        
                    </Text>
                </View>
                <Text style={{fontSize: 12, fontFamily: 'Exo2-Regular', color: "#fff"}}> ONLY secure sources (https ones).</Text>
                <View style={style.strengthsBox}>
                    <ResourceBox saveContent={this.saveContent} contentToState={this.contentToState} selected={res.key}/>
                </View>

                <Text style={{color: "#fff", fontFamily: 'Exo2-Regular', fontSize: 18, marginBottom: 20}}>Resources added: {count}</Text>
            </View>
        )
    }
}