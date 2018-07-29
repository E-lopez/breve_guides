'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    scoreBoardWrap: {
        flex: 1,
        paddingTop:10,
        backgroundColor: "#F5546A"
    },
    scoreInitialLine: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'Exo2-Regular',
        color: "#fff",
        marginBottom: 5,
        paddingHorizontal: 30
    },
    scoreInitialIndication: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Exo2-Regular',
        color: "#fff",
        marginBottom: 10,
        paddingHorizontal: 30
    },
    scoreSession: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 10,
        backgroundColor: "#fff",
        elevation: 10,
    },
    scoreImage: {
        marginHorizontal: 20
    },
    scoreInfo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    scoreInfoDate: {
        fontFamily: 'Exo2-Regular',
        fontSize: 24,
        color: "#777"
    },
    scoreInfoText: {
        fontFamily: 'Exo2-Regular',
        fontSize: 20,
        color: "#777"
    },
    scoreBottomLine: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Exo2-Regular',
        color: "#fff",
        paddingHorizontal: 30,
        marginBottom: 30
    },
}

export default style;