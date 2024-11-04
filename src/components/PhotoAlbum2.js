import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import performance1 from '../assets/Gallery_images/p11.jpg';
import performance2 from '../assets/Gallery_images/p2.jpg';
import performance3 from '../assets/Gallery_images/p3.jpg';
import performance4 from '../assets/Gallery_images/p4.jpg';
import performance5 from '../assets/Gallery_images/p5.jpg';
import performance6 from '../assets/Gallery_images/p6.jpg';
import performance7 from '../assets/Gallery_images/p7.jpg';
import performance8 from '../assets/Gallery_images/p8.jpg';
import performance9 from '../assets/Gallery_images/p9.jpg';
import performance10 from '../assets/Gallery_images/p10.jpg';
import performance11 from '../assets/Gallery_images/p1.jpg';
import performance12 from '../assets/Gallery_images/p12.jpg';
import performance13 from '../assets/Gallery_images/00000IMG_00000_BURST20191124083926304_COVER.jpg';
import performance14 from '../assets/Gallery_images/00100lrPORTRAIT_00100_BURST20200221203721160_COVER.jpg';
import performance15 from '../assets/Gallery_images/2022-11-03-19-52-08-293.jpg';
import performance16 from '../assets/Gallery_images/17239682_416899035309921_7526350013016672471_o.jpg';
import performance17 from '../assets/Gallery_images/17240382_416900308643127_1397544048396443226_o.jpg';
import performance18 from '../assets/Gallery_images/17240587_416899328643225_2410181620777217740_o.jpg';
import performance19 from '../assets/Gallery_images/1686984819437.jpg';
import performance20 from '../assets/Gallery_images/1686984819534.jpg';
import performance21 from '../assets/Gallery_images/1686984819624.jpg';
import performance22 from '../assets/Gallery_images/1686984819657.jpg';
import performance23 from '../assets/Gallery_images/1686984819686.jpg';
import performance24 from '../assets/Gallery_images/1686984819720.jpg';
import performance25 from '../assets/Gallery_images/1686984819753.jpg';
import performance26 from '../assets/Gallery_images/1686984819776.jpg';
import performance27 from '../assets/Gallery_images/1686984819804.jpg';
import performance28 from '../assets/Gallery_images/1686984819826.jpg';
import performance29 from '../assets/Gallery_images/1686984819871.jpg';
import performance30 from '../assets/Gallery_images/1686984819972.jpg';
import performance31 from '../assets/Gallery_images/1686985071921.jpg';
import performance32 from '../assets/Gallery_images/1686985071940.jpg';
import performance33 from '../assets/Gallery_images/1686985072060.jpg';
import performance34 from '../assets/Gallery_images/1686985071988.jpg';
import performance35 from '../assets/Gallery_images/1690370652419.jpg';
import performance36 from '../assets/Gallery_images/1690370652484.jpg';
import performance37 from '../assets/Gallery_images/1690370652509.jpg';
import performance38 from '../assets/Gallery_images/1690370652538.jpg';
import performance39 from '../assets/Gallery_images/1690370652841.jpg';
import performance40 from '../assets/Gallery_images/1690370653012.jpg';
import performance41 from '../assets/Gallery_images/1690370653204.jpg';
import performance42 from '../assets/Gallery_images/1690370653391.jpg';
import performance43 from '../assets/Gallery_images/1690370653474.jpg';
import performance44 from '../assets/Gallery_images/1690370653504.jpg';
import performance45 from '../assets/Gallery_images/1690370653504.jpg';
import performance46 from '../assets/Gallery_images/1690370653568.jpg';
import performance47 from '../assets/Gallery_images/IMG_4044-01.jpeg';
import performance48 from '../assets/Gallery_images/IMG_4084-01.jpeg';
import performance49 from '../assets/Gallery_images/IMG_4095-01 (1).jpeg';
import performance50 from '../assets/Gallery_images/IMG_4095-01.jpeg';
import performance51 from '../assets/Gallery_images/IMG_20220929_221849.jpg';



const photos2=[
  performance1,
  performance2,
  performance3,
  performance4,
  performance5,
  performance6,
  performance7,
  performance8,
  performance9,
  performance10,
  performance11,
  performance12,
  performance13,
  performance14,
  performance15,
  performance16,
  performance17,
  performance18,
  performance19,
  performance20,
  performance21,
  performance22,
  performance23,
  performance24,
  performance25,
  performance26,
  performance27,
  performance28,
  performance29,
  performance30,
  performance31,
  performance32,
  performance33,
  performance34,
  performance35,
  performance36,
  performance37,
  performance38,
  performance39,
  performance40,
  performance41,
  performance42,
  performance43,
  performance44,
  performance45,
  performance46,
  performance47,
  performance48,
  performance49,
  performance50,
  performance51,
 
];

const PhotoAlbum2 = () => {
  return (
    <Container>
      <Breadcrumb className="text-white pt-5">
        <Breadcrumb.Item>
          <Link to="/gallery" className='text-decoration-none text-white'>Gallery</Link>
        </Breadcrumb.Item> <p className='text-white mx-2'> <FaChevronRight /></p>
        <Breadcrumb.Item active className='text-warning'>Performances</Breadcrumb.Item>
      </Breadcrumb>
        <h2 style={{fontFamily:'Oswald', marginBottom:'40px'}}>Performances</h2>
          <p style={{fontFamily:'Open Sans', marginBottom:'40px'}}>Take a peak into an array of performances our Kalasindhu Ensemble has given so far. 
Kalasindhu Ensemble has been extremely blessed to have had oppertunities to present Margams , thematic productions, Dance dramas such as 'Shiva-Shive' , 'Guhyam' 'Shivotsavam' and many more at prestigious and nation renowned and recognised platforms..</p>
      <Row>
        {photos2.map((photo, index) => (
          <Col key={index} md={4} className="mb-4">
            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoAlbum2;
