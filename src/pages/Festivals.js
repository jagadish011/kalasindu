import React from 'react'
import PhotoAlbum1 from '../components/PhotoAlbum1'
import Navbar from '../components/Navbar'

const Festivals = () => {

   
    // navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position.coords.latitude, position.coords.longitude);
    //   });
      
  return (
    <>
        <Navbar/>
        <div id="section2" style={{ textAlign: 'center', color: 'white', backgroundColor: 'black' , marginTop:"5em"}}>
            <PhotoAlbum1 />
        </div>
    </>
  )
}

export default Festivals