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
import style from '../../style/sub/StrengthsStyle'

import { ResourceBox } from './ItemBox';

import { LevelDescription } from '../../data/data';


export default class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_level: 0,
        }
    }

    componentDidMount() {
        let { currentLevel } = this.props
        if(currentLevel !== undefined) {
            this.setState({
                current_level: parseInt(currentLevel.level)
            }, () => {
                this.refs.scroll.scrollTo({x:500, y:500, animated:true});
                console.log("SCROLL", this.refs)
            })
        } else return;
    }

    saveContent(i, arg) {
        this.setState({current_level: i});
        this.props.saveContent('level', arg)
    }

    render(){
        let { current_level } = this.state
        return(
            <View style={{flex: 1, marginBottom: 50}}>

                <View style={{flexDirection: 'row', paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                    <Text style={style.levelMessageIndex}>1</Text>
                    <Text style={style.levelMessage}>Select the user level. Do not select a different level than the current unless the need is evident.</Text>
                    
                </View>
                <Text style={style.levelMessage}>Current Level: {current_level}</Text>

                <ScrollView 
                    horizontal={true}
                    ref={'scroll'}
                    showsHorizontalScrollIndicator={false}
                    style={{width: '99%'}}>
                    {LevelDescription.map((item, i) => {
                        var color = "#4D6171",
                            icon = "star-border"
                        return (
                            <TouchableHighlight
                            key={i}
                            underlayColor={'transparent'}
                            onPress={() => this.saveContent(i, item)}>
                                <View style={[style.userLevelBox, {margin: 5, backgroundColor: current_level === i ? color : "rgba(255,255,255,0.2)"}]}>
                                    <Text style={style.userLevelIndex}>{ item.level }</Text>
                                    <View style={style.userLevelContent}>
                                        <Text style={style.userLevelContentName}>{item.description}</Text>
                                    </View>
                                    <Text style={{color: "#F5546A", fontSize: 18, marginTop: 10}}>
                                        {current_level === i ? 'Current Level' : null}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}