import React, { useEffect, useState } from "react"; 
import { Routes, Route, BrowserRouter } from "react-router-dom";  
import Home from "./pages/Home";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import About from "./pages/About";
import Support from "./pages/Support";
import Events from "./pages/Events";
import Education from "./pages/Education";
import Collaborate from "./pages/Collaborate";
import Gallery from "./pages/Gallery";
import Test from "./pages/Test";
import Events2 from "./pages/Events2";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";
import Cards from "./pages/Cards";
import SliderComponent from "./pages/SliderComponent";
import ImageSlider from "./pages/ImageSlider";
import Rangarpane from "./pages/Rangarpane";
import Festivals from "./pages/Festivals";
import Performance from "./pages/Performance";
import EventsGallery from "./pages/EventsGallery";
import ScrollToTop from "./components/ScrollToTop";
import heroImg from "./assets/images/rsc.png";

export default function App() {

  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth < 1024);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);



  return (
    <div>
      {/* {isSmallScreen ? (
        <div style={{ background: 'lightcoral', padding: '20px', textAlign: 'center' }}>
          Best viewed on large devices, Mobile version coming soon
          <img
            src={heroImg}
            className="img-fluid w-100"
            alt="Hero Image"
            style={{ height: "80vh", objectFit: "cover" }}
          />
        </div>
      ) : ( */}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />  
            <Route exact path="/about" element={<About />} />
            <Route exact path="/events2" element={<Events2 />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/collaborate" element={<Collaborate />} />
            <Route exact path="/gallery" element={<Gallery />} /> 
            <Route exact path="/support" element={<Support />} />
            {/* <Route exact path="/test" element={<Test />} /> */}
            {/* <Route exact path="/test2" element={<Test2 />} /> */}
            {/* <Route exact path="/test3" element={<Test3 />} /> */}
            {/* <Route exact path="/cards" element={<Cards />} /> */}
            {/* <Route exact path="/slider" element={<SliderComponent />} /> */}
            <Route exact path="/rangarpane" element={<Rangarpane />} />
            <Route exact path="/festivals" element={<Festivals />} />
            <Route exact path="/performance" element={<Performance />} />
            <Route exact path="/eventsGallery" element={<EventsGallery />} />
          </Routes>
        </BrowserRouter>
      {/* )} */}
    </div>
  );
}
