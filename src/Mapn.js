import React, { useEffect, useState} from "react";
import {  useJsApiLoader,Marker,StyleSheet, Dimensions } from '@react-google-maps/api';


function GoogleMap(){
    const App = () => {
        const [coordinates] = useState([
          {
            latitude: 48.8587741,
            longitude: 2.2069771,
          },
          {
            latitude: 48.8323785,
            longitude: 2.3361663,
          },
        ]);
    return(
        <div>
         <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={"AIzaSyBjYKwbQ8HSIIftyhrajw2t9onVBqkRzt4"} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
      </MapView>
    </View>
        </div>

    );
}
}
export default GoogleMap;