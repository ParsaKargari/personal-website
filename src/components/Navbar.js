import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import "./components.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faEnvelope);

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      observer.observe(slide);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const outerWrapper = document.querySelector(".outer-wrapper");
      if (outerWrapper.scrollTop > 50) {
        setShowNavbar(true);
        setFadeOut(false);
      } else {
        setShowNavbar(false);
        setFadeOut(true);
      }
    };

    const outerWrapper = document.querySelector(".outer-wrapper");
    outerWrapper.addEventListener("scroll", handleScroll);
    return () => {
      outerWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavButtonClick = (e, target) => {
    e.preventDefault();
    const targetSlide = document.getElementById(target);

    if (targetSlide) {
      targetSlide.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "slide-one", text: "Parsa" },
    { id: "slide-two", text: "About" },
    { id: "slide-three", text: "Projects" },
    { id: "slide-four", text: "Experience" },
  ];

  return (
    <div
      className={`navbar ${showNavbar ? "visible" : ""} ${
        fadeOut ? "hidden" : ""
      }`}
      ref={navbarRef}
      style={{ "--navbar-text-color": fadeOut ? "#ffffff" : "#0088a9" }}
    >
      {/* <img src={logo} alt="logo" className="logo" /> */}
      <div className="logo"></div>
      <nav>
        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavButtonClick(e, link.id)}
              >
                <button
                  className={
                    currentPage === link.id
                      ? "button-active underline navbar-button"
                      : "navbar-button underline"
                  }
                >
                  {link.text}
                </button>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div class="social-links">
        <a
          className="github"
          href="https://github.com/ParsaKargari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fab fa-brands fa-github" size="lg" />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/parsa-kargari-9603501b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fab fa-brands fa-linkedin-in" size="lg" />
        </a>
        <a
          className="email"
          href="mailto: parsa.kargari@ucalgary.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-solid fa-envelope" size="lg" />
        </a>
      </div>
    </div>
  );
}
