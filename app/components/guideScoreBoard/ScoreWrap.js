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
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/sub/StrengthsStyle';

import Strengths from './Strengths';
import Oportunities from './Oportunities';
import Resources from './Resources';
import Dictionary from './Dictionary';
import Level from './Level';
import Comment from './Comment';

let { width } = Dimensions.get('screen')


export default class ScoreWrap extends Component {
    constructor(props) {
        super(props);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.saveContent = this.saveContent.bind(this);
        this.state = {  
                        data: {resources: []}, 
                        list: [],
                        words: [],
                        content: false, 
                    }
    }

    componentDidMount() {
        let { data } = this.props
        if(data !== undefined) {
            this.setState({data: data})
        }
    }

    saveContent(key, values) {
        let { data, list, words } = this.state

        if(key === 'strengths') {
            Object.keys(values).map((key) => {
                data[key] = values[key]
            })
        }
        else if(key === 'resources') {
            list.push(values)
            data[key] = list
        }
        else if( key === 'dictionary') {
            
            var datum = {}
            
            datum[values['word']] = {example: values['example'], definition: values['definition']} 

            words.push(datum)
            data[key] = words
        }
        else {
            data[key] = values
        }
        
        this.setState({data: data})
    }
   
    sendFeedback() {
        let { data } = this.state
        var control = Object.keys(data)

        

        if(control.length) {
            console.log("SCROEWRAP 78", data)
            if(!control.includes('strengths') || !control.includes('oportunities') || !control.includes('dictionary') || !control.includes('resources') || !control.includes('level')) {
                ToastAndroid.showWithGravity('Something is missing. Did you save resources and words?', ToastAndroid.SHORT, ToastAndroid.CENTER);
            } else {
                console.log("SCORE WRAP 84", data)
                Alert.alert(
                    "You must be sure about user's level",
                    "If you are sure, continue. Otherwise, select review and check it again.",
                       [{text: "I'm Sure", onPress: () => { 
                           this.props.postFeedback(data)
                        }},
                       {text: "Review", onPress: () => {return;}},
                        ],
                       { cancelable: false }
                    );
            }
        }
    }

    render(){
        let { data } = this.props
        console.log("GUIDE SCORE BOARD, SCORE WRAP", new Date().toTimeString().split(' ', 1)[0])
        return(
            <ScrollView style={{flex: 1}}>

                    <Text style={{fontFamily: 'Exo2-Regular', textAlign: 'center', padding: 20, fontSize: 24, color: "#4D6171"}}>
                        Every field is mandatory, so we tried to keep it short.
                    </Text>

                    <Level 
                        saveContent={this.saveContent} 
                        currentLevel={data.level}  
                    />
                    <Strengths 
                        saveContent={this.saveContent} 
                        strengths={data.strengths} 
                        oportunities={data.oportunities} 
                    />
                    <Resources 
                        saveContent={this.saveContent} 
                    />
                    <Dictionary     
                        saveContent={this.saveContent} 
                    />  
                    <Comment 
                        saveContent={this.saveContent} 
                    />  

                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableHighlight
                        onPress={() => this.props.showContent()}
                        style={style.scoreSendButton}
                        underlayColor="transparent">
                            <View  style={[style.sendButtonLabel, {backgroundColor: "#E37382", width: width * 0.4, height: width * 0.2}]}>
                                <Text style={style.sendButtonLabelText}>Restart</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                        onPress={() => this.sendFeedback()}
                        style={style.scoreSendButton}
                        underlayColor="transparent">
                            <View style={[style.sendButtonLabel, {backgroundColor: "#4D6171", width: width * 0.4, height: width * 0.2}]}>
                                <Text style={style.sendButtonLabelText}>Send!</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

            </ScrollView>            
        )
    }
}