import React, { Component } from 'react';
import {
    Text,
    View,
    Modal,
    Image,
    Button,
    Dimensions,
    ScrollView,
    TouchableHighlight,
  } from 'react-native';
import { Icon } from 'react-native-material-design';

import InitBox from './InitialGuide/InitialGuideBox';

import style from '../style/InitGuideStyle.js';

import { SlideShow } from '../data/data';


let { width, height } = Dimensions.get('screen')


export default class InitialGuide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tip: 0
        };
    }

    setContent() {
        let { tip } = this.state
        switch(tip) {
            case 0:
                return <InitBox data={SlideShow[0]} />;
                break;
            case 1:
                return <InitBox  data={SlideShow[1]} />
                break;
            case 2:
                return <InitBox  data={SlideShow[2]} />
            case 3:
                return <InitBox  data={SlideShow[3]} />
            case 4:
                return <InitBox  data={SlideShow[4]} />
            case 5:
                return <InitBox  data={SlideShow[5]} />
            case 6:
                return <InitBox  data={SlideShow[6]} />
            case 7:
                return <InitBox  data={SlideShow[7]} />
            case 8:
                return <InitBox  data={SlideShow[8]} />
            default:
                return <InitBox  data={SlideShow[0]} />
        }
    }

    slide(arg) {
        let { tip } = this.state
        var Count = 0;
        if(tip !== 8 && arg == 'add') {
            this.setState({tip: this.state.tip + 1})
        } 
        else if(tip !== 0 && arg == 'sub') {
            this.setState({tip: this.state.tip - 1})
        } 
        else if (tip == 8) {
            this.setState({tip: 0})
        }
    }

    render() {
        return(
            <View style={style.initialGuideWrap}>
                <View style={style.initialGuideClose}>
                    {this.state.tip === 8 ?
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => this.props.showGuide()}>
                            <View  style={style.modalClose}>
                                <Icon name="close" color="#fff" size={30} />
                            </View>
                        </TouchableHighlight>
                        :
                        null
                    }
                </View>

                <View style={{flex: 1}}>
                    {this.setContent()} 
                </View>

                <View style={style.initialGuideControls}> 
                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => this.slide('sub')}>
                        <View style={style.next}>
                            <Icon name="arrow-back" color="#fff" size={30} />
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => this.props.showGuide()}>
                        <View style={style.modalClose}>
                            <Text style={{fontFamily: 'Comfortaa-Light', backgroundColor: 'rgba(255,255,255,0.4)', paddingHorizontal: 20, paddingBottom: 3, borderRadius: 25}}>Skip</Text>
                        </View>
                    </TouchableHighlight>
                
                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => this.slide('add')}>
                        <View style={style.next}>
                            <Icon name="arrow-forward" color="#fff" size={30} />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
