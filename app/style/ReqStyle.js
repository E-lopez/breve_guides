'use strict'
import React, { StyleSheet } from 'react-native';

const style = {
    feedMainContainer: {
        flex: 1, 
        backgroundColor: "#4D6171"
    },
    feedContainer: {
        flex: 1,
        alignItems: 'center',
    },
    feedUserInfo: {
        justifyContent: 'flex-start', alignItems: 'flex-start', 
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: '#4D6171',
        elevation: 5,
        margin: 10,
        borderRadius: 10
    },
    feedUserInfoText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 18,
        color: "#eee"
    },
    initialMsgFeed: {
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        borderRadius: 25,
        color: "#fff",
        backgroundColor: "#4D6171",
        fontFamily: 'Comfortaa-Regular',
    },

    /**ADVICE, BADGES style */

    badgeContainer: { 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingTop: 20,
        paddingHorizontal: 10,
        height: 180
    },
    badgeWrapper: {
        width: '48%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    badgeImg: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    badgeLabel: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    },
    badgeText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff"
    },

    /*LEVEL description MODAL Style */

    levelModalWrap: {
        flex: 1
    },
    levelModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee', 
        padding: 20,
        borderTopWidth: 10,
        borderColor: "#4D6171",
        elevation: 10
    },
    levelDescriptionIndex: {
        fontFamily: "#Exo2-Regular",
        fontSize: 38,
        color: "#fff",
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 60,
        width: 60,
        borderRadius: 50,
        backgroundColor: "#4D6171"
    },
    levelDescriptionText: {
        fontFamily: "Comfortaa-Regular",
        color: "#4D6171",
        fontSize: 20,
        textAlign: 'center'
    },

    
};

export default style;
