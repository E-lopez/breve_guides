import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    Modal,
    Image,
    Button,
    Vibration,
    TextInput,
    Dimensions,
    ScrollView,
    ToastAndroid,
    ActivityIndicator,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/AccessStyle.js';

import { firebaseApp } from '../services/Firebase';
import { validateType } from '../services/AuthManager';

let { width, height } = Dimensions.get('screen')


export default class Access extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
        }
    }

    login() {   
        let { email, password } = this.state

        this.setState({loading: true})

        validateType(email, password).then((user) => {
            this.setState({
                loading: false,
                email: '',
                password: ''
            });
            this.props.navigation.navigate('Content', {user: user})
        })
        .catch((err) => {
            //console.log("ACCESS 50", err)
            this.setState({loading: false}, () => {
                var message = '¡App sólo para guías registrados!'

                if(err.code === 'auth/wrong-password') {
                    message = 'wrong password'
                }
                ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
            })    
        })
    } 

    render() {
        return(
            <View style={[style.accessMain, {height: height * 0.9}]}>
                <Image 
                source={require('../assets/breve_logo_guides_0.2.png')} 
                style= {style.accessImage} 
                />

                {this.state.loading? 
                    <ActivityIndicator size='small'  color="#F5546A" style={{marginTop: 10}}/>
                    :
                    null
                }

                <TextInput
                    style={style.textInputLogin}
                    underlineColorAndroid="#fff"
                    onChangeText={(text) => this.setState({email: text.trim()})}
                    value={this.state.email}
                    placeholder={"Email Address"}
                    placeholderTextColor="#fff" />

                <TextInput
                    style={style.textInputLogin}
                    underlineColorAndroid="#fff"
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder={"Password"}
                    placeholderTextColor="#fff" />

                <View style={style.btnsLogin}>
                    <TouchableHighlight 
                    onPress={() => this.login()} 
                    style={style.loginButton}
                    underlayColor='#CCC'>
                        <Text style={style.regButtonText}>Login</Text>
                    </TouchableHighlight>
                </View>

                <View style={style.btnsReturn}>                        
                    <TouchableHighlight 
                        underlayColor={'transparent'}
                        onPress={() => this.props.showGuide()}>
                        <View style={{justifyContent: 'center', alignItems:'center'}}>
                            <Icon name='help' size={30} color="#fff" />
                            <Text style={{fontSize: 20, color: "#fff", fontFamily: 'PoiretOne-Regular'}}>welcome</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}