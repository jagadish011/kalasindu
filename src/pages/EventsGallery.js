import React from 'react'
import PhotoAlbum3 from '../components/PhotoAlbum3'
import Navbar from '../components/Navbar'

const EventsGallery = () => {
  return (
    <>
        <Navbar/>
        <div id="section4" style={{ textAlign: 'center', color: 'white', backgroundColor: 'black', marginTop:"5em" }}>
            <PhotoAlbum3 />
        </div>
    </>
  )
}

export default EventsGallery