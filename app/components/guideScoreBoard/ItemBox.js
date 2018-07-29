import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    Modal,
    Image,
    Button,
    Picker,
    Vibration,
    TextInput,
    Dimensions,
    ScrollView,
    ToastAndroid,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../../style/sub/ItemBoxStyle'


export class WordBox extends Component{
    saveData() {
        this.props.saveContent()
        this.defInput.clear()
        this.wordInput.clear()
        this.explInput.clear()
    }

    render(){
        let { contentToState } = this.props
        return(
            <View style={style.wordMainWrap}>
                <View style={style.wordWrap}>
                    <View style={style.wordInputWrap}>
                        <View style={style.itemBodyInputWordBox}>
                            <TextInput
                            ref={input => { this.wordInput = input }} 
                            autoCapitalize='characters'
                            maxLength={100}
                            placeholderTextColor="#fff"
                            style={style.wordBoxInput}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => contentToState('word', text)}
                            placeholder={"Word, expression or phrasal"} />
                        </View>

                        <View style={style.itemBodyInputWordBox}>
                            <TextInput
                            ref={input => { this.defInput = input }} 
                            maxLength={180}
                            style={style.wordBoxInput}
                            placeholderTextColor="#fff"
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => contentToState('definition',text)}
                            placeholder={"Spanish translation."} />
                        </View>

                        <View style={style.itemBodyInputWordBox}>
                        <TextInput
                            ref={input => { this.explInput = input }} 
                            maxLength={180}
                            placeholderTextColor="#fff"
                            style={style.wordBoxInput}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => contentToState('example', text)}
                            placeholder={"Example. How would you use it?"} />
                        </View>
                    </View>

                    <View style={style.wordButtons}>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => this.saveData()}>
                            <View style={style.saveButtonsWrap}>
                                <Icon name="save" color={"#fff"} size={40} />
                                <Text style={style.saveButtons}>save word</Text>
                            </View>
                        </TouchableHighlight>    
                    </View>
                </View>
            </View>
        )
    }
};



export class ResourceBox extends Component{

    saveData() {
        this.props.saveContent()
        this.textInput.clear()
        this.linkInput.clear()
    }

    render(){
        let { contentToState, selected } = this.props
        return(
                <View style={style.resWrap}>
                    <View style={style.resInputWrap}>
                        <View style={style.resInputBox}>
                            <Picker
                                selectedValue={selected}
                                style={{color: "#fff"}}
                                mode="dropdown"
                                onValueChange={(itemValue) => contentToState('key', itemValue)}>
                                <Picker.Item label="Listening" value="listening" />
                                <Picker.Item label="Reading" value="reading" />
                                <Picker.Item label="Watching" value="watching" />
                                <Picker.Item label="Writing" value="writing" />
                            </Picker>
                        </View>

                        <View style={style.resInputBox}>
                            <TextInput
                            ref={input => { this.textInput = input }} 
                            autoCapitalize='characters'
                            clearTextOnFocus={true}
                            maxLength={100}
                            placeholderTextColor="#fff"
                            style={style.resBoxInput}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => contentToState('title', text)}
                            placeholder={"What is the link about?"} />
                        </View>

                        <View style={style.resInputBox}>
                            <TextInput
                            ref={input => { this.linkInput = input }} 
                            maxLength={180}
                            style={style.resBoxInput}
                            placeholderTextColor="#fff"
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => contentToState('link', text)}
                            placeholder={"Link here"} />
                        </View>
                    </View>

                    <View style={style.resButtons}>

                            <TouchableHighlight
                                underlayColor="transparent"
                                onPress={() => this.saveData()}>
                                <View style={style.saveButtonsWrap}>
                                    <Icon name="save" color={"#fff"} size={40} />
                                    <Text style={style.saveButtons}>save resource</Text>
                                </View>
                        </TouchableHighlight>                 
                    </View>
                </View>
        )
    }
}

