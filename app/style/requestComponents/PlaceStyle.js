'use strict'
import React, { StyleSheet } from 'react-native';

module.exports =  StyleSheet.create({
    MapMainContainer: {
        flex:1,
        backgroundColor: '#FFF',
    },
    mapContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    enterDetailWrap: {
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.9)'
    },
    placeControls: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputIndication: {
        color: '#4682B4',
        height: 80,
        fontSize: 18,
        marginVertical: 10,
        textAlign: 'center', 
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        borderBottomColor: "#ccc"
    },
    detailCloseModal: {
        height: 200,
        backgroundColor: "transparent"
    },
    guideButton: {
        paddingHorizontal: 80,
        justifyContent: 'center'
    },
    userInfoHolder: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    userInfoHolderText: {
        textAlign: 'center',
        fontFamily: 'Exo2-Regular',
        fontSize: 24
    },
    

})
