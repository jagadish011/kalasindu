// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import './imageSlider.css'; 

// function SlideItem({ image, name, description }) {
//   return (
//     <div className="item" style={{ backgroundImage: `url(${image})` }}>
//       <div className="content">
//         <div className="name">{name}</div>
//         <div className="des">{description}</div>
//         <button>See More</button>
//       </div>
//     </div>
//   );
// }

// function ImageSlider() {
//   const images = [
//     require('../assets/Gallery_images/p2.jpg'),
//     require('../assets/Gallery_images/p3.jpg'),
//     require('../assets/Gallery_images/p4.jpg'),
//     require('../assets/Gallery_images/p5.jpg'),
//     require('../assets/Gallery_images/p6.jpg')
//   ]; // Array of imported images

//   const [slideIndex, setSlideIndex] = useState(0);

//   const nextSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, []); // Run only once when the component mounts

//   const handleSlideClick = (index) => {
//     setSlideIndex(index);
//   };

//   return (
//     <div className="container">
//       <div className="slide">
//         {images.map((image, index) => (
//           <SlideItem
//             key={index}
//             image={image}
//             name={`Image ${index + 1}`} // You can customize the name as needed
//             description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!"
//             onClick={() => handleSlideClick(index)}
//           />
//         ))}
//       </div>
//       <div className="button">
//         <button className="prev" onClick={prevSlide}><FaArrowLeft /></button>
//         <button className="next" onClick={nextSlide}><FaArrowRight /></button>
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;
