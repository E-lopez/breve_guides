'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    cancelWrap: {
        flex: 1,
        backgroundColor: "#fff"
    },
    cancelListWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    cancelListTitle: {
        fontFamily: "Exo2-regular",
        fontSize: 20,
        textAlign: 'center',
        color: "#999",
        marginTop: 10
    },
    cancelReasonWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    cancelReason: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 5,
        height: 150,
        borderRadius: 25
    },
    cancelReasonTxt: {
        textAlign: 'center',
        color: "#eee",
        marginTop: 10
    },
    cancelButtonWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    cancelButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 100,
        width: 100,
        borderRadius: 100
    }




}

export default style;