import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    TextInput,
    ScrollView,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/CardStyle'

export default class Card extends Component {
    render() {
        let { data, left } = this.props
        return (
            <View style={[style.cardWrap, {alignItems: !left ? 'flex-end' : 'flex-start'}]}>
                    {data ? 
                        <Content data={data} />
                        :
                        <Text>No feedback yet</Text>   
                    }
                    
            </View>
        )
    }
};

class Content extends Component {
    render() {
        let { data } = this.props
        return(
            <View>
            {Object.keys(data).map((key, i) => {
                let item = data[key]
                return (
                        <View key={i} style={style.cardTitle}>
                            <Text style={style.cardTitleText}>{item}</Text>
                        </View>
                    )
                })
            }
            </View>
        )
    }
}
