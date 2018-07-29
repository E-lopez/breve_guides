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

import style from '../../style/sub/StrengthsStyle';

import { StrengthsDescription } from '../../data/data';


export default class Strengths extends Component {
    constructor(props) {
        super(props);
        this.state = {
            general: 0,
            strengths: {},
            oportunities: {}
        }
    }

    componentDidMount() {
        let { strengths, oportunities } = this.props

        if(strengths !== undefined) {
            this.setState({
                strengths: strengths,
                oportunities: oportunities
            })

        }
    }

    setItem(arg, arg1) {
        let { strengths, oportunities, general } = this.state
        var StrKeys = Object.keys(strengths)
        var OprtKeys = Object.keys(oportunities)

        if (!StrKeys.includes("" + arg) && !OprtKeys.includes("" + arg))
        {
            if(StrKeys.length < 5)
            {
                strengths[arg] = arg1
            }
            else if (OprtKeys.length < 5)
            {
                oportunities[arg] = arg1
            }
            else {
                ToastAndroid.showWithGravity('You have 5 strengths and oportunities already.', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
        }
        else if(StrKeys.includes("" + arg))
        {
            if(OprtKeys.length < 5)
            {
                delete strengths[arg]
                oportunities[arg] = arg1
            } 
            else 
            {
                delete strengths[arg]
            }
        }
        else if (OprtKeys.includes("" + arg)) 
        {
            delete oportunities[arg]
        }

        this.setState({
            strengths: strengths,
            oportunities: oportunities
        }, () => {
            this.props.saveContent('strengths', {strengths: this.state.strengths, oportunities: this.state.oportunities})
        })
    }

    render(){
        let { baseColor, saveContent, sendFeedback } = this.props
        let { general, strengths, oportunities } = this.state
        return(
            <View style={{flex: 1, marginBottom: 50}}>

                <View style={{flexDirection: 'row', paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                    <Text style={style.levelMessageIndex}>2</Text>
                    <Text style={style.levelMessage}>Tap to select 5 strengths. Double tap to select 5 oportunities. Consider level on previous step.</Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                    {StrengthsDescription.map((item, i) => {
                        var color;
                        if(Object.keys(strengths).includes("" + item.index)) { 
                            color = 'rgba(0,255,0,0.5)'
                        }
                        else if (Object.keys(oportunities).includes( "" + item.index)) { 
                            color = '#FA3C56'
                        }
                        else { 
                            color = "#4D6171" 
                        }
                        return (
                            <View style={{width: '33.33%', padding: 5}} key={i}>
                                <TouchableHighlight
                                underlayColor={'transparent'}
                                onPress={() => {this.setItem(item.index, item.name)}}>
                                    <View style={[style.strengthsItemsBox, {backgroundColor: color}]}>
                                        <Text style={style.strengthsItemsBoxTxt}>{item.name}</Text>
                                    </View>    
                                </TouchableHighlight>
                            </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}