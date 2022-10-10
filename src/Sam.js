import React, { useEffect, useState} from "react";
import db from "./firebase";

function GoogleMap(){
    const [counter, setCounter] = useState(0)
    const [lat, setLat] = useState(28.644800)
    const [lon, setLon] = useState(77.216721)
 // Function is called everytime increment button is clicked
 setInterval(() => {
    console.log('Interval triggered');
 
 //const handleClick1 = () => {
    // Counter state is incremented
    setLat(lat + 1)
    setLon(lon + 1)
 // }
}, 10000);
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(lat - 1)
  }
  
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
         
  
            <button type="button" class="btn btn-login float-right" >in+</button>
            {lat}
            <hr></hr>
            {lon}
        </div>

    );
}
export default GoogleMap;