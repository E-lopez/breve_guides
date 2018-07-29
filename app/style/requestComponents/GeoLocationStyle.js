'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {

    textInputAddress: {
        color: '#4682B4',
        fontSize: 16,
        textAlign: 'center', 
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        top: 50
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    mapLoading: {
        marginBottom: 100
    },  
    mapButtonsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingTop: 5,
        backgroundColor: "#fff",
        borderRadius: 100,
        elevation: 5
    }, 
    mapButtonWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 35
    },
    mapButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    }
    
};

export default style;