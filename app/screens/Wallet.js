import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    Modal,
    Image,
    Button,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/WalletStyle';

import { FloatingSingle } from '../components/FloatingMenu';

import { firebaseApp } from '../services/Firebase';
import { GET_RECORDS } from '../services/DataManager';

import { CancelReasons } from '../data/data';


export default class Feedback extends Component{
    constructor(props) {
        super(props);
        this.sort_data = this.sort_data.bind(this);
        this.state = {
            data: false,
            cash_records: false,
            cash_cancelled: false
        }
    }

    componentDidMount() {
        console.log("WALLET DID MOUNT")
        GET_RECORDS().then((data) => {
            if(data) {
                console.log("WALLET DID MOUNT 41", data)
                this.setState({
                    cash_records: data['0'],
                    data: data['1'],
                    cash_cancelled: data['2']
                })
            }
        })
        .catch(() => {return;})
    }


    sort_data(data) {
        var newData = {}

        Object.keys(data).reverse().map((key) => {
            newData[key] = data[key]
        })

        this.setState({data: newData})
    }

    render() {
        let { data, cash_cancelled, cash_records } = this.state
        console.log("WALLET 66", "data", data, "cancelled", cash_cancelled, "recs", cash_records)
        return(
            <View style={{flex: 1}}>
                <ScrollView style={style.walletWrap}>
                    <Text style={style.walletTitle}>Overview</Text>
                    <View style={style.sessionsTotal}>
                        <View style={style.sessionsNumWrap}>
                            <Text style={style.sessionsNum}>{cash_records.total}</Text>
                        </View>
                        <View style={style.sessionsTotalWrap}>
                            <Text style={style.sessionsTotalTxt}>
                                ${data ? (cash_records.doubleCash + cash_records.singleCash + cash_cancelled.cancelledCash).toLocaleString() : 0}
                            </Text>
                            <Text style={style.sessionsTotalLabel}>Total Brute</Text>
                        </View>
                    </View>
                    
                    <View style={style.byMethod}>
                        <Text style={style.byMethodTitle}>By type</Text>
                        <View style={style.byMethodBoxWrapper}>
                            <View style={style.netBox}>
                                <Text style={style.byMethodFigure}> ${
                                    data ? 
                                        (cash_records.singleCash).toLocaleString() 
                                        : 
                                        0
                                    }
                                </Text>
                                <Text style={style.byMethodLabel}>Singles</Text>
                            </View>
                            
                            <View style={style.netBox}>
                                <Text style={style.byMethodFigure}>${
                                    data ? 
                                        (cash_records.doubleCash).toLocaleString() 
                                        : 
                                        0
                                    }
                                </Text>
                                <Text style={style.byMethodLabel}>Doubles</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={style.byMethod}>

                        <Text style={style.byMethodTitle}>Canceled</Text>
         
                        <View style={style.byMethodBoxWrapper}>

                            <View style={style.cancelledTotalBox}>
                            
                                    <Text style={style.byMethodFigure}>Total: </Text>
                                    <Text style={style.byMethodLabel}>${data? (cash_cancelled.cancelledCash).toLocaleString() : 0}</Text>
                            
                            </View>

                            {data ? 
                                Object.keys(cash_cancelled['newCancelled']).map((key, i) => {
                                    let item = cash_cancelled['newCancelled'][key]
                                    return(
                                        <View key={i} style={style.cancelledBox}>
                                            <View style={style.cancelledBoxInner}>
                                                <Text style={style.byMethodFigure}>{item}</Text>
                                                <Text style={style.cancelReason}>
                                                    {CancelReasons[key]}
                                                </Text>
                                            </View>
                                        </View>
                                    )
                                    
                                })
                            :
                            null
                            }
                        </View>
                    </View>
                    
                    {data ? 
                        <View style={style.walletRecords}>
                            <Text style={style.byMethodTitle}>Records</Text>
                            {Object.keys(data).map((key, i) => {
                                let rec = data[key]
                                return (
                                    <View key={i} style={style.recordBox}>
                                        <Text style={style.recordBoxTitle}>
                                            {new Date(parseInt(key)).toLocaleDateString()}  <Text style={{fontSize: 14}}>
                                                {new Date(parseInt(key)).toLocaleTimeString()} 
                                            </Text>
                                        </Text>
                                        <View style={style.recordBoxInfo}>
                                            <Text style={style.recordBoxInfoText}>{rec.method}</Text>
                                            <Text style={style.recordBoxInfoText}>-</Text>
                                            <Text style={style.recordBoxInfoText}>{rec.type}</Text>
                                        </View>
                                        <Text style={style.recordBoxTitle}>${rec.type === 'single' ? '26.000' : '39.000'}</Text>
                                    </View>
                                    )
                                })
                            }
                        </View>
                        : 
                        null
                    }
                   
                </ScrollView> 

                <View style={{bottom: 10}}>
                <FloatingSingle icon={'arrow-back'} func={'goBack'} goBack={this.props.navigation.goBack} />
                </View>
            </View>  
        )
    }
}






