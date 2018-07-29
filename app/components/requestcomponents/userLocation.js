import React, { Component } from 'react';
import {Text,
        View,
        Modal,
        Image,
        Alert,
        TextInput,
        ScrollView,  
        Dimensions,
        TouchableHighlight, 
        Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/requestComponents/PlaceStyle'

import { FloatingSingle } from '../FloatingMenu';
import GeoLocation from './GeoLocation'

let { height, width } = Dimensions.get('screen')


export default class Place extends Component {
    constructor(props) {
        super(props);

        this.enter_details = this.enter_details.bind(this);
        this.state = {
            enterDetails: false
        }
    }

    enter_details() {
        this.setState({enterDetails: true})
    }

    render() {
    let { nextUser } = this.props.navigation.state.params

    return(
      <View style={style.MapMainContainer}>
        {nextUser ?
            <View style={[style.mapContainer, {height: height}]}>
                <GeoLocation navigation={this.props.navigation} updateAddress={this.updateAddress} enterDetails={this.enter_details}/>
            </View>
            :
            <View style={style.userInfoHolder}>
                <Text style={style.userInfoHolderText}>When you have a user waiting, you will see their location here</Text>  
            </View>
        }

        {nextUser ?
            null
            :
            <FloatingSingle 
                icon={'arrow-back'} 
                func={'goBack'} 
                goBack={this.props.navigation.goBack} />
        }
      </View>
    )
  }
}
