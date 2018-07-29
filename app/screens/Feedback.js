import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    Modal,
    Image,
    Button,
    WebView,
    FlatList,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import { FeedbackImages } from '../data/data'

import { FloatingSingle } from '../components/FloatingMenu';
import { CollapsibleListItem } from '../components/CollapsibleBox'
import Filter from '../components/Filter';

import style from '../style/FeedbackStyle';


let { width, height } = Dimensions.get('screen')


export default class Feedback extends Component{
    setColor(arg) {
        var colors =  []
        if(arg.average === 5) { colors.push("green") }

        return colors;
    }

    render() {
        var scoring = this.props.screenProps.user.scoring
        var color = ['#FF2600', '#FF5400', '#FF6E00', '#FFDC00', '#4C9F70']
        return(
            <View style={{flex: 1 }}>
                <View style={style.feedMainContainer}>
                {scoring? 
                    <View style={{marginBottom: 50}}>
                        <View style={[style.feedGeneral, {maxHeight: width * 0.5}]}>
                            <View style={[style.feedGeneralNumWrap, {borderColor: color[Math.floor(scoring.average) - 1]}]}>
                                <Text style={[style.feedGeneralNum, {color: color[Math.floor(scoring.average) - 1], fontSize: width * 0.12}]}>{scoring.average}</Text>
                            </View>
                            <View style={style.feedDescriptGeneral}>
                                <Image source={require('../assets/feedback.png')} style={{width: 50, height: 50}} />
                                <Text style={style.feedDescriptGeneralTxt}>Average overall performance in a scale from 1 to 5.</Text>
        
                            </View>
                        </View>
                        
                        <ScrollView>
                            <View style={style.feedItems}>
                                {Object.keys(scoring).map((key, i) => {
                                    var count = scoring['count']
                                    var image = FeedbackImages[key]
                                    if(key !== 'average' && key !== 'generalScore' && key !== 'count' && key !== 'comments') {
                                        return(
                                            <View style={style.feedItemWrap} key={i}>
                                                <View style={[style.feedItem, {width: width * 0.45, height: width * 0.45}]}>
                                                    <Image source={image} style={{width: 50, height: 50, marginVertical: 10}} />
                                                    <Text style={[style.feedItemName, {fontSize: 20}]}>
                                                        {(key).toUpperCase()}
                                                    </Text>
                                                    <Text style={[style.feedItemName, {fontSize: 24}]}>
                                                        {Math.ceil((scoring[key]/count)*100).toFixed(0)} %
                                                    </Text>  
                                                </View>
                                            </View>
                                            )
                                        }
                                    })
                                }
                            </View>

                            <View style={style.feedClosingLine}>
                                <Text style={style.feedClosingText}>{scoring.count} have scored you!</Text>
                                <Text style={style.feedClosingTextSub}>This items are scored binarily: there were or were not present or noticed by student, divided by number of scores.</Text>
                            </View>

                            <View style={style.feedCommentsWrap}>
                                <Text style={[style.feedClosingText, {marginBottom: 20}]}>Comments</Text>
                                {scoring.comments.map((item, i) => {
                                    if(item.comment === 'none') { return }
                                        return (
                                            <View key={i} style={style.feedComment}>
                                                <Text style={style.feedCommentTxt}>{item.comment}</Text>
                                                <Text style={style.feedCommentDate}>{new Date(item.date).toDateString()}</Text>
                                            </View>
                                        ) 
                                    })
                                }

                            </View>
                        </ScrollView>
                    </View>
                    :
                    <View style={style.feedEmpty}>
                        <Image source={require('../assets/actitude.png')} style={{width: 180, height: 180, marginVertical: 20}} />
                        <Text style={style.feedEmptyText}>You have no scores yet, </Text>
                        <Text style={style.feedEmptyText}>but you will soon!</Text>
                    </View>
                    }
                    
                </View>
                <View style={{bottom: 10}}>
                    <FloatingSingle icon={'arrow-back'} func={'goBack'} goBack={this.props.navigation.goBack} />
                </View>
            </View>      
        )
    }
}