'use strict'
import React, { StyleSheet } from 'react-native';

const style = {
    chatButton: {
        position: 'absolute',
        bottom: 25,
        backgroundColor:'#537A9A',
        borderColor: '#537A9A',
        borderWidth: 1,
        height: 60,
        width: 60,
        right: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
                height: 1,
                width: 0
                } 
    },
    newMessageNotifWrap: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 15,
        width: 20,
        height: 20,
        borderRadius: 100,
        borderColor: '#537A9A',
        borderWidth: 1,
        backgroundColor: '#37A1F9'
    },
    newMessageNotifNum: {
        fontFamily: 'Exo2-Regular',
        color: "#fff"
    },
   
};

export default style;