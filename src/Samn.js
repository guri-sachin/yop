import React, { useEffect, useState} from "react";
import db from "./firebase";
import { collection, onSnapshot } from 'firebase/firestore';

function GoogleMap(){
  const [users, setUsers] = useState([]);
  const [latitude, setLatitude] = useState(29.065773)
  const [longitude, setLongitude] = useState(76.040497)
 // Function is called everytime increment button is clicked
 setTimeout(() => {
  var lovk = (users.map((n) => n.lat))
    setLatitude(parseInt(lovk))
     console.log(lovk)
    
var lpvk = (users.map((n) => n.long))
   setLongitude(parseInt(lpvk))
     console.log(lpvk)
   },1000); 
 

useEffect(()=>

onSnapshot(collection(db, "users"),(snapshot)=> 
  setUsers(snapshot.docs.map(doc => doc.data()))

),[]);
  
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        
        ifameData.src=`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`
    },[latitude,longitude]);
    
    return(
        <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
         
  
            {latitude}
          <hr>
          </hr>
       
          {longitude}
        </div>

    );
}
export default GoogleMap;