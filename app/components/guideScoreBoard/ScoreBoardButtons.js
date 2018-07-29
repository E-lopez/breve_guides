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
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/sub/ScoreBoardButtonStyle';

export class InitialButtons extends Component {
    render() {
        return(
            <View style={style.scoreInitialButtons}>
                <TouchableHighlight
                    underlayColor="#FA3C56"
                    style={[style.initialButtonsWrap, {borderRightColor: "#4D6171", borderRightWidth: 3}]}
                    onPress={() => this.props.updateState()}>
                    <View  style={style.modalClose}>
                        <Image
                            style={{height:100, width:100}} 
                            source={require('../../assets/watch.png')} />
                        <Text style={[style.initialButtonsLabel, {color: '#4D6171'}]}>Later</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor="#FA3C56"
                    style={style.initialButtonsWrap}
                    onPress={() => {this.props.showContent()}} >
                    <View style={style.modalStart}>
                        <Image
                            style={{height:100, width:100}} 
                            source={require('../../assets/feedback.png')} />
                        <Text style={[style.initialButtonsLabel, {color: '#BBD7FF'}]}>Start</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}