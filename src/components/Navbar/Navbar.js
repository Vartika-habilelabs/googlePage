import React, { useState } from "react";
import { DotsImg } from "../../assets";
import "./Navbar.css";
const Navbar = () => {
  const [toShow, setToShow] = useState(false);
  const handleClick = () => {
    setToShow(!toShow);
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <a href="https://www.google.com/gmail/about/">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en-GB&tab=ri&ogbl">Images</a>
        <button onClick={handleClick} className="navbar-btn">
          <img src={DotsImg} alt=""></img>
        </button>
      </div>
      {toShow && (
        <div className="secret-div">
          <p>Will add functionality soon.. I'm just a trainee</p>
        </div>
      )}
    </div>
  );
};
export default Navbar;
