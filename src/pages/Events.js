// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Navbar from "../components/Navbar";
// import CountdownCard from "../components/CountdownCard";
// import EventsG1 from "../assets/images/eventsImage1.png";
// import EventsG2 from "../assets/images/EventsImg2.png";
// import eveImg from "../assets/images/Events1.png";
// import eveImg2 from "../assets/images/EventsImage3.png";
// import eveImg4 from "../assets/images/desktop-4.png";
// import Footer from "../components/Footer";
// import AboutR from "../assets/images/AboutR.png";
// import AboutR1 from "../assets/images/bg-f.png";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { SlCalender } from "react-icons/sl";
// import { FaRegClock } from "react-icons/fa6";
// import { IoLocationOutline } from "react-icons/io5";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import "../assets/styles/core.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "aos/dist/aos.css";
// import AOS from "aos";

// function Events() {
//   useEffect(() => {
//     AOS.init();
//   }, []);
//   // Set your countdown values (days, hours, minutes, seconds)
//   const countdownValues = {
//     days: 28,
//     hours: 12,
//     minutes: 30,
//     seconds: 50,
//   };

//   const [showCard, setShowCard] = useState(false);

//   const handleButtonClick = () => {
//     setShowCard(!showCard);
//   };
//   const backgroundImageStyle = {
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AboutR1})`,
//     backgroundRepeat: "no-repeat",
//     // backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   const sectionStyle = {
//     position: "relative",
//     textAlign: "center",
//     height: "100vh",
//   };

//   const imgStyle = {
//     width: "100%",
//     height: "100vh",
//   };

//   const contentStyle = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     fontSize: "30px",
//     color: "white",
//   };
//   return (
//     <>
//       <Navbar />
//       <div style={{ backgroundColor: "rgb(0, 0, 0)", overflow: "hidden" }}>
//         <Container
//           fluid
//           className="bg-dark text-white mt-5 position-relative" // Add position-relative class
//           style={backgroundImageStyle}
//         >
//           <Row className="p-3 justify-content-around align-items-center">
//             {/* Left section */}
//             <Col lg={6} md={12}>
//               <div className="mt-5">
//                 <h1
//                   style={{ fontFamily: "Oswald", fontSize: "64px" }}
//                   className="custom-text2 font-weight-bold"
//                   data-aos="fade-down"
//                   data-aos-easing="linear"
//                   data-aos-duration="1500"
//                 >
//                   Upcoming Events
//                 </h1>
//                 <div
//                   className="d-flex flex-column mt-5"
//                   style={{ fontFamily: "Open Sans" }}
//                 >
//                   <div className="d-flex">
//                     <h4 className="custom-text display-6">
//                       05 <br /> sep
//                     </h4>

//                     <h4 className="custom-text ms-5 display-6 mt-3 pointer-cursor">
//                       Nirantara Narmada <FaArrowRightLong className="ms-3" />
//                     </h4>
//                   </div>
//                   <div className="d-flex mt-5">
//                     <h4 className="custom-text display-6">
//                       20 <br /> sep
//                     </h4>
//                     <h4
//                       className="custom-text ms-5 display-6 mt-3 pointer-cursor"
//                       onClick={handleButtonClick}
//                     >
//                       Ganesh uttsav <FaArrowRightLong className="ms-3" />
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//             {/* Right section */}
//             <Col lg={6} md={12}>
//               <div className="position-relative mt-5 text-center ">
//                 {" "}
//                 {/* Add position-relative class */}
//                 <img
//                   src={AboutR}
//                   className="img-fluid"
//                   alt="About R"
//                   style={{ maxWidth: "312px", maxHeight: "424px" }}
//                 />
//               </div>
//             </Col>
//           </Row>
//           {/* Counter value */}
//           <Row className="justify-content-center">
//             <Col lg={6} md={12}>
//               <CountdownCard {...countdownValues} />
//             </Col>
//           </Row>
//         </Container>

//         {/* Card section */}
//         {showCard && (
//           <div className="d-flex justify-content-center">
//             <div
//               className="card p-5 text-white bg-dark"
//               style={{
//                 width: "100%",
//                 maxWidth: "620px",
//                 height: "auto",
//               }}
//             >
//               <h3 className="d-flex justify-content-center align-items-center mt-4">
//                 Events Details
//               </h3>
//               <div className="d-flex-column justify-content-center align-items-center mt-3">
//                 <div className="d-flex justify-content-start ">
//                   <SlCalender className="mt-1" />{" "}
//                   <p className="ms-2">Sunday, 5th Sept, 2023</p>
//                 </div>

//                 <div className="d-flex justify-content-start ">
//                   <FaRegClock className="mt-1" />{" "}
//                   <p className="ms-2">6:00 PM</p>
//                 </div>

//                 <div className="d-flex justify-content-start ">
//                   <IoLocationOutline className="mt-1" />{" "}
//                   <p className="ms-2">JSS auditorium, Jayanagar, Bangalore</p>
//                 </div>

//                 <div className="d-flex justify-content-start ">
//                   <FaIndianRupeeSign className="mt-1" />{" "}
//                   <p className="ms-2">Free</p>
//                 </div>
//               </div>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur. Neque dictum risus
//                 commodo vehicula. Mattis suspendisse sed etiam in aliquam sit.
//                 Integer pharetra tristique cursus eu mauris et in purus ut. Urna
//                 erat nunc ullamcorper molestie ultrices eget.
//               </p>
//               <a
//                   className="btn btn-lg btn-dark rounded mt-5"
//                   style={{
//                     width: "100%",
//                     background: "#FCB541",
//                     fontFamily: "Open Sans",
//                     fontWeight: "bold",
//                     color: "black",
//                   }}
//                 >
                  
//                 Join Whatsapp group for updates
//                 </a>
//             </div>
//           </div>
//         )}

//         {/* Events baground */}

//         <div style={sectionStyle} className="mt-5">
//           <img
//             src={eveImg}
//             alt="Your Image Description"
//             style={imgStyle}
//             className="img-fluid"
//           />
//           <div style={contentStyle}>
//             <h1
//               className="custom-text2 display-1 mb-5"
//               style={{ fontWeight: "700", fontFamily: "Oswald" }}
//             >
//               Festivals of Kalasindhu
//             </h1>
//             <p
//               className="custom-text"
//               data-aos="fade-up"
//               data-aos-duration="2000"
//             >
//               Kalasindhu has also been widely recognised for the festivals it
//               organizes. These one of a kind festivals are a dancer’s dream,
//               from upholding the Guru-Shishya Parampara to providing an
//               exclusive stage for chamber concerts, we have covered it all
//             </p>
//           </div>
//         </div>

//         {/* <section className='hero-wrapper position-relative mb-4'>
//                     <img src={eveImg2} className='img-fluid w-100' alt='Hero Image' />
//                     <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
//                 </section> */}
//         <div className="container-fluid" style={{ background: "#003D1B" }}>
//           <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
//             {/* Marquee section - Hidden on mobile */}
//             <div className="d-none d-md-block">
//               <div
//                 style={{
//                   color: "#FCB541",
//                   fontSize: "5em",
//                   background: "#003D1B",
//                   whiteSpace: "nowrap",
//                   fontWeight: "900",
//                   animation: "animate 40s linear infinite",
//                   width: "250px",
//                 }}
//               >
//                 <marquee
//                   loop="infinite"
//                   style={{
//                     fontFamily: "Oswald",
//                     loop: "infinite",
//                     height: "700px",
//                     width: "600px",
//                     transform:
//                       "rotate(-90deg) translateY(140px) translateX(50px)",
//                   }}
//                 >
//                   Navaratri <span>Navarasa</span> Navaratri{" "}
//                   <span>Navarasa</span> Navaratri <span>Navarasa</span>{" "}
//                   Navaratri <span>Navarasa</span> Navaratri{" "}
//                   <span>Navarasa</span> <span>Navarasa</span> Navaratri{" "}
//                   <span>Navarasa</span> Navaratri
//                 </marquee>
//               </div>
//             </div>

//             {/* Text section */}
//             <div
//               className="text-light mb-4 mb-md-0"
//               style={{ maxWidth: "512px", fontFamily: "Open Sans" }}
//             >
//               <div style={{}}>
//                 <h3>Why we celebrate ?</h3>
//                 <p data-aos="fade-up" data-aos-duration="2000">
//                   Dasara, or Navaratri, stands as one of India's most revered
//                   festivals. At Kalasindhu, where we foster an environment
//                   cultivating arts and a sense of divinity in all our students,
//                   we enthusiastically immerse ourselves in celebrating this
//                   auspicious occasion through various artistic expressions.
//                 </p>
//               </div>
//               <div style={{ marginBottom: "50px" }}>
//                 <h3>How we celebrate ?</h3>
//                 <p data-aos="fade-up" data-aos-duration="2000">
//                   At Kalasindhu, we believe in nurturing young talent by
//                   providing them with a platform to showcase their skills in
//                   intimate chamber concert settings. Every day there is a young
//                   and emerging artist performing and carrying out their Kala
//                   seva.
//                 </p>
//               </div>
//               <div style={{ marginBottom: "50px" }}>
//                 <h3 >
//                   When we celebrate ?
//                 </h3>
//                 <p data-aos="fade-up" data-aos-duration="3000">
//                   The festival is conducted every year during the Dasara
//                   festival time, concluding witha grand Vijayadashami
//                   celebration commencing a new beginning to the students art
//                   journey.
//                 </p>
//               </div>
//             </div>

//             {/* Image section */}
//             <div>
//               <img
//                 src={EventsG1}
//                 style={{ height: "auto", maxWidth: "100%" }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* <section className='hero-wrapper position-relative mt-4'>
//                     <img src={eveImg3} className='img-fluid w-100' alt='Hero Image' />
//                     <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
//                 </section> */}

//         <div className="container-fluid" style={{ background: "#003D1B" }}>
//           <div className="d-none d-md-flex justify-content-between">
//             {" "}
//             {/* Hide on mobile */}
//             <div>
//               <img
//                 src={EventsG2}
//                 style={{ height: "450px", padding: "15px" }}
//               />
//             </div>
//             <div style={{ width: "799px", height: "152px", marginTop: "30px" }}>
//               <h1
//                 style={{
//                   fontSize: "80px",
//                   color: "#94B074",
//                   fontFamily: "Oswald",
//                 }}
//                 data-aos="fade-down"
//                 data-aos-easing="linear"
//                 data-aos-duration="1500"
//               >
//                 Navarasa Navaratri
//               </h1>
//               <p
//                 style={{
//                   fontSize: "22px",
//                   color: "wheat",
//                   marginTop: "80px",
//                   fontFamily: "Open Sans",
//                 }}
//                 data-aos="fade-up"
//                 data-aos-duration="2000"
//               >
//                 In memory of her beloved guru Narmada,{" "}
//                 <span style={{ color: "#FFBC11" }}>Nirantara narmada</span> came
//                 into existence Lorem ipsum dolor sit amet consectetur. Neque
//                 dictum risus commodo vehicula. Mattis suspendisse sed etiam in
//                 aliquam sit. Integer pharetra tristique cursus eu mauris et in
//                 purus ut.
//               </p>
//             </div>
//             <section
//               style={{ position: "relative", width: "20%", overflow: "hidden" }}
//             >
//               <div className="scroll text1">
//                 <div
//                   style={{
//                     color: "#FCB541",
//                     fontSize: "5em",
//                     background: "#003D1B",
//                     whiteSpace: "nowrap",
//                     fontWeight: "900",
//                     animation: "animate 40s linear infinite",
//                     width: "250px",
//                     height: "600px",
//                   }}
//                 >
//                   <marquee
//                     loop="infinite"
//                     style={{
//                       height: "700px",
//                       width: "700px",
//                       transform:
//                         "rotate(90deg) translateY(450px) translateX(-10px)",
//                     }}
//                   >
//                     Navaratri <span>Navarasa</span> Navaratri{" "}
//                     <span>Navarasa</span> Navaratri <span>Navarasa</span>{" "}
//                     Navaratri <span>Navarasa</span> Navaratri{" "}
//                     <span>Navarasa</span> <span>Navarasa</span> Navaratri{" "}
//                     <span>Navarasa</span> Navaratri
//                   </marquee>
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Marquee for laptop view */}
//           <marquee
//             className="d-none d-md-block"
//             loop="infinite"
//             style={{
//               height: "200px",
//               width: "80%",
//               transform: "rotate(0deg) translateY(5px) translateX(2x)",
//             }}
//           >
//             <img src={eveImg2} style={{ height: "200px" }} />
//             <img src={eveImg2} style={{ height: "200px" }} />
//             <img src={eveImg2} style={{ height: "200px" }} />
//             <img src={eveImg2} style={{ height: "200px" }} />
//             <img src={eveImg2} style={{ height: "200px" }} />
//           </marquee>
//         </div>

//         <section>
//           <div style={{ backgroundColor: "#330A0A" }}>
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <h1
//                     className="custom-text2 text-white fw-bolder mt-5"
//                     style={{
//                       fontSize: "64px",
//                       fontWeight: "600",
//                       fontFamily: "Oswald",
//                     }}
//                     data-aos="fade-down"
//                     data-aos-easing="linear"
//                     data-aos-duration="1500"
//                   >
//                     Workshops and other events
//                   </h1>
//                   <p
//                     style={{ fontFamily: "Open sans", fontSize: "22px" }}
//                     className="custom-text text-white mt-3"
//                     data-aos="fade-up"
//                     data-aos-easing="linear"
//                     data-aos-duration="1500"
//                   >
//                     In memory of her beloved guru Narmada ,
//                     <span style={{ color: "#FFBC11" }}>Nirantara narmada</span>{" "}
//                     came into existence Lorem ipsum dolor sit amet consectetur.
//                     Neque dictum risus commodo vehicula. Mattis suspendisse sed
//                     etiam in aliquam sit. Integer pharetra tristique cursus eu
//                     mauris et in purus ut.
//                   </p>
                  
//                   <a
//                   className="btn btn-lg btn-dark rounded mt-5"
//                   style={{
//                     width: "198px",
//                     background: "#FCB541",
//                     fontFamily: "Open Sans",
//                     fontWeight: "bold",
//                     color: "black",
//                   }}
//                 >
//                   Collaborate with us
//                 </a>
                    
//                 </div>
//                 <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
//                   <img
//                     src={eveImg4}
//                     className="img-fluid"
//                     alt="Hero Image"
//                     style={{ maxWidth: "100%" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Events;
