'use strict'
import React, { StyleSheet } from 'react-native';

const style = {
    feedMainContainer: {
        flex: 1, 
        backgroundColor: "#4D6171", 
        paddingVertical: 10
    },

/**Style for the AVERAGE score */
    feedGeneral: {
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 5,
        elevation: 5
    },
    feedGeneralNumWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        marginHorizontal: 15,
        borderWidth: 6,
        borderColor: "#999",
        borderRadius: 100
    },
    feedGeneralNum: {
        fontFamily: 'Exo2-Regular',

    },
    feedDescriptGeneral: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    feedDescriptGeneralTxt: {
        fontFamily: 'Exo2-Regular',
        fontSize: 18,
        textAlign: 'center',
        color: '#eee'
    },
    feedDescriptGeneralTxtSub: {
        fontFamily: 'Exo2-Regular',
        fontSize: 16,
        textAlign: 'center',
        color: '#999',
    },


/**Style for FEEDBACK ITEMS */

    feedItems :{ 
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 10
    },
    feedItemWrap :{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        padding: 20, 
    },
    feedItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 100     
    },
    feedItemName: {
        fontFamily: 'Exo2-Regular',
        color: "#fff"
    },

/**Style for CLOSING LINE */
    feedClosingLine: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    feedClosingText: {
        fontFamily: 'Exo2-Regular',
        fontSize: 28,
        color: "#eee",
        marginVertical: 5
    },
    feedClosingTextSub: {
        fontFamily: 'Exo2-Regular',
        fontSize: 14,
        textAlign: 'center',
        color: "#999",
        width: '90%',
        paddingHorizontal: 10,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        marginVertical: 5,

    },

/**Style for COMMENTS */

    feedCommentsWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 200
    },
    feedComment: {
        flex: 1,
        width: '90%',
        borderBottomColor: "#537A9A",
        borderBottomWidth: 1,
        marginBottom: 10
    },
    feedCommentTxt: {
        fontFamily: 'Exo2-Regular',
        fontSize: 18,
        color: "#ddd"
    },
    feedCommentDate: {
        fontFamily: 'Exo2-Regular',
        fontSize: 14,
        color: "#aaa",
        padding: 10,
        textAlign: 'right'
    },


/**Style for conditional render */
    feedEmpty: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    feedEmptyText: {
        fontFamily: 'Exo2-Regular',
        fontSize: 24,
        color: '#eee'

    }


   


};

export default style;