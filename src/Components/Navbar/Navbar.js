import React, { useState } from "react";
import DotsImg from "../../assets/hamburger.png";
import "./Navbar.css";
const Navbar = () => {
  const [toShow, setToShow] = useState(false);
  const handleClick = () => {
    setToShow(!toShow);
  };
  return (
    <div className="navbarcontainer">
      <div className="navbar">
        <a href="https://www.google.com/gmail/about/">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en-GB&tab=ri&ogbl">Images</a>
        <button onClick={handleClick} className="navbarbtn">
          <img src={DotsImg} alt=""></img>
        </button>
      </div>
      {toShow && (
        <div className="secretdiv">
          <p>Will add functionality soon.. I'm just a trainee</p>
        </div>
      )}
    </div>
  );
};
export default Navbar;
