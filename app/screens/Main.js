import React, { Component } from 'react';
import { ScrollView, TouchableHighlight, Vibration, AsyncStorage } from 'react-native';

import Start from './Start';
import Splash from './Splash';

import { BYPASS_LOGIN } from '../services/AuthManager';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            modal: true
        }
    }

    componentDidMount() {

        var scoring = this.props.navigation.state.params ? this.props.navigation.state.params.scoring : false
        
        BYPASS_LOGIN()
        .then((user) => {
            this.setState({modal: false, user: user}, () => {
                this.props.navigation.navigate('Content', {user: user, scoring: scoring})
            })
        })
        .catch((err) => {
            this.setState({loading: false})
        })
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: "#fff"}}>
                {this.state.loading ? 
                    <Splash /> 
                    : 
                    <Start {...this.props} modal={this.state.modal} user={this.state.user} />   
                }  
            </ScrollView>
        );
    }
};
