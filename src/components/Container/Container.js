import GoogleImg from "../../assets/images/google.png";
import SearchImg from "../../assets/icons/search.svg";
import VoiceImg from "../../assets/icons/voice.png";
import LensImg from "../../assets/icons/lens.jpg";
import PlusImg from "../../assets/icons/plus.svg";

import "./Container.css";
const Container = () => {
  const handleClick = () => {
    alert("Will add functionality soon .. I'm just a trainee");
  };
  return (
    <div className="container">
      <div className="logocontainer">
        <img className="googleimg" src={GoogleImg} alt="Google Logo" />
      </div>

      <div className="inputcontainer">
        <div className="searchcontainer">
          <img className="searchimg" src={SearchImg} alt=""></img>
        </div>

        <input placeholder="Search Google or type a URL"></input>

        <div className="lensvoicecontainer">
          <div className="lensvoiceimgcontainer">
            <img className="lensimg" src={VoiceImg} alt=""></img>
          </div>
          <div className="lensvoiceimgcontainer">
            <img className="lensimg" src={LensImg} alt=""></img>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="shortcutcontainer">
        <div className="shortcut">
          <img className="shortcutimg" src={PlusImg} alt=""></img>
        </div>
        <p>Add shortcut</p>
      </button>
    </div>
  );
};
export default Container;
