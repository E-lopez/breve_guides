import React from 'react'
import Geocoder from 'react-native-geocoding';

Geocoder.setApiKey('AIzaSyA-ZBOCuSSezJzlQpCRl70O6Vr36g7C0Cs'); 

export function toCoordinates(arg) {

  Geocoder.getFromLocation(arg).then(
    json => {
      var location = json.results[0].geometry.location;
    },
    error => {
      alert(error);
    }
  );

}

export function toString(lat, lng) {


  return Geocoder.getFromLatLng(lat, lng).then(
    (json) => { 
      return json.results[0].formatted_address
    },
    error => {
      alert(error);
    }
  );

}

