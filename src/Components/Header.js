import React from "react";
import "./styles/header.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  const { active, setActive } = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="header">
        <div className="header_logo">
          <h1>Rahul</h1>
        </div>
        <nav>
          <ul>
            <div className="closed">
              <close className="close" onclick={showMenu} />
            </div>
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <b>About</b>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <b>Portfolio</b>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <b>Blog</b>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <b>Contact</b>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="changer">
          <MenuBookOutlined className="menu" onclick={showMenu} />
        </div>
      </div>
    </>
  );
};

export default Header;
