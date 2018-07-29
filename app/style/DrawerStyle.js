'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#4D6171",
        elevation: 2
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 20
    },
    headerTxt: {
        alignItems: 'flex-start',
    },
    headerTxtContent: {
        color: '#fff',
        fontFamily: 'Exo2-Regular',
        fontSize: 28,
        textAlign: 'center'
    },

    /*Style for the Drawer Component*/

    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    topicHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    },
    menuItem: {
        flexDirection: 'row', alignItems: 'center',
    },
    menuItemAlt: {
    flexDirection: 'row', alignItems: 'center',
    marginVertical: 15
},
    menuItemTitle: {
        fontFamily: 'Exo2-Regular',
        fontSize: 20,
        color: "#537A9A"
    },
    userArea: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    borderColor: "#EEE",
    borderBottomWidth: 1,
    padding: 20
    },
    brand: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    right: 10
    },

/*Logout Button */
    logoutButton : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#4D6171",
        padding: 10,
        paddingLeft: 20
    },
    logoutButtonLabel: {
        fontFamily: 'Exo2-Regular',
        fontSize: 16,
        color: '#4D6171',
        marginLeft: 10
    }


}

export default style;