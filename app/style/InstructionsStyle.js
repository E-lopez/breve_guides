'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
    instructionsMainContainer: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    instructionsContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20
    }, 
    instructionsContainerBody: {
        alignItems: 'center'
    },
    initialMsg: {
        marginBottom: 25,
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 18,
        color: "#fff",
        backgroundColor: '#537A9A',
        padding: 10,
        borderRadius: 25
    },
    brandInstructions: {
        alignItems: 'center',
        marginVertical: 60

    },

   

    /**Style for TERMS AND CONDITIONS component */

    initialMsgConditions: {
        marginBottom: 25,
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 18,
        color: "#fff",
        backgroundColor: '#537A9A',
        padding: 10,
        borderRadius: 25
    },

})