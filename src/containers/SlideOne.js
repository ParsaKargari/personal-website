import React, { useEffect, useState } from "react";
import "./slide.css";
import hill1 from "./tree-images/hill1.png";
import hill2 from "./tree-images/hill2.png";
import hill3 from "./tree-images/hill3.png";
import hill4 from "./tree-images/hill4.png";
import hill5 from "./tree-images/hill5.png";
import me from "./tree-images/me.jpeg";
import Typed from "react-typed";

export default function SlideOne() {
  const words = [
    "Software Engineering Student",
    "Dedicated Learner",
    "Innovative Problem Solver",
    "Passionate Programmer",
    "Collaborative Team Player",
  ];
  const [isTypingLineVisible, setIsTypingLineVisible] = useState(true);

  useEffect(() => {
    const outerWrapper = document.querySelector(".outer-wrapper");
    if (!outerWrapper) {
      return; // Exit early if outerWrapper is null
    }

    const handleScroll = () => {
      const textElement = document.getElementById("text");
      const hill4Element = document.getElementById("hill4");
      const itypedElement = document.getElementById("ityped");
      const scrollPosition = outerWrapper.scrollTop;

      if (textElement) {
        textElement.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }

      if (itypedElement) {
        itypedElement.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }

      if (hill4Element) {
        hill4Element.style.transform = `translateX(${scrollPosition * 0.2}px)`;
      }
    };

    const typingLineInterval = setInterval(() => {
      setIsTypingLineVisible((prevValue) => !prevValue);
    }, 800);

    // Attach the scroll and interval event listeners when the component mounts
    outerWrapper.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the scroll event listener and clear intervals when the component unmounts
      outerWrapper.removeEventListener("scroll", handleScroll);
      clearInterval(typingLineInterval);
    };
  });

  return (
    <>
      <div className="main-slide">
        <div className="top-placeholder"></div>
        <div className="main-slide-content">
          <div className="parallax">
            <img src={hill1} alt="hill" id="hill1" />
            <img src={hill2} alt="hill" id="hill2" />
            <h2 id="text">
              <div className="profile-image">
                <img src={me} alt="Profile" />
              </div>
              Parsa Kargari
              {isTypingLineVisible && <span className="typing-line">|</span>}
            </h2>
            <p id="ityped">
              <Typed strings={words} typeSpeed={50} backSpeed={40} loop />
            </p>
            <img src={hill3} alt="hill" id="hill3" />
            <img src={hill4} alt="hill" id="hill4" />
            <img src={hill5} alt="hill" id="hill5" />
          </div>
        </div>
      </div>
    </>
  );
}
