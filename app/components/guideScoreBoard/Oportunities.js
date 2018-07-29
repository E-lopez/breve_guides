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

import { ItemBox } from './ItemBox';
import { ExampleOportunities } from '../../data/data';

import style from '../../style/sub/StrengthsStyle';

export default class Oportunities extends Component {
    constructor(props) {
        super(props);
        this.saveContent = this.saveContent.bind(this);
        this.state = { list: {} }
    }

    saveContent(key, values){
        let { list } = this.state
        list[key] = values
        this.setState({list: list})
    }

    componentWillUnmount() {
        let { list } = this.state
        if(Object.keys(list).length) {
            this.props.saveContent('oportunities', this.state.list),
            ToastAndroid.showWithGravity('Oportunities saved!', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
    }

    render(){
        let { data, baseColor } = this.props
        return(
            <View style={style.strengthsWrap}>
                <View style={style.scoreTitleWrap}>
                    <Text style={[style.strInitial, {color: baseColor}]}>Main oportunities</Text>
                    <Text style={style.strInitialSub}>Identified by previous guides. Edit if you disagree.</Text>
                </View>
    
                <View style={style.strengthsBox}>
                {data.map((item, i) => {
                    var color = item.example ? "#777" : baseColor
                        return <ItemBox key={i} item={item} baseColor={color} saveContent={this.saveContent} index={i} />                    
                    })
                }
                </View>

                {!data? 
                    <Text style={{color: "#eee", marginTop: 5, fontSize: 14, textAlign:             'center', marginHorizontal: 20}}>
                        Examples appear when user has no feedback.
                    </Text>
                    :
                    null
                }
            </View>
        )
    }
}