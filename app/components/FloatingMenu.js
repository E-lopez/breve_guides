import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Modal,
        Button,
        Dimensions,
        ScrollView,
        TouchableHighlight } from 'react-native';
import { Card, Icon, Avatar } from 'react-native-material-design';
import style from '../style/FloatingStyle';

import Chat from '../components/chatComponents/ChatWrapper';

let { width, height } = Dimensions.get('screen')


export class FloatingSingle extends Component {
    constructor(props) {
        super(props);
        this.closeChat = this.closeChat.bind(this);
        this.state = {
            show_chat: false,
            show_notif: false
        }
    }

    adaptativeFunction() {
        let { func, navigate, target, goBack } = this.props
        if(func === "chat") {
            this.setState({
                show_chat: true,  
                show_notif: false          
            })
        }
        else if (func === "goTo") {
            navigate(target)
        }
        else if (func === 'goBack') {
            goBack(null)
        }
    }

    closeChat(){
        this.setState({show_chat: false})
    }

    count_replies(data) {
        var count = 0;

        Object.keys(data).map((key) => {
            let item = data[key]
            if(item.sender === 'u') {
                return count += 1
            }
            else {
                return;
            }
        })
        return count;
    }

    render() {
        let { show_notif } = this.state
        let { userKey, 
              New_message_notification, 
              conversation,
              guide_received,
              sender } = this.props
        var count = conversation ? this.count_replies(conversation) : 0
        console.log("F MENU 67", conversation, guide_received)
        return(
            <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>  

                <TouchableHighlight style={style.chatButton}
                    onPress={() => this.adaptativeFunction()}
                    underlayColor='#fff'>   
                    <View>                                     
                        <View>
                            <Icon name={this.props.icon} 
                                color='#fff' 
                                style={{marginBottom:1}}/>
                        </View>
                    </View>
                </TouchableHighlight>

                {guide_received && !sender?
                    <View style={[style.newMessageNotifWrap, {bottom: 65}]}>
                        <Text style={style.newMessageNotifNum}>1</Text>
                    </View>
                    :
                    null
                } 
          
                <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.show_chat}
                onRequestClose={() => {return;}}>
                    <View style={{flex: 1}}>
                        <Chat 
                            closeChat={this.closeChat}
                            conversation={conversation}
                            userKey={userKey}
                        />
                    </View>
                </Modal>
            </View>
        )
    }
};

