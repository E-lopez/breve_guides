'use strict'
import React, { StyleSheet } from 'react-native';

const style = {
    chatBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        backgroundColor: '#4D6171',
    },
    chatTitle: {
        fontFamily: 'Exo2-Regular',
        color: "#4D6171",
        textAlign: 'center'
    },
    chatLabel: { 
        fontFamily: 'Exo2-Regular',
    },
    chatSendBox: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
    },
    chatSendButtonIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 100,
        paddingRight: 20
    },
    sendChatLabel: {
        fontFamily: 'Exo2-Regular',
        marginRight: 10,
        color: "#4D6171"
    },

/**CHAT TOGGLER style */
    togglerWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10
    },
    togglerMssgs: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#fff'
    },


/**READ SCREEN style */
    readMainWrap: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 2
    },
    msgUser: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 5
    },
    msgGuide: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginVertical: 2
    },
    msgWrapUser: {
        backgroundColor: '#eee',
        width: '80%',
        borderRadius: 5,
        padding: 5
    },
    msgWrapGuide: {
        backgroundColor: '#B8E0C0',
        width: '80%',
        borderRadius: 5,
        padding: 8
    },
    msgBodyUser: {
        color: "#4D6171",
        fontFamily: 'Exo2-Regular'
    },
    msgBodyGuide: {
        textAlign: 'right',
        color: "#4D6171",
        fontFamily: 'Exo2-Regular'
    },
    msgDateUser: {
        color: "#4682B4",
        fontFamily: 'Exo2-Regular'
    },
    msgDateGuide: {
        textAlign: 'right',
        color: "#4682B4",
        fontFamily: 'Exo2-Regular'
    },

/**WRITE SCREEN  style*/

    writeWrapMain: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 45,
        paddingHorizontal: 5,
        elevation: 10
    },
    writeInput: {
        width: '85%',
    },

/**PRESET MESAGGES STYLE */

    presetWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5,
        elevation: 1
    },
    chatLabelBox: {
        flexWrap: 'wrap',
        width: '80%',
        paddingHorizontal: 10
    },

    
};

export default style;


