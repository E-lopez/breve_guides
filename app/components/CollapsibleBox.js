import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    Modal,
    Image,
    Button,
    WebView,
    Animated,
    FlatList,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/CollapsibleStyle'


export class CollapsibleListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: false,
            fadeAnim: new Animated.Value(0),
            textAnim: new Animated.Value(0)
        }
    }

    triggerAnim(height) {
        if(!this.state.description) {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: height, duration: 250}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 16, duration: 50}
                )
            ])
            .start();
        } else {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: 0, duration: 250}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 0, duration: 50}
                )
            ])
            .start();
        } 
    }

  render() {
    let { key } = this.props
    let { fadeAnim, textAnim } = this.state
    return(
        <TouchableHighlight
            style={style.colBox} key={key}
            underlayColor={"#fff"}
            onPress={() => this.setState({description: !this.state.description},        this.triggerAnim(this.props.height))}
            >
            <View>
                <View style={style.colContent}>
                    <View style={style.colHeader}>
                        <Text style={style.colRate}>3</Text>
                    </View>
            
                    <View>
                        <Text style={style.colHeaderTxt}>{new Date().toDateString()}</Text>
                    </View>

                    <Icon name='expand-more' color={"#4D6171"} size={25} />

                </View>

                <Animated.View style={[style.colDescription, {height: fadeAnim}]}>
                        <View style={style.colSub}>
                            <Animated.Text style={[style.colBody, {fontSize: textAnim}]}>Content.Good command of past tensesGood command of past tensesGood command of past tensesGood command of past tenses.</Animated.Text>
                        </View>
                </Animated.View>
            </View>
        </TouchableHighlight>
    )
  }
};


/**Collapsible Box simpler style for INSTRUCTIONS component */

export class CollapsibleSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: false,
            fadeAnim: new Animated.Value(0),
            textAnim: new Animated.Value(0)
        }
    }

    triggerAnim(height) {
        if(!this.state.description) {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: height, duration: 250}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 16, duration: 50}
                )
            ])
            .start();
        } else {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: 0, duration: 250}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 0, duration: 50}
                )
            ])
            .start();
        } 
    }

  render() {

    let { fadeAnim, textAnim } = this.state

    return(
        <View style={style.instructionBox}>
            <TouchableHighlight
                underlayColor={"#fff"}
                onPress={() => this.setState({description: !this.state.description},        this.triggerAnim(this.props.height))}
                >
                <View style={style.instructionName}>
                    <Text style={style.instructionNameTxt}>{this.props.title}</Text>
                    <Icon name='expand-more' color="#777" size={35} />
                </View>
            </TouchableHighlight>

            <Animated.ScrollView style={[style.descriptionBox, {height: fadeAnim}]}>
                <TouchableHighlight
                    underlayColor={"#fff"}
                    onPress={() => this.setState({description: !this.state.description},        this.triggerAnim(this.props.height))}
                    >
                    <View style={style.descriptionSub}>
                        <Animated.Text style={[style.instructionBody, {fontSize: textAnim, padding: textAnim}]}>{this.props.content}</Animated.Text>
                    </View>
                </TouchableHighlight>
            </Animated.ScrollView> 
        </View>
    )
  }
};