import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
const App = () => {

   const[playState,setPlaystate] = useState(false);



  return (
    <>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle="OUR PROGRAMS" Title="What We Offer" />
        <Programs />
        <Title subTitle="ABOUT US" Title="More details" />
        <About setPlaystate={setPlaystate} />
        <Title subTitle="GALLERY" Title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" Title="What Students Say" />
        <Testimonials />
        <Title subTitle="CONTACT US" Title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
  <VideoPlayer playState={playState} setPlaystate={setPlaystate} />
    </>
  );
};

export default App;
