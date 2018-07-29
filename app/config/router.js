import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Main from '../screens/Main'
import Entry from '../screens/Entry';
import CancelSession from '../screens/CancelSession';

/**Screens for the nested ContentStack, sessions info, wallet, feedback */
import Core from '../components/Core';
import Requests from '../screens/Requests';
import Feedback from '../screens/Feedback';
import Wallet from '../screens/Wallet'


/**Screens for Request details */
import UserOverview from '../components/requestcomponents/userOverview';
import UserLocation from '../components/requestcomponents/userLocation';

/**Screens for instructions and T&C */
import Instructions from '../screens/Instructions';
import TermsAndConditions from '../screens/TermsAndConditions';

import Drawer from '../components/Drawer';


const InstructionsStack = TabNavigator({
    InstructionsUser: {
        screen: Instructions,
        navigationOptions: {
            tabBarIcon: () => ( <Image
                style={{height:20, width:20}} 
                source={require('../assets/userMenu.png')} />)
        },
    },
    Terms: {
        screen: TermsAndConditions,
        navigationOptions: {
            tabBarIcon: () => (<Image
                style={{height:20, width:20}} 
                source={require('../assets/lock.png')} />)
        }
    },
},
{   
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true, 
        allowFontScaling:true, 
        indicatorStyle: {
            backgroundColor: '#4682D4'
        },
        showLabel: false,
        style: {
            backgroundColor: '#eee',
            height: 40
        },
    }
});


const RequestStack = TabNavigator({
    SkillSelect: {
        screen: UserOverview,
        navigationOptions: {
            tabBarLabel: "Usuario",
            tabBarIcon: () => (<Image
                                style={{height:25, width:25}} 
                                source={require('../assets/man.png')} />)
        }
    },
    Place: {
        screen: UserLocation,
        navigationOptions: {
            tabBarLabel: "Mapa",
            tabBarIcon: () => (<Image
                                style={{height:25, width:25}} 
                                source={require('../assets/placeholder.png')} />)
        }
    },
},
{   
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true, 
        allowFontScaling:true, 
        indicatorStyle: {
            backgroundColor: '#3F94DB'
        },
        showLabel: false,
        style: {
            backgroundColor: '#4D6171',
        },
    }
})


export const ContentStack = StackNavigator({
    CoreView: {
        screen: Core
    },
    Request: {
        screen: RequestStack
    },
    Feedback: {
        screen: Feedback
    },
    Wallet: {
        screen: Wallet
    },
},
{
    headerMode: 'none',
    initialRouteName: 'CoreView',
    gestures: 'true'
})


const EntryStack = DrawerNavigator({
    Entry: {
        screen: Entry
    },
    Cancel: {
        screen: CancelSession
    },
    Instructions:{
        screen: InstructionsStack
    }
},{
    drawerWidth: 300,
    drawerBackgroundColor: "#eee",
    contentComponent: props => <Drawer {...props} />
})


/**ROOT
 * Divides the app in four blocks:
 * A starting screen for welcoming users and giving them an overview of the bussiness.
 * An authentication zone, for login and register.
 * An account area, for setting information, preferences and payment methods.
 * A Schedule path, that allows users to access to our services. 
 * A minor in functionality, though important in content, terms and conditions and instructions area.
 */
export const Root = StackNavigator({
    Home: {
        screen: Main
    },
    Content: {
        screen: EntryStack
    }
},
{
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Home',
    gestures: 'true'
})
