import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/DrawerStyle';

import { logout } from '../services/AuthManager';
import { getUser } from '../services/DataManager';

import Header from './UserHeader';


export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}}
  }

  render() {

    const { navigate } = this.props.navigation;
    let { user } = this.props.navigation.state.params;

    return (
      <ScrollView>

        <Header name={user.profile.firstName + ' ' + user.profile.surname} />

        <ScrollView> 
          <View style={style.container}>

          <View style={style.userArea}>
            <TouchableHighlight
              underlayColor="#FFF"
              onPress={() => navigate('Entry')}
              >
              <View style={style.menuItemAlt}>
                  <Image
                  style={{height:25, width:25, marginRight: 20}} 
                  source={require('../assets/home.png')} />
                  <Text style={style.menuItemTitle}>Main</Text>
                </View>
            </TouchableHighlight>
          </View>

          <View style={[style.userArea, {backgroundColor: "#ddd"}]}>
              <TouchableHighlight
                underlayColor="#FFF"
                onPress={() => navigate('Instructions')}>
                <View style={style.menuItemAlt}>
                    <Image
                    style={{height:25, width:25, marginRight: 20}} 
                    source={require('../assets/userMenu.png')} />
                    <Text style={style.menuItemTitle}>How to use?</Text>
                  </View>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="#FFF"
                onPress={() => navigate('Terms')}>
                <View style={style.menuItemAlt}>
                    <Image
                    style={{height:25, width:25, marginRight: 20}} 
                    source={require('../assets/lock.png')} />
                    <Text style={style.menuItemTitle}>Terms and Conditions</Text>
                  </View>
              </TouchableHighlight>
            </View>

            <View style={{marginTop: 30}}>
              <TouchableHighlight
                onPress={() => logout(navigate)}
                underlayColor={"transparent"}>
                <View style={style.logoutButton}>
                  <Icon name="highlight-off" color="#4D6171" size={30} />
                  <Text style={style.logoutButtonLabel}>Logout</Text>
                </View>
              </TouchableHighlight>  
            </View>

            <View style={style.brand}>
              <Image
                style={{height:100, width:120}} 
                source={require('../assets/iso.png')} />
                <Text>Beta 0.1.6</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    );
  }

}
