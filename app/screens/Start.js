import React, { Component } from 'react';
import {
    View,
    Modal,
    Dimensions,
    ScrollView,
    ImageBackground,
  } from 'react-native';


import InitialGuide from '../components/InitialGuide';
import Access from '../components/Access';

import background from '../assets/login_background_0.4.0.png'

import style from '../style/StartStyle.js';


export default class Start extends Component {

    constructor(props) {
        super(props);
        this.showGuide = this.showGuide.bind(this);
        this.state = {
            showGuide: this.props.modal
        };
    }

    showGuide() {
        this.setState({showGuide: !this.state.showGuide})
    }

    render() {
        return (
            <ImageBackground 
                        source={background}
                        style={style.mainContainer}>
                <Access showGuide={this.showGuide} {...this.props} />
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.showGuide}
                onRequestClose={() => {return;}}>
                    <InitialGuide showGuide={this.showGuide} {...this.props} />
                </Modal>
            </ImageBackground>
        );
    }
};
