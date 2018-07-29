'use strict'
import React, { StyleSheet } from 'react-native';

const style = {
   
    /**Overview Style */
    userInfoWrap:{
        backgroundColor: "#4D6171",
        padding: 10,
        margin: 5,
        borderRadius: 5,
        elevation: 2
    },
    userInfoText: {
        color: "#FFE42A",
        fontFamily: 'Exo2-Regular'
    },

    /**STRENGTHS AND WEAKNESSES */

    userItemsWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    userItemsTitle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        borderRadius: 5,
        backgroundColor: "#eee"
    },
    userItemsLabel: {
        fontFamily: 'Exo2-Regular'
    },
    userOverviewComment: {
        padding: 10,
        marginTop: 15,
        marginBottom: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userOverviewCommentDate: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 20,
        color: "#4D6171",
        marginBottom: 10
    },
    userOverviewCommentText :{
        fontFamily: 'OpenSansCondensed-LightItalic',
        fontSize: 24
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


    /*LEVEL description MODAL Style */

    levelModalWrap: {
        flex: 1,
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
