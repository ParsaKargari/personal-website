import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import BarLoader from "react-spinners/BarLoader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  const languages = ["Hello.", "Bonjour.", "你好.", ".سلام", "Hola."];

  return (
    <div className="preloader">
      <div className="texts-container">
        {languages.map((language, index) => (
          <span key={index}>{language}</span>
        ))}
      </div>
      <BarLoader size={30} color={"#fff"} loading={true} width={150} />
    </div>
  );
};

export default PreLoader;
