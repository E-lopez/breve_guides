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

import style from '../style/InstructionsStyle';

import Header from '../components/UserHeader';
import { FloatingSingle } from '../components/FloatingMenu';

import { InstructionsContent } from '../data/data';


export default class TermsAndConditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: ''
        }
    }

  render() {

    let { navigation } = this.props
    let { user } = this.props.navigation.state.params
 

    return(
            <View style={style.instructionsMainContainer}>

            <Header name={user.profile.firstName + ' ' + user.profile.surname} />

              <ScrollView style={style.instructionsContainer}>
                    <View style={style.instructionsContainerBody}>
                        <Image
                        style={{height:80, width:80, marginBottom: 20}} 
                        source={require('../assets/lock.png')} />
                        <Text style={style.initialMsg}>Here you will find the small print of our services. We thank yout to have it present when you use Breve.</Text>
                    </View>
      
                    <View style={{padding: 20}}>
                        <Text>Find terms, conditions and data security policy.</Text>
                    </View>
        
                    <View style={style.brandInstructions}>
                        <Text>This is</Text>
                        <Image
                        style={{height:90, width:150}} 
                        source={require('../assets/iso.png')} />
                    </View>
              </ScrollView>

              <FloatingSingle icon={'arrow-back'} func={'goTo'} target={'Entry'} navigate={navigation.navigate} />
              
            </View>
    )
  }
}
