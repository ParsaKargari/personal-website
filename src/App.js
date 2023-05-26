import React from "react";
import "./index.css";
import SlideOne from "./containers/SlideOne";
import SlideTwo from "./containers/SlideTwo";
import SlideThree from "./containers/SlideThree";
import SlideFour from "./containers/SlideFour";
import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <>
      <PreLoader />
      <div className="main-box">
        <Navbar />
        <div className="outer-wrapper">
          <div className="wrapper">
            <div className="slide one" id="slide-one">
              <SlideOne />
            </div>
            <div className="slide two" id="slide-two">
              <SlideTwo />
            </div>
            <div className="slide three" id="slide-three">
              <SlideThree />
            </div>
            <div className="slide four" id="slide-four">
              <SlideFour />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
