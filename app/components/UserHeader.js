import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/DrawerStyle';

export default class Header extends Component{
        userSettings() {
            this.props.navigation.navigate('Content')
        }
    
        render() {
            let { title } = this.props
            return(
                <View style={style.header}>
                    <View style={style.headerImg}>
                        <Image source={require('../assets/job.png')}
                               style= {style.userImage} />
                    </View>
                    <View style={style.headerTxt}>
                        {this.props.name ? 
                            <Text style={style.headerTxtContent}>{this.props.name}</Text>
                            :
                            <Text style={style.headerTxtContent}>{this.props.title}</Text>
                        }
                    </View>
                </View>
            )
        }
    }
