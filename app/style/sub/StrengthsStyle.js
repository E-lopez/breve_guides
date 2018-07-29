'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {

    scoreMessageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    scoreMessage: {
        fontFamily: 'Exo2-Regular',
        fontSize: 20,
        textAlign: 'center',
        color: "#fff"
    },


    itemButtonsWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    itemScoreButtons: {
        padding: 10,  
        borderRadius: 100,
        elevation: 10
    },
    itemScoreName: {
        fontFamily: 'Exo2-Regular',
        fontSize: 20
    },
    scoreWelcome: {
        fontFamily: 'Exo2-Regular',
        fontSize: 34,
        color: "#fff"
    },
    scoreWelcomeSub: {
        fontFamily: 'Exo2-Regular',
        fontSize: 24,
        color: "#fff",
        textAlign: 'center'
    },


/**Style for LEVEL user */
levelMessageIndex: {
    backgroundColor: "#eee",
    textAlign: 'center',
    color: "#4D6171",
    fontFamily: 'Exo2-Regular',
    fontSize: 32,
    width: 40,
    height: 40,
    borderRadius: 50,
},
levelMessage: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
    color: "#fff",
    fontFamily: 'Exo2-Regular',
    fontSize: 22
},
levelWrap: {
    flex: 1, 
    flexDirection: 'row', 
},
userLevelBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 280,
    width: 250,
    borderRadius: 15,
    padding: 10
},
userLevelIndex: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Exo2-Regular',
    fontSize: 30,
    color: "#F5546A",
    backgroundColor: '#fff',
    height: 60,
    width: 60,
    marginVertical: 10,
    borderRadius: 50
},
userLevelContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
userLevelContentName: {
    textAlign: 'center',
    marginVertical: 5,
    color: "#eee",
    fontFamily: 'Exo2-Regular',
    fontSize: 16
},
userLevelContentDescription: {
    textAlign: 'center'
},


/**Style for STRENGTHS component */

    strengthsWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreTitleWrap: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        marginTop: 10,
        paddingBottom: 5,
        elevation: 5
    },
    strInitial: {
        textAlign: 'center',
        fontFamily: 'Exo2-Regular',
        fontSize: 30,
    },
    strInitialSub: {
        textAlign: 'center',
        fontFamily: 'Exo2-Regular',
        fontSize: 16,
        color: "#999",
    },
    strengthsBox: {
        flex: 1,
        paddingTop: 15,
    },


/**Style for the CommentInput in ScoreWrap */

    commentInputWrap: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
    },
    commentInputBox: {
        flex: 1,
        width: '85%',
        maxHeight: 100,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginVertical: 2,     
    },


/**Style for the SEND BUTTON in ScoreWrap */
    scoreSendButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginVertical: 20
    },
    sendButtonLabel: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 100,
        elevation: 5
    },
    sendButtonLabelText: {
        fontFamily: 'Exo2-Regular',
        fontSize: 18,
        color: "#fff",
    },

/**Style for DICTIONARY elements */
    dictAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    dictAddLabel: {
        fontFamily: 'Exo2-Regular',
        fontSize: 14,
        color: "#fff"
    },

    /**New STRENGTHS style */
    strengthsItemsWrap: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    strengthsItemsBox: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        height: 130,
        backgroundColor: "#4D6171",
        width: '100%',
        borderRadius: 100,
    },
    strengthsItemsBoxTxt: {
        textAlign: 'center',
        fontFamily: 'Exo2-Regular',
        fontSize: 16,
        color: "#eee"
    },


    scaleTitleNum: {
        textAlign: 'center',
        fontSize: 84,
        fontWeight: 'bold',
        color: "#eee"
    },
    sendScoreButton: {
        paddingVertical: 5,
        paddingHorizontal: 50,
        borderColor: "#4D6171",
        borderWidth: 2,
        borderRadius: 5,
        elevation: 2
    },
    sendScoreLabel: {
        fontSize: 40,
        fontFamily: 'Exo2-Regular',
        color: "#4D6171"
    },
    
    wordBoxInput: {
        fontSize: 17, fontFamily: 'Exo2-Regular', 
        color: "#fff"
    },


/**Style for SEND FEEDBACK */
    outroBox: {
        flex: 1,
        top: 85,
    },
    outroLine: {
        fontSize: 20,
        fontFamily: 'Exo2-Regular',
        color: "#fff",
        paddingHorizontal: 30,
        textAlign: 'center' 
    },
    sendButton: {
        flex: 1
    }
}

export default style;