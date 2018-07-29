'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    coresBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 10,
        paddingBottom: 30,
        backgroundColor: "#4D6171"
    },
    instruction: {  
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    reqBox: {
        flex: 1,
        marginBottom: 15,
        paddingVertical: 10,
        borderRadius: 5,
    },
    coreBox: {
        flex: 1,
        height: 120,
        marginBottom: 10,
        borderRadius: 5,
    },
    innerCoreBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 20
    },
    coreName: {
        fontSize: 24,
        color: "#FFF",
        textAlign: 'center',
        fontFamily: 'Comfortaa-Bold'
    }
};

export default style;