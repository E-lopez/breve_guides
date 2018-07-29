import React, { Component } from 'react';
import {
    Text,
    View,
    Modal,
    Image,
    Button,
    Animated,
    Dimensions,
    ScrollView,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/sub/InitGuideBoxStyle';

let { width, height } = Dimensions.get('screen')


export default class InitBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(1)
        }
    }

    componentWillReceiveProps() {
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 0, duration: 0}
            ),
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 1, duration: 500}
            )
        ])
        .start();   
    }

    render() {
        let { data } = this.props
        let { fadeAnim } = this.state 
        return(
            <Animated.View style={[style.box, {opacity: fadeAnim, flex: 1}]}>
                <View style={{flex: 0.1}}>
                <Text style={style.guideTitle}>{data.title}</Text>
                </View>
                <View style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={data.img} style={[style.guideImg, {width: height/4, height: height/4}]} />
                </View>
                <View style={{flex: 0.2, minHeight: 10}}>  
                    <Text style={[style.guideBullet, {fontSize: width * 0.05}]}>{data.bullet}</Text>
                </View>   
            </Animated.View>
        )
    }
}