import { GoogleImg, SearchImg, VoiceImg, LensImg, PlusImg } from "../../assets";
import "./Container.css";
const Container = () => {
  const handleClick = () => {
    alert("Will add functionality soon .. I'm just a trainee");
  };
  return (
    <div className="container">
      <div className="logo-container">
        <img className="google-img" src={GoogleImg} alt="Google Logo" />
      </div>

      <div className="input-container">
        <div className="search-container">
          <img className="search-img" src={SearchImg} alt=""></img>
        </div>

        <input placeholder="Search Google or type a URL"></input>

        <div className="lensvoice-container">
          <div className="lensvoice-img-container">
            <img className="lensimg" src={VoiceImg} alt=""></img>
          </div>
          <div className="lensvoice-img-container">
            <img className="lensimg" src={LensImg} alt=""></img>
          </div>
        </div>
      </div>
      <div onClick={handleClick} className="shortcut-container">
        <div className="shortcut">
          <img className="shortcutimg" src={PlusImg} alt=""></img>
        </div>
        <p>Add shortcut</p>
      </div>
    </div>
  );
};
export default Container;
