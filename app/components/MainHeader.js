import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    Modal,
    Animated,
    TextInput,
    ScrollView, 
    ActivityIndicator,
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';

import style from '../style/MainHeaderStyle';

import Status from './Status';
import UpcomingList from '../components/UpcomingList';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.updateStatus = this.updateStatus.bind(this);
        this.hide_modal_set_pending_state = this.hide_modal_set_pending_state.bind(this);
        this.state = {
            status: false,
            showUpcoming: false,
            fadeAnim: new Animated.Value(0),
            textAnim: new Animated.Value(0)
        }
    }
    componentDidMount() {
        this.setState({
            status: this.props.status
        })
    }

    updateStatus(arg) {
        if(arg) {
            this.setState({loading: true})
        } else {
            this.setState({
                status: !this.state.status,
                loading: false
            })
        }
    }

    animate() {
        if(!this.state.showAvailable) {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: 50, duration: 550}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 16, duration: 50}
                )
            ])
            .start();
        } else {
            Animated.parallel([
                Animated.timing(
                    this.state.fadeAnim,
                    { toValue: 0, duration: 250}
                ),
                Animated.timing(
                    this.state.textAnim,
                    {toValue: 0, duration: 50}
                )
            ])
            .start();
        } 
    }

    getCount() {
        let { nextSession } = this.props
        var count = false;
        if(nextSession && !nextSession.sessions[0].due) {
            count = true
        }
        return count
    }
        
    openDrawer() {
        this.props.navigation.navigate('DrawerOpen')
    }  

    hide_modal_set_pending_state(arg){

        let { showUpcoming } = this.state

        if(showUpcoming) {
            this.setState({
                showUpcoming: false
            }, () => {
                this.props.set_pending_state('new', arg)
            })
        } else {
            this.props.set_pending_state('prev', arg)
        }
        
    }
    
    render() {
        let colorBase = '#537A9A' 
        let { fadeAnim, textAnim } = this.state
        let { score, nextSession, navigation, pendingSession } = this.props
        return(
            <View>
                <View style={style.headerBox}>
                    <View>                        
                        <TouchableHighlight 
                            underlayColor={'transparent'}
                            onPress={() => this.openDrawer()}
                            >
                            <View><Icon name='menu' color={colorBase} size={35} /></View>
                        </TouchableHighlight>
                    </View>

                    
                    <View style={style.buttonsRight}> 

                        <TouchableHighlight 
                            style={style.status}
                            underlayColor={'transparent'}
                            onPress={() => {this.setState({showAvailable: !this.state.showAvailable}),
                            this.animate()
                            }}
                            >
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[style.statusCont, {color: this.state.color, marginHorizontal: 5}]}>{this.state.status? "Active" : "Inactive"}
                                </Text>
                                {this.state.loading?
                                    <ActivityIndicator size='small' color="#F5546A" />
                                :
                                    null
                                }
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight 
                            underlayColor={'transparent'}
                            onPress={() => {this.setState({
                                    showUpcoming: true
                                })
                            }}
                            >
                            <View style={style.indicator}>
                                <Text style={{color: colorBase, fontWeight: 'bold', left: 8, bottom: 8}}>
                                {this.getCount()? 
                                    <Icon name='add-circle' color="#37A1F9" size={18} /> 
                                    : 
                                    null
                                }
                                </Text>
                                <Icon name='notifications' color={this.getCount()? "#37A1F9" :colorBase} size={35} />
                            </View>
                        </TouchableHighlight>
                    

                        <View style={style.indicatorB}>
                            <Text style={{color: colorBase, fontWeight: 'bold'}}>{score}</Text>
                        </View>
        
                    </View>

                </View>
                    <Animated.View style={[style.availableWrapper, {height: fadeAnim}]}>
                        {this.state.showAvailable?
                            <Status 
                                initialStatus={this.state.status} 
                                nextSession={nextSession}
                                updateStatus={this.updateStatus} 
                                set_pending_state={this.hide_modal_set_pending_state}
                            />
                            :
                            null
                        }
                    </Animated.View>

                <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showUpcoming}
                onRequestClose={() => {return;}}>
                    <View style={style.upcomingModal}>
                        <ScrollView style={style.modalInnerBox}>
                            <UpcomingList 
                                data={nextSession} 
                                pendingSession={pendingSession}
                                set_pending_state={this.hide_modal_set_pending_state} 
                                navigation={navigation}
                            />
                        </ScrollView>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => {
                            this.setState({showUpcoming: false})
                            }}>
                            <View style={style.modalClose}>
                                <Icon name="close" color="#fff" size={60} />
                            </View>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        )
    }
}
