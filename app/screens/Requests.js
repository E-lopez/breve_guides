import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    Modal,
    TextInput,
    ScrollView,
    Dimensions,  
    TouchableHighlight, 
    Button } from 'react-native';
import { Icon } from 'react-native-material-design';
import style from '../style/ReqStyle'

import { UserPath, LevelDescription } from '../data/data';

import Card from '../components/Card';
import { FloatingSingle } from '../components/FloatingMenu';


let { width, height } = Dimensions.get('window')

/**BADGE component renders the cards that will be used as buttons in this screen. Pulls the data from props and map this data from the internal DB. Properties like color or icon come from there too. 
 * They have a function() associated also passed as a prop: filter().
 * Props: res, short for recource. Filter, the function, scrolling function to scroll the content into the users view, implementend in REQUEST component.
 */
class Badge extends Component {
    render() {
        let { res, filter, scroll } = this.props
        return (
            <TouchableHighlight 
                underlayColor={res.color}
                style={[style.badgeWrapper, {backgroundColor: res.color}]}
                onPress={() => {filter(res.title, res.color), scroll(0)}}
                >
                <View style={{backgroundColor: res.color}}>
                    <View style={style.badgeImg}>
                        <Image source={res.img} style={{height: 70, width: 70}} />
                    </View>
                    <View style={style.badgeLabel}>
                        <Text style={style.badgeText}>{res.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
};


export default class Request extends Component {
    constructor(props) {
        super(props);
        this.filterContent = this.filterContent.bind(this);
        this.scrollThing = this.scrollThing.bind(this);
        this.showModal = this.showModal.bind(this);
        this.state = {
            filter: false,
            color: '#4D6171',
            showLevelDescription: false
        }
    };

    filterContent(arg, arg1) {
            this.setState({filter: arg.toLowerCase(), color: arg1})
    }; 

    serveContent() {
        let { filter } = this.state
        let { feedback } = this.props.navigation.state.params
        
        if(filter === 'strenghts') {
            return {core: feedback.strengths, comment: feedback.comment, date: feedback.posted}
        } 
        else if (filter === 'oportunities') {
            return {core: feedback.oportunities, comment: feedback.comment,  date: feedback.posted}
        }
    }

    scrollThing(arg){
        this.refs.scroll.scrollTo({x:0, y:arg, animated:true});
    }

    showModal() {
        let { feedback } = this.props.navigation.state.params

        if(feedback !== undefined) {
            this.setState({showLevelDescription: true})
        } else return 
    }

  render() {
    let { feedback, nextUser } = this.props.navigation.state.params
    var Level = feedback ? LevelDescription["" + feedback.level.level] : false
    console.log("REQUEST 94", feedback, nextUser)
    return(
    <View style={style.feedMainContainer}>
    
        <TouchableHighlight
        onPress={() => this.showModal()}
        underlayColor="transparent">
            <View style={style.feedUserInfo}>
                <Text style={style.feedUserInfoText}>User name: {nextUser.name}</Text>
                <Text style={style.feedUserInfoText}>Main skill: {nextUser.skill}</Text>
                <Text style={style.feedUserInfoText}>Topic: {nextUser.topic}</Text>
                <Text style={style.feedUserInfoText}>Level: {feedback? feedback.level.level : '--'}</Text>
            </View>
        </TouchableHighlight>

        <ScrollView ref='scroll'>

            <View style={style.badgeContainer}>
                {
                    UserPath.map((res, i) => {
                        return (
                                <Badge 
                                    key={i} 
                                    res={res} 
                                    filter={this.filterContent} 
                                    scroll={this.scrollThing} />
                                )
                    })
                }
            </View>

            <View style={{paddingHorizontal: 10}}>
                {!nextUser?
                    <Text style={{textAlign: 'center', color: "#fff", padding: 40, fontFamily: 'Comfortaa-Regular', fontSize: 18}}>You will see detailed information about your next user. Use it to build up your next session.</Text>
                    :
                    <Card data={this.serveContent()} color={this.state.color} title={this.state.filter} />
                }
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 50}}>
                <View style={{paddingHorizontal: 5}}>
                    <Button 
                    title="go Up" 
                    color={"#F5546A"}
                     onPress={() => {this.scrollThing(0)}} />
                </View>
                <View style={{paddingHorizontal: 5}}>
                    <Button 
                    title="Level Description" 
                    color={"#F5546A"} 
                    onPress={() => {this.showModal()}} />
                </View>
            </View>
        
        </ScrollView>

        <FloatingSingle 
            icon={'arrow-back'} 
            func={'goBack'} 
            goBack={this.props.navigation.goBack} />

        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.showLevelDescription}
        onRequestClose={() => {return;}}>
           <View style={style.levelModalWrap}>
                
                <TouchableHighlight
                    style={{flex: 0.5}}
                    onPress={() => this.setState({showLevelDescription: false})}
                    underlayColor="transparent">
                        <Text style={{color: "transparent"}}>.</Text>
                </TouchableHighlight>
                
       
                <TouchableHighlight
                style={{flex: 0.5}}
                onPress={() => this.setState({showLevelDescription: false})}
                underlayColor="transparent">
                    <View style={style.levelModal}>
                        {Level ? 
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={style.levelDescriptionIndex}>{Level.level}</Text>
                                <Text style={style.levelDescriptionText}>CEFR equivalent: {Level.CEFR}</Text>
                                <Text style={[style.levelDescriptionText, {fontSize: width * 0.045}]}>{Level.description}</Text>
                            </View>
                            :
                            <View>
                                <Text style={style.levelDescriptionText}>When a user has no level, it means that is his/her first time with us or is comming back after deactivating his/her account. Nevertheless, needs assesment. Go for it!</Text>
                            </View>
                        }
                    </View>
                </TouchableHighlight>
            </View>
        </Modal>
      </View>
    )
  }
}





