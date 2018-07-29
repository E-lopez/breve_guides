import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Alert,
        Switch,
        Picker,
        Slider,
        Button,
        Animated,
        Vibration,
        TextInput,
        Dimensions,
        ScrollView,
        DatePickerAndroid,
        TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/chatStyle/ChatWrapStyle';

import { ChatMessages } from '../../data/data';
import { POST_MESSAGE, ADD_REPLY_LISTENER } from '../../services/DataManager';

let { width } = Dimensions.get('screen')


export default class WriteMessage extends Component {
    render() {
        let { update_content, post_message, message, upcoming } = this.props
      return(
        <View style={{paddingHorizontal: 10, paddingVertical: width * 0.05}}>
            <View style={style.writeWrapMain}>
                <View style={style.writeInput}>
                    <TextInput 
                        ref={(e) => { this.message_input = e }} 
                        maxLength = {150}
                        onChangeText={(text) => update_content({message: text, code: 'f'})}
                        placeholder={'Enter your message'}
                        style={{fontSize: width * 0.05, color: "#4D6171"}}
                        underlineColorAndroid="transparent"
                        value={message}
                    />
                </View>
                <View>
                    <TouchableHighlight
                        onPress={() => { 
                            if(upcoming){
                                this.message_input.clear()
                                post_message()
                            }
                            else 
                            {
                                return;
                            }                          
                        }}
                        underlayColor="transparent">
                        <View>
                            <Icon name="send" color={upcoming ? "#4D6171" : "#eee"} size={30} />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      )
    }
}



// let { delivered, posted, update_content, post_message_to_db } = this.props
// let { index } = this.state
// return(
//     <View style={{flex: 1, justifyContent: 'space-around'}}>
//         {delivered ?
//             null
//             : 
//             <Text style={[style.chatTitle, {fontSize: width * 0.07, marginVertical: width * 0.03}]}>Select your message</Text>
//         }

//         {delivered ?
//             <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
//                 <Icon name="done-all" color="#4D6171" size={80} />
//                 <Text style={style.chatTitle}>Message delivered</Text>
//                 <Text style={style.chatTitle}>{new Date(parseInt(posted)).toLocaleTimeString()}</Text>
//             </View>
//             : 
//             <View>
//                 {ChatMessages.map((item, i) => {
//                     var color = i === index ? "#4D6171" : 'transparent'
//                     var text_color = color !== 'transparent' ? "#fff" : "#4D6171" 
//                     return(
//                         <TouchableHighlight 
//                             key={i}
//                             onPress={() => 
//                                 this.setState({index: i}, () => {
//                                     update_content({
//                                         message: item.title,
//                                         code: item.code,
//                                     })
//                                 })
//                             }
//                             underlayColor={"#FFE63D"}>
//                             <View style={[style.messageBox, {backgroundColor: color}]}>
//                                 <Image 
//                                     source={item.icon} 
//                                     style={{width: 35, height: 35, marginHorizontal: 5}} 
//                                     />
//                                 <View style={style.chatLabelBox}>
//                                     <Text style={[style.chatLabel, {fontSize: width * 0.045, color: text_color}]}>{item.title}</Text>
//                                 </View>
//                             </View>
//                         </TouchableHighlight>
//                         )    
//                     })
//                 }
//             </View>
//         }
    
//         {delivered ? 
//             null
//             :
//             <TouchableHighlight 
//             onPress={() => post_message_to_db()}
//             underlayColor="transparent">
//                 <View style={style.chatSendButtonIcon}>
//                     <Text style={style.sendChatLabel}>Send</Text>
//                     <Icon name="send" color="#fff" size={40} />
//                 </View>
//             </TouchableHighlight>
//         }
//     </View>
// )
// }