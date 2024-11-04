import React from 'react'
import PhotoAlbum from '../components/PhotoAlbum'
import Navbar from '../components/Navbar'


const Rangarpane = () => {
  return (
    <>
    <Navbar/>
     <div id="section1" style={{ textAlign: 'center', color: 'white', backgroundColor: 'black' , marginTop:"5em"}} >
    <PhotoAlbum  />
  </div>
    </>
   
  )
}

export default Rangarpane