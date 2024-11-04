import React, { useState, useEffect } from "react";
import abtImage from "../assets/images/abt.png";
import "./abouthere.css";

const ScrollTextImage = () => {
  const [displayTextIndex, setDisplayTextIndex] = useState(0);

  const textArray = [
    "FOUNDER-DIRECTOR",
    "Teacher",
    "Choreographer",
    "Nattuvanar",
    "Organizer",
  ];

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setDisplayTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => {
      clearInterval(textChangeInterval);
    };
  }, [textArray]);

  return (
    <>
    <div className="">
    <div className="banner" >
    <img src={abtImage}  alt="ABT" className="img-fluid w-100 mt-5"/>
    </div>
    <div className="centered">
    <h1 style={{ fontSize: "calc(1rem + 5vw)", fontWeight: 700,}} className="text-center ">
          {textArray[displayTextIndex]}
        </h1>
    </div>
    <div className="container">
    <div className="mt-3 text-center  ">
      <h1 className="">Poornima Gururaja </h1>
      <p className="">Poornima Gururaja is a beloved teacher and visionary in arts education, renowned for her patience and commitment to cultivating discipline and lifelong appreciation for the arts. She embraces cultural roots, encourages exploration, and empowers students to reach their artistic potential. Poornima's impact extends beyond the classroom, inspiring a love for good art and shaping the lives of her students as lifelong learners.</p>
    </div>
    </div>
   </div>
    </>
//     <div
//       style={{
//         height: "750px",
//         position: "relative",
//         overflow: "hidden",
//         marginTop: "70px",
//       }}
//     >
//       <div
//         style={{ width: "100%", height: "500px", position: "relative" }}
//         data-aos="fade-up"
//         data-aos-duration="2800"
//       >
//         <div className="">
//         <img
//           src={abtImage}
//           alt="ABT"
//           className="img-fluid w-100 mt-3"
//           style={{ objectFit: "cover" ,height: "100%", overflow: "hidden"}}
//         />
//         </div>
//         <h1 style={{ fontSize: "calc(2rem + 4vw) ", fontWeight: 700, color: "black"}} className="text-center">
//             {textArray[displayTextIndex]}
//           </h1> 
//           <div className="row"
//           style={{
//             position: "absolute",
//             bottom: 0,
//             margin:0,
//             // left: "20%",
//             // transform: "translateX(-50%)",
//             // textAlign: "center",
          
//           }}
//         >
          
          
//         </div>
//       </div>
// <p>jbkjb</p>
//       <div>
//         <div className="container">
//           <div className="row text-center mt-5">
//             <p>jijnjkn</p>
            
//         <h1
//           style={{ margin: 0, fontSize: "48px", fontFamily:'Open Sans' }}
//           data-aos="fade-left"
//           data-aos-duration="1700"
//         >
//           Poornima Gururaja
//         </h1>
//         <p data-aos="fade-right" style={{fontFamily:'Open Sans'}}
//         data-aos-duration="1700">
//           Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of
//           dance, a disciple of Guru Smt. Narmada who trained under the legendary
//           Guru Sri Kittappa Pillai of Tanjore. She is the founder and artistic
//           director of the Pallavi School performing arts, based in Boston. She
//           founded the Kalasindhu Academy of Dance and Related Arts in 2009.
//           Poornima Gururaja holds an MBA from Brandeis University, USA and has
//           worked as a marketing professional at Hewlett Packard.
//         </p>
//       </div>
//       </div>
// </div>
//       <style>
//         {`
//           @keyframes fade-up {
//             from {
//               opacity: 0;
//               transform: translateY(50px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//         `}
//       </style>
//     </div>

  );
};

export default ScrollTextImage;
