'use strict'
import React, { StyleSheet } from 'react-native';

const style = {
    walletWrap: {
        flex: 1,
        backgroundColor: "#4D6171",
    },
    walletTitle:{
        padding: 10,
        textAlign:'center',
        fontFamily: 'PoiretOne-Regular',
        fontSize: 40,
        color: "#fff"
    },
    sessionsTotal: {
        backgroundColor: "#F5546A",
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    sessionsTotalWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    sessionsNum: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 120,
        width: 120,
        borderRadius: 200,
        borderColor: "#fff",
        borderWidth: 6,
        fontFamily: 'Exo2-Regular',
        fontSize: 50,
        color: "#fff" 
    }, 
    sessionsTotalTxt: {
        fontFamily: 'JosefinSans-Regular',
        fontSize: 40,
        color: "#fff"
    },
    sessionsTotalLabel: {
        fontFamily: 'JosefinSans-Regular',
        fontSize: 18,
        color: "#555"
    },

/**Style for BY METHOD CHUNK */
    byMethod: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginVertical: 10
    },
    byMethodTitle: {
        fontSize: 30,
        fontFamily: 'PoiretOne-Regular',
        color: "#fff",
        marginBottom: 15
    },
    byMethodBoxWrapper: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    netBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
        backgroundColor: "#E37382",
        margin: 2
    },
    cancelledTotalBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    cancelledBox: {
        height: 180,
        width: '50%',
        padding: 2,
    },
    cancelledBoxInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#E37382",
    },
    cancelReason: {
        fontSize: 24,
        fontFamily: 'PoiretOne-Regular',
        color: "#fff",
        textAlign: 'center'
    },
    byMethodBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
        backgroundColor: "#A76D75",
        margin: 2,
        marginBottom: 40
    },
    byMethodFigure: {
        fontSize: 26,
        color: "#fff",
        fontFamily: 'PoiretOne-Regular'
    },
    byMethodLabel: {
        fontSize: 26,
        color: "#fff",
        fontFamily: 'PoiretOne-Regular'
    },

    /**RECORDS Chunk */

    walletRecords: {
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: "#eee",
        borderTopWidth: 1
    },
    recordBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 10
    },
    recordBoxTitle: {
        fontFamily: 'Exo2-regular',
        fontSize: 34,
        color: "#ccc",textAlignVertical: 'center'
    },
    recordBoxInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    recordBoxInfoText: {
        fontSize: 24,
        fontFamily: 'Exo2-Regular',
        color: "#eee",
        marginHorizontal: 5
    }


};

export default style;