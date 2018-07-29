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

import MinorHeader from '../components/MinorHeader';
import { FloatingSingle } from '../components/FloatingMenu';

import { GET_RECORDS } from '../services/DataManager';

let { height } = Dimensions.get('window')

export default class Records extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        GET_RECORDS().then((data) => {
            console.log('RECORDS', data)
            this.setState({data: data})
        })
    }
    render() {
        let { data } = this.state
        return(
            <View style={{flex: 1}}>
                <MinorHeader />
                <ScrollView>
                    <View style={{alignItems: 'center', padding: 30}}>
                        <Image
                        style={{height:80, width:80, marginBottom: 20}} 
                        source={require('../assets/recordsMenu.png')} />
                        <Text style={{fontSize: 18, color: "#777"}}>Tu historial de sesiones con Breve.</Text>
                    </View>
        
                    <View >
                       {data ? 
                            Object.keys(data).map((key, i) => {
                                let record = data[key]
                                console.log("RECORD MAP", key, record)
                                return (
                                    <View key={i}>
                                        <Text>HEY {key}</Text>
                                    </View>
                                )
                            })
                            :
                            null
                        }
                    </View>
                </ScrollView>

                <FloatingSingle icon={'arrow-back'} func={'goBack'} goBack={this.props.navigation.goBack} />
            </View>   
        )
    }
}