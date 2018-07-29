'use strict'
import React, { StyleSheet } from 'react-native';

const style = {
    colBox:{
        flex: 1,
        flexDirection: 'column',
        marginVertical: 5,
        backgroundColor: '#fff'
    },
    colContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        borderBottomColor: "#eee",
        borderBottomWidth: 5
    },
    colHeader: {
        height: 50,
        width: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#4D6171",
        borderWidth: 3,
        borderRadius: 100
    },
    colRate: {
        color: '#4D6171',
        fontWeight: 'bold',
        fontSize: 16
    },
    colHeaderTxt: {
        color: '#777',
        fontWeight: 'bold',
        fontSize: 16
    },
    colDescription: {
        flex: 1,
        backgroundColor: '#eee'
    },
    colSub: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20    
    },
    colBody: {
        textAlign: 'center',
        color: "#777",
        paddingHorizontal: 10,
        bottom: 5
    },

/**style for INSTRUCTIONS component */
    instructionBox:{
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        borderColor: '#EEE',
        borderWidth: 1,
        marginVertical: 5
    },
    instructionName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingHorizontal: 10
    },
    instructionNameTxt: {
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    descriptionBox: {
        flex: 1,
        height: 0
    },
    descriptionSub: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'    
    },
    instructionBody: {
        fontSize: 0,
        textAlign: 'justify'
    },
    brandInstructions: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },

};

export default style;