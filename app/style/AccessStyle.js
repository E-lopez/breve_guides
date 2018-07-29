'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    accessMain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    accessImage: {
        width: 200,
        height: 100,
    },
    textInputLogin: {
        color: '#fff',
        height: 60,
        width: 300,
        fontSize: 20,
        textAlign: 'center',  
    },
    btnsLogin: {
        flexDirection: 'column',
        marginBottom: 20
    },
    loginButton: {
        marginTop: 10,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: 200,
        height: 50,
        borderRadius: 25,
    },
    goToregButton: {
        marginTop: 10,
        padding: 11,
        backgroundColor: '#777',
        width: 200,
        height: 50,
        borderRadius: 25,
        borderColor: "#777",
        borderWidth: 2
    },
    regButtonText: {
        color: '#F5546A',
        textAlign: 'center',
        fontFamily: 'PoiretOne-Regular',
        fontSize: 24
    },
    welcome: {
        fontFamily: 'PoiretOne-Regular'
    },


   
};

export default style;