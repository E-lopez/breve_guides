'use strict'
import React, { StyleSheet } from 'react-native';

const style = {
    filter: {
        backgroundColor: "#eee",
        height: 80, 
        padding: 10
    },
    filterBox: {
        flex: 1,
        flexDirection: 'row'
    },
    titleBoxFilter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleFilterTxt: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 15,
        color: "#4D6171"
    },
    filterButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    filterButton: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

};

export default style;