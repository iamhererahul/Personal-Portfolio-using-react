import React from "react";
import "./styles/section.css";
// import { Link } from "react-router-dom";
import Rahul from "./assets/rahul.jpg";

const Section = () => {
  return (
    <div className="sections">
      <hr></hr>
      <div className="section_container">
        <div className="section_img">
          <img src={Rahul} alt="Rahul" />
        </div>
        <div className="section_content">
          <h1>Experience in Frontend and Backend development</h1>
          <p>HTML 5</p>
          <p>CSS</p>
          <p>SCSS</p>
          <p>JAVASCRIPT</p>
          <p>PHP</p>
          <p>REACT</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
export default Section;
