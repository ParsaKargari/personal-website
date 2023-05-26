import React from "react";
import "./slide.css";

export default function SlideTwo() {
  return (
    <>
      <div className="main-slide">
        <div className="top-placeholder"></div>
        <div className="main-slide-content">
          <div className="slide-two-holder">
            <div className="slide-two-main">
              <div className="text-block">
                <h1 className="text-block-top">
                  Hey, I'm <span className="bold-text">Parsa</span> - A Software
                  <br />
                  Engineering Student located in Canada.
                </h1>

                <p className="text-block-bot">
                  As a Software Engineering Student, I have gained valuable
                  experience through various projects and involvements. I love
                  contributing to the development of software solutions for
                  real-world applications.
                </p>

                <p className="text-block-skills">
                  I have experience working on both frontend and backend
                  projects using technologies like AWS, Terraform, React,
                  JavaScript, HTML, CSS, Python, C/C++, and Java. Do feel free
                  to contact me and checkout my projects on GitHub!
                </p>
              </div>
            </div>
            <footer className="next-page-arrow"></footer>
          </div>
        </div>
      </div>
    </>
  );
}
