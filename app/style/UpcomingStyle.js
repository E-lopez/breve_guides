'use strict'
import React, { StyleSheet } from 'react-native';

const style =  {

    upcomingBox: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    upcomingName: {
        fontSize: 24,
        color: "#4D6171",
        textAlign: 'center',
        width: 250,
        marginBottom: 5,
        fontFamily: 'Comfortaa-Bold'
    },
    upcomingBoxInner: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    upcommingContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 15,
    },
    upcomingLevel: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#37A1F9",
        height: 50,
        width: 50,
        paddingBottom: 5,
        borderRadius: 100,
        marginRight: 10
    },
    upcommingUser: {
        fontSize: 20,
        fontFamily: 'JosefinSans-Regular',
        flexWrap: 'wrap',
        color: "#4D6171"
    },
    upcomingLocation: {
        flexWrap: 'wrap',
        backgroundColor: "#eee",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 2,
        paddingBottom: 2
 
    },
    upcomingTime: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    
    /**Style for UPCOMING LIST */

    upcomingContainer: {
        flex: 1,

    },
    upcomingTitle: {
        padding: 10,
        alignItems: 'center',
        borderBottomColor: "#4D6171",
        borderBottomWidth: 1,
        marginHorizontal: 45
    },
    upcomingSubTitles: {
        fontSize: 28, 
        marginBottom:5,
        color: "#4D6171"
    },
    sessionEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 90,
    },
    sessionEmptyTitle: {
        fontSize: 28
    },
    sessionCard: {
        marginVertical: 10,
    },
    sessionCardDue: {
        flex: 1,
        alignItems: 'stretch',
        marginVertical: 10,
        borderBottomColor: "#F5546A",
        borderBottomWidth: 5,
    },
    sessionDue: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sessionTitle: {
        fontSize: 24,
        fontFamily: 'Comfortaa-Regular',
        color: "#4D6171"
    },
    sessionDueTitle: {
        fontSize: 24,
        fontFamily: 'Comfortaa-Regular',
        color: "#F5546A"
    },
    sessionInfo: {   
        padding: 10,
        margin: 10,
        backgroundColor: "#4D6171",
        borderRadius: 25
    },
    sessionDueInfo: {
        padding: 10,
        margin: 10,
        backgroundColor: "#F5546A",
        borderRadius: 25
    },
    upcomingListBox: {
        alignItems: 'center',
        marginBottom: 10,

        paddingBottom: 10
    },
    upcomingCode: {
        textAlign: 'left',
        fontSize: 20,
        marginRight: 10,
        fontFamily: 'Comfortaa-Light',
        color: "#FFF",
    },
    upcomingTextChunk: {
        fontSize: 20,
        fontFamily: 'Comfortaa-Light',
        color: "#FFF",
    },
    codeEntryBox: {      
        flexDirection: 'row',
        justifyContent: 'center',
        height: 80,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 35,
        marginVertical: 15,
   
    },
    codeEntry: {
        width: 220,
        color: "#fff",
        fontSize: 28,
        textAlign: 'center'
    },
    codeSend: {
        backgroundColor: "#fff",
        borderRadius: 100,
        padding: 10
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 5,
    },
    icons: {
        height: 60,
        width: 60,
        padding: 15,
        marginRight: 10,
        backgroundColor: "#4D6171",
        borderRadius: 50
    },
    iconsDue: {
        height: 60,
        width: 60,
        padding: 15,
        marginRight: 10,
        backgroundColor: "#F5546A",
        borderRadius: 50
    },

};

export default style;