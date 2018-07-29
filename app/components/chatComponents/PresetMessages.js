import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Animated,
        TextInput,
        Dimensions,
        ScrollView,
        ToastAndroid,
        TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/chatStyle/ChatWrapStyle';

import { ChatMessages } from '../../data/data';

let { width } = Dimensions.get('screen')


export default class ReadMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
            fadeAnim: new Animated.Value(500),
        }
    }

    componentDidMount() {
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 0, duration: 150 }
            ),
        ])
        .start();   
    }

    render() {
        let { update_content } = this.props
        let { index, fadeAnim } = this.state
        return(
            <Animated.View style={[style.presetWrap, {top: fadeAnim}]}>
                {ChatMessages.map((item, i) => {
                    var color = i === index ? "#4D6171" : 'transparent'
                    var text_color = color !== 'transparent' ? "#fff" : "#4D6171" 
                    return(
                        <TouchableHighlight 
                            key={i}
                            onPress={() => 
                                this.setState({index: i}, () => {
                                    update_content({
                                        message: item.title,
                                        code: item.code,
                                    })
                                })
                            }
                            underlayColor="transparent">
                            <View style={[style.messageBox, {backgroundColor: color}]}>
                                <View style={{backgroundColor: "#4D6171", padding: 5, borderRadius: 100}}>
                                    <Image 
                                        source={item.icon} 
                                        style={{width: 30, height: 30}} 
                                        />
                                </View>
                                <View style={style.chatLabelBox}>
                                    <Text style={[style.chatLabel, {fontSize: width * 0.045, color: text_color}]}>{item.title}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        )    
                    })
                }
            </Animated.View>
        )
    }
}