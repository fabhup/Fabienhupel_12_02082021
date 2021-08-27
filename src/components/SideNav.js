import "../styles/SideNav.css";
import yoga from "../assets/yoga.svg";
import cycling from "../assets/cycling.svg";
import swimming from "../assets/swimming.svg";
import bodybuilding from "../assets/body-building.svg";

function SideNav() {
  return (
    <nav className="sidenav">
      <button data-value="yoga" className="sidenav-button">
        <img src={yoga} alt="yoga" className="sidenav-icon" />
      </button>
      <button data-value="cycling" className="sidenav-button">
        <img src={cycling} alt="cycling" className="sidenav-icon" />
      </button>
      <button data-value="swimming" className="sidenav-button">
        <img src={swimming} alt="swimming" className="sidenav-icon" />
      </button>
      <button data-value="bodybuilding" className="sidenav-button">
        <img src={bodybuilding} alt="bodybuilding" className="sidenav-icon" />
      </button>
    </nav>
  );
}

export default SideNav;
