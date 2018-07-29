import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';


export default class Splash extends Component {

  render() {
    return(
        <View style={{flex: 1,
          justifyContent: 'center',
          alignItems: 'center', marginVertical: 80}}
          onLayout={this._onLayoutDidChange}>
        <Image 
            source={require('../assets/iso.png')} 
            style= {{height: 150, width: 200}}>
        </Image>
        <ActivityIndicator size='large'  color="#F5546A" style={{marginTop: 50}}/>
        <Text style={{marginTop: 50, color: "#F5546A", fontSize: 14}}>Hold on, Breve is changing the way people learn!</Text>
        <Text style={{marginTop: 50, fontSize: 14}}>Beta 0.1.6</Text>
      </View>
    )
  }
}
