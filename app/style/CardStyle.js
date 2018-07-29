'use strict'
import React, { StyleSheet } from 'react-native';

const style = {
    cardWrap: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    cardTitle: {
        marginBottom: 5
    },
    cardTitleText: {
        fontFamily: 'Exo2-Regular',
        fontSize: 20,
    },

/**Style for INTERESTS Box */
    interestsBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: "#eee",
        borderRadius: 10
    },
    interestsBoxTitle: {
        fontFamily: 'PoiretOne-Regular',
        fontSize: 32,
        color: "#4D6171"
    },
    interestsBoxText: {
        textAlign: 'center',
        padding: 5,
        fontSize: 24,
        fontFamily: 'OpenSansCondensed-LightItalic',
        color: "#999"
    },

/**Style for CARD COMMENT */
    cardCommentWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        padding: 20,
        borderRadius: 25,
        backgroundColor: "#eee",
    },
    cardCommentDate: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 20,
        color: "#4D6171",
        marginBottom: 10
    },
    cardComment: {
        fontFamily: 'OpenSansCondensed-LightItalic',
        fontSize: 24
    },
}

export default style;