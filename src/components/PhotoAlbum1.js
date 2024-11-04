import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import festival1 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20190929190729707_COVER.jpg';
import festival2 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20191002193312275_COVER.jpg';
import festival3 from '../assets/Gallery_images/1686985130724.jpg';
import festival4 from '../assets/Gallery_images/1686985130867.jpg';
import festival5 from '../assets/Gallery_images/1690370652205.jpg';
import festival6 from '../assets/Gallery_images/1690370652231.jpg';
import festival7 from '../assets/Gallery_images/1690370652258.jpg';
import festival8 from '../assets/Gallery_images/1690370652313.jpg';
import festival9 from '../assets/Gallery_images/1690370652395.jpg';
import festival10 from '../assets/Gallery_images/1690370652620.jpg';
import festival12 from '../assets/Gallery_images/Nirantara Narmada 2020 418-01.jpeg';
import festival11 from '../assets/Gallery_images/1690370653121.jpg';
import festival13 from '../assets/Gallery_images/IMG_20190929_172503.jpg';
import festival14 from '../assets/Gallery_images/IMG_20190929_175005.jpg';
import festival15 from '../assets/Gallery_images/IMG_20190929_181658.jpg';
import festival16 from '../assets/Gallery_images/IMG_20191001_200618.dng';
import festival17 from '../assets/Gallery_images/IMG_20220926_183821.jpg';
import festival18 from '../assets/Gallery_images/IMG_20220927_184429.jpg';
import festival19 from '../assets/Gallery_images/IMG_20220929_194033.jpg';
import festival20 from '../assets/Gallery_images/IMG_20220929_221849.jpg';
import festival21 from '../assets/Gallery_images/IMG_20220930_194740.jpg';
import festival22 from '../assets/Gallery_images/IMG_20220930_201542.jpg';
import festival23 from '../assets/Gallery_images/IMG_20221005_131051.jpg';
import festival24 from '../assets/Gallery_images/IMG_20221005_131104.jpg';
import festival25 from '../assets/Gallery_images/1690370653688.jpg';
import festival26 from '../assets/Gallery_images/1690370652983.jpg';
import festival27 from '../assets/Gallery_images/1690370652952.jpg';
import festival28 from '../assets/Gallery_images/1690370652645.jpg';
import festival29 from '../assets/Gallery_images/1690370652157.jpg';
import festival30 from '../assets/Gallery_images/1690370652134.jpg';
import festival31 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20191002193631223_COVER.jpg';
import festival32 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20191001193954230_COVER.jpg';
import festival33 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20190929202250374_COVER.jpg';
import festival34 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20190929185815220_COVER.jpg';
import festival35 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20190929202250374_COVER.jpg';
import festival37 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20190929185619760_COVER.jpg';
import festival38 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20190929175815648_COVER.jpg';
import festival39 from '../assets/Gallery_images/00000IMG_00000_BURST20190929172340310_COVER.jpg';
import festival40 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20190929175038572_COVER.jpg';
import festival41 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20190929175038572_COVER.jpg';
import festival42 from '../assets/Gallery_images/1686985130683.jpg';
import festival43 from '../assets/Gallery_images/1686985130704.jpg';
import festival44 from '../assets/Gallery_images/1686985130744.jpg';
import festival45 from '../assets/Gallery_images/1686985130794.jpg';
import festival46 from '../assets/Gallery_images/1686985130886.jpg';
import festival47 from '../assets/Gallery_images/1690370652180.jpg';
import festival48 from '../assets/Gallery_images/1690370652284.jpg';
import festival49 from '../assets/Gallery_images/1690370652453.jpg';
import festival50 from '../assets/Gallery_images/1690370653148.jpg';
import festival51 from '../assets/Gallery_images/Nirantara Narmada 2020 446-01.jpeg';
import festival52 from '../assets/Gallery_images/Nirantara Narmada 2020 528-01.jpeg';

const photos = [
  festival1,
  festival2,
  festival3,
  festival4,
  festival5,
  festival6,
  festival7,
  festival8,
  festival9,
  festival10,
  festival11,
  festival12,
  festival13,
  festival14,
  festival15,
  festival16,
  festival17,
  festival18,
  festival19,
  festival20,
  festival21,
  festival22,
  festival23,
  festival24,
  festival25,
  festival26,
  festival27,
  festival28,
  festival29,
  festival30,
  festival31,
  festival32,
  festival33,
  festival34,
  festival35,
  // festival36,
  festival37,
  festival38,
  festival39,
  festival40,
  festival41,
  festival42,
  festival43,
  festival44,
  festival45,
  festival46,
  festival47,
  festival48,
  festival49,
  festival50,
  festival51,
  festival52,
];

const PhotoAlbum1 = () => {
  return (
    <Container>
      <Breadcrumb className="text-white pt-5">
        <Breadcrumb.Item>
          <Link to="/gallery" className='text-decoration-none text-white'>Gallery</Link>
        </Breadcrumb.Item> <p className='text-white mx-2'> <FaChevronRight /></p>
        <Breadcrumb.Item active className='text-warning'>Festivals</Breadcrumb.Item>
      </Breadcrumb>
        <h2 style={{fontFamily:'Oswald', marginBottom:'40px'}}>Festivals</h2>
          <p style={{fontFamily:'Open Sans', marginBottom:'40px'}}>Guru Poornima Gururaja's vision for Kalasindhu has not just been to teach students and perform but also to curate festivals and platforms where artists from all walks of life and from all around the globe are invited to perform and give Students of Art and Rasikas a deeper insight into their journey in Arts .  With that moral ground Kalasindhu currently curates 2 major festivals- Nirantara Narmada & Navarasa Navarathri</p>
      <Row>
        {photos.map((photo, index) => (
          <Col key={index} md={4} className="mb-4">
            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoAlbum1;
