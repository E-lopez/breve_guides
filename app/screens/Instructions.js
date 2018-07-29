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
import { CollapsibleSimple } from '../components/CollapsibleBox';
import { FloatingSingle } from '../components/FloatingMenu';

import { InstructionsContent } from '../data/data';

import { getUser } from '../services/DataManager';


export default class Instructions extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {}}
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
                source={require('../assets/userMenu.png')} />
                <Text style={style.initialMsg}>Find here main help topics and questions about Breve, our app and service.</Text>
            </View>

            {InstructionsContent.map((item, i) => {
                if(item.kind === "content") {
                    var itemHeight = item.description.length < 150 ? 100 : Math.ceil(item.description.length/1.7).toFixed(0)
                     return (
                         <CollapsibleSimple key={i} title={item.title} content={item.description}  height={'100%'} />
                        ) 
                } else {
                   return (
                            <View style={{padding: 30}} key={i}>
                                <Text style={{color: "#537A9A", fontSize: 25, textAlign: 'center'}}>{item.title}</Text>
                            </View>
                        )
                    }
                })
            }

            <View style={style.brandInstructions}>
                <Text>This is</Text>
                <Image
                style={{height:90, width:150}} 
                source={require('../assets/iso.png')} />
            </View>
        </ScrollView>

        <FloatingSingle 
            icon={'arrow-back'} 
            func={'goTo'} 
            target={'Entry'} 
            navigate={navigation.navigate} />
      </View>
    )
  }
}
