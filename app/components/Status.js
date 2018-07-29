import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  Animated,
  Vibration,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
  TouchableHighlight
  } from 'react-native';
  
import { Icon } from 'react-native-material-design';

import style from '../style/MainHeaderStyle';

import { updateGuideStatus, switchStatusInactive, CHECK_PENDING_SESSIONS } from '../services/DataManager';

  export default class Status extends Component {
    constructor(props) {
      super(props);
      this.localChecking = this.localChecking.bind(this);
      this.state = {
        loading: false,
        active: false
      }
    }

    componentDidMount() {
          this.setState({active: this.props.initialStatus})      
    }

    localChecking(){
      let { nextSession } = this.props
        if(!nextSession) { this.updateStatusActive() }
        else { this.props.set_pending_state() }
    }

    updateStatusActive() {
      if(this.state.active) {
        return;
      } else {
        this.setState({loading: true}, () => {
          this.props.updateStatus(true),
          updateGuideStatus().then(() => {
              this.props.updateStatus(false),
              this.setState({
                loading: false,
                active: true
              }, () => {
                Vibration.vibrate(50),
                ToastAndroid.showWithGravity('Location updated!', ToastAndroid.SHORT, ToastAndroid.CENTER);
              })
          })
          .catch((err) => {
            this.setState({loading: false})
            console.log(err)
          }) 
        })
      }          
    }

    updateStatusInactive() {
      if(!this.state.active) {
        return;
      } else {
        this.setState({loading: true}),
        switchStatusInactive().then(() => {
          this.props.updateStatus(false),
          this.setState({
            loading: false,
            active: false
          })
        })
      }
    }
    
    render() {
      const { active } = this.state
      return(
          <Animated.View style={style.usageBox}>

            <TouchableHighlight 
              style={active?  style.active : style.usageItem}
              underlayColor='transparent'
              onPress={() => this.localChecking()}
              >
              <View style={style.usageItemGroup}>
                  <Icon name="cloud" color={ active? "#537A9A" : "#ccc" } size={30} />
                  <Animated.Text style={ active? style.usageItemLabelActive : style.usageItemLabel }>Active</Animated.Text>
              </View> 
            </TouchableHighlight>
              
            <TouchableHighlight 
              style={active? style.usageItem : style.active}
              underlayColor='transparent'
              onPress={() => this.updateStatusInactive()}
              >
              <View style={style.usageItemGroup}>
                  <Icon name="cloud-off" color={active? "#ccc" : "#537A9A" } size={30} />
                  <Animated.Text style={active? style.usageItemLabel : style.usageItemLabelActive}>Inactive</Animated.Text>
              </View> 
            </TouchableHighlight>

          </Animated.View>
      )
    }
  }
