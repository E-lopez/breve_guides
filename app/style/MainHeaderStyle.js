'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {
    testBox: {
        backgroundColor: "#FFF",
        elevation: 5,
    },
    headerBox: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: "#fff",
        elevation: 5,
    },
    buttonsRight : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    indicator: {
        flexDirection: 'row', marginRight: 20, alignItems: 'center', justifyContent: 'center'
    },
    indicatorB: {
        flexDirection: 'row', 
        height: 35,
        width: 35,
        marginRight: 20, alignItems: 'center', justifyContent: 'center',
        backgroundColor: "#FFF",
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#537A9A"
    },

/**Stylefor STATUS toggler */

    status: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start'
    },
    statusCont: {
        fontFamily: 'PoiretOne-Regular',
        fontSize: 30,
        textAlign: 'center',
    },


/**Style for UPCOMING MODAL */

    upcomingModal: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 20,
        marginTop: 55,
        backgroundColor: "rgba(20,38,52,0.8)"
    },
    modalInnerBox: {
        backgroundColor: "#fff",
        borderRadius: 5
    },
    modalClose: {
        backgroundColor: "#4682b4",
        marginTop: 40,
        borderRadius: 5
    },

/**Style for STATUS TOGGLER component */

    availableWrapper: {
        height: 0,
        backgroundColor: '#eee'
    },    
    usageBox: {
        flexDirection: 'row',
        height: 50,
    },
    usageItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    usageItemGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    usageItemLabel: {
        fontSize: 14,
        color: '#ccc',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        textAlign: 'center'
    },
    active: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    usageItemLabelActive: {
        fontSize: 14,
        color: '#537A9A',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        textAlign: 'center'
    },
    
};

export default style;