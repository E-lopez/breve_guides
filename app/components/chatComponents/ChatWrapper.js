import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Modal,
        Button,
        Dimensions,
        ScrollView,
        TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/chatStyle/ChatWrapStyle';

import ReadScreen from './ReadScreen';
import WriteScreen from './WriteScreen';
import Toggler from './ChatToggler';
import PresetMessages from './PresetMessages';

import { ChatMessages } from '../../data/data';
import { POST_MESSAGE, ADD_REPLY_LISTENER } from '../../services/DataManager';

let { width, height } = Dimensions.get('screen')


export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.post_message = this.post_message.bind(this);
        this.toggleContent = this.toggleContent.bind(this);
        this.update_content = this.update_content.bind(this);
        this.state = {
            code: false,
            message: '',
            preset_messages: false
        }
    }

    post_message() {
        let { code, message, preset_messages } = this.state
        let { userKey } = this.props

        console.log("CHAT WRAPPER 56, post_message", code, message)       

        if(!code || !message) { return console.log("CHAT WRAPPER 56 no message")}
        else 
        {
            POST_MESSAGE(code, message, userKey).then(() => {
                this.setState({
                    preset_messages: false,
                    message: '',
                    code: ''
                })
            })
        }
    }

    toggleContent() {
        this.setState({preset_messages: !this.state.preset_messages})
    }

    update_content(message) {
        console.log("CHAT WRAPPER, UPDATA CONTENT 74", message)
        this.setState({
           message: message.message,
           code: message.code
        })
    }

    render() {
        let { closeChat, conversation, userKey } = this.props
        let { preset_messages, message } = this.state
        console.log("CHAT WRAPPER 90", conversation, this.state)
        return(
            <View style={{flex: 1}}>
            
                 <TouchableHighlight
                     style={{flex: 0.08, justifyContent: 'center', alignItems: 'center'}}
                     onPress={() => closeChat()}
                     underlayColor={"transparent"}>
                     <View></View>
                 </TouchableHighlight>
               
                 <View style={[style.chatBox, {flex: 0.92}]}>
                    <View style={{flex: 0.1, justifyContent: 'flex-end', alignItems: 'stretch', paddingBottom: width * 0.05, elevation: 5}}>
                        <Toggler 
                            closeChat={closeChat}
                            toggleContent={this.toggleContent} />
                    </View>

                    <View style={{flex: 0.7, backgroundColor: "#fff"}}>
                        {preset_messages ? 
                            <PresetMessages 
                                update_content={this.update_content} />
                            :
                            <ReadScreen 
                            conversation={conversation} />
                        }
                    </View>

                    <View style={{flex: 0.2, alignItems: 'stretch'}}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                        <WriteScreen
                            message={message}
                            post_message={this.post_message}
                            update_content={this.update_content}
                            upcoming={userKey ? true : false} />
                        </ScrollView>
                    </View>
                 </View>
             </View>
        )
    }
}