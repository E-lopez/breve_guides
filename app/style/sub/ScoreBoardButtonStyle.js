'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
/**Style for INITIAL BUTTONS */

    scoreInitialButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    initialButtonsWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        paddingVertical: 20,
    },
    modalClose: {
        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalStart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    initialButtonsLabel: {
        textAlign: 'center',
        fontFamily: 'Exo2-Regular',
        fontSize: 32,
        marginTop: 10        
    },

/**Style for CHANGER BUTTONS */
    changerButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    changeContentButton: {
        backgroundColor: '#eee',
        paddingHorizontal: 50,
        elevation: 2,
        borderRadius: 5
    }
}

export default style;