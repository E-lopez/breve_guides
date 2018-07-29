'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    itemBoxWrap: {
        flexDirection: 'row',
        minWidth: '95%',
        height: 100,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 75,
        marginVertical: 5
    },
    itemIndexWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '16%',
        borderTopLeftRadius: 75,
        borderBottomLeftRadius: 75
    },
    itemIndex: {
        fontFamily: 'Exo2-Regular',
        fontSize: 50,
        color: "#fff"
    },
    itemBodyWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 5
    },
    itemBodyTitle: {
        fontFamily: 'Exo2-Regular',
        fontSize: 24,
    },
    itemBodyDescription: {
        fontFamily: 'Exo2-Regular',
        fontSize: 15,
        color: "#777"
    },
    itemEditButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10
    },

/**Style for ITEM BOX ITEM Element, component */

    itemBodyInput: {
        minWidth: '100%',
        borderBottomWidth: 2,
        borderBottomColor: "#4D6171",        
    },
    itemBodyInputWordBox: {
        flex: 1,
        minWidth: '95%',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginVertical: 2,     
    },
    wordBoxInput: {
        fontSize: 17, fontFamily: 'Exo2-Regular', 
        color: "#fff"
    },

/**Style for WORD BOX Component */
    wordMainWrap: {
        flex: 1,
    },
    wordInputWrap: {
        flex: 1,
        flexDirection: 'column',
        height: 250,
        padding: 10,
        borderRadius: 15,
    },
    wordWrap: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    wordButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },

/**Style for RESOURCES BOX components */

    resWrap: {
        flexDirection: 'column',
        padding: 10,
        borderRadius: 15,
    },
    resInputWrap: {
        flexDirection: 'column',
        height: 250,
        padding: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    resInputBox: {
        flex: 1,
        minWidth: '95%',
        paddingHorizontal: 10,
        marginVertical: 2,
        backgroundColor: "rgba(255,255,255,0.2)"     
    },
    resBoxInput: {
        fontSize: 17, fontFamily: 'Exo2-Regular', 
        color: "#fff"
    },
    resButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 45,
    },

    /**Style for SAVE BUTTONS */
    saveButtonsWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20, 
    },
    saveButtons: {
        fontFamily: 'Exo2-Regular',
        color: "#fff",

    },
}

export default style;