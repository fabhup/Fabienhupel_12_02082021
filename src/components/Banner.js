import "../styles/Banner.css";
import MainNav from "./MainNav";
import logo from "../assets/logo.svg";

function Banner() {
  return (
    <div className="main-banner">
      <img src={logo} alt="SportSee" className="main-logo" />
      <MainNav />
    </div>
  );
}

export default Banner;
