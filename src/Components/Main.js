import React from "react";
import "./styles/main.css";
import Rahul from "./assets/first.png";
import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material";
const main = () => {
  return (
    <>
      <div className="main">
        <div className="main_container">
          <div className="main_content">
            <div className="text">
              <p>Hello Everyone !</p>
              <h1>I am Rahul</h1>
              <p>Front-end & backend developer</p>
              <div className="icons">
                <Twitter className="icon" />
                <Facebook className="icon" />
                <Instagram className="icon" />
                <LinkedIn className="icon" />
              </div>
              <div className="buttons">
                <button>Contact Me</button>
                <button>Hire Me</button>
              </div>
            </div>
          </div>
          <div className="main__img">
            <img src={Rahul} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default main;
