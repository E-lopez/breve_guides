import React, { Component } from 'react';
import {Text,
        View,
        Image,
        Button,
        TextInput,
        ScrollView,  
        Dimensions,
        ActivityIndicator,
        TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-material-design';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { toString } from '../../services/GeoCoder';

import style from '../../style/requestComponents/GeoLocationStyle';

let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 4.615147;
const LONGITUDE = -74.113495;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class GeoLocation extends Component {
    constructor(props) {
        super(props);
        this.update_position = this.update_position.bind(this);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              },
            regionUser: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              },
            address: false,
            loading: false
        }
    }

    componentDidMount(){
        let { coords, address } = this.props.navigation.state.params.nextUser
        this.setState({
            region: {
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            regionUser : {
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            address: address
        })
    }

    update_position() {
        this.setState({loading: true})
        navigator.geolocation.getCurrentPosition(
          position => {
            this.setState({
              region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              },
              loading: false
            });
          },
        (error) => console.log(error.message),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
        );
        this.watchID = navigator.geolocation.watchPosition(
          position => {
            this.setState({
              region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }
            });
          }
        );
      }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);   
    }
    
  render() {
    let { address, loading } = this.state
    let { navigation } = this.props
    return(
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'stretch'}}>
            <View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 14}}>
                        <Text style={{marginHorizontal: 10, color: "#4D6171"}}>{address}</Text>
                    </View>

            </View>
            
            <View style ={style.container}>
                <MapView
                provider={ PROVIDER_GOOGLE }
                style={[style.map, {maxHeight: height/1.2}] }
                showsUserLocation={ true }
                showsMyLocationButton={ false }
                zoomEnabled={ true }
                fitToElements={true}
                loadingEnabled={ true }
                region={ this.state.region }
                >
                    <MapView.Marker
                        coordinate={ this.state.region }
                        image={require('../../assets/guide_marker.png')}
                    />
                    <MapView.Marker
                        coordinate={ this.state.regionUser }
                        image={require('../../assets/user_marker.png')}
                        />
                </MapView>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', width: width, paddingBottom: 10}}>
                <View style={[style.mapButtonsContainer, {width: width * 0.7}]}>
                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => 
                            this.update_position()
                        }>  
                        <View style={style.mapButtonWrap}>
                            <View style={style.mapButton}>
                                <Icon name={'person-pin-circle'} color='#4D6171'
                                    size={40}/>
                            </View>
                            <Text style={{color: "#4D6171", margin: 5, fontSize: 14}}>Locate me</Text>
                        </View>
                    </TouchableHighlight>
                    
                    <View style={{borderRightWidth: 1, borderColor: "#ccc", marginBottom: 5, right: 5}}></View>

                    <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => 
                            navigation.goBack(null)
                        }>  
                        <View style={style.mapButtonWrap} >
                            <View style={style.mapButton}>
                                <Icon name={'chevron-left'} color='#4682B4'
                                    size={40}/>
                            </View>
                            <Text style={{color: "#4682B4", margin: 5, fontSize: 14}}>Go back</Text>
                        </View>
                    </TouchableHighlight> 
                </View>
            </View>
        </View>      
    )
  }
}
