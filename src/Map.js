import React, { useState,useEffect } from 'react';
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import { initializeApp } from "firebase/app";
import axios from "axios";


const containerStyle = {
  width: '400px',
  height: '400px'
};


function MyComponent() {

    const [product,setProducts] =useState([]);
    const [product1,setProducts1] =useState([]);
    const [latitude,setLatitude]= useState(28.644800);
    const [longitude,setLongitude]= useState(77.216721);
    


   
    useEffect(()=>{
      
       axios.get("http://localhost:3306/loee").then(res=>setProducts(res.data));
    

       console.log(product)
       var data =product.lon
       console.log(data)
 },[]);


   
 setInterval(() => {
  console.log('Interval triggered');

//const handleClick1 = () => {
  // Counter state is incremented
  setLatitude(latitude + 1)
  setLongitude(longitude + 1)
// }
}, 10000);
    
     //var latitude = 30.741482;
    // var longitude = 76.768066;

     //var latitude1 = 	28.644800;
    // var longitude2  = 77.216721;
     console.log(latitude);
     console.log(longitude);


    const products = {
      
      lat:latitude,
      lng: longitude
      
    };


    
    

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBjYKwbQ8HSIIftyhrajw2t9onVBqkRzt4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(products);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={products}
   
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker 
        
      
        
        position={products}/>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)