import "../styles/MainNav.css";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <div className="main-nav">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" id="link-accueil" className="main-nav-link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/profile"
              id="link-profile"
              className="main-nav-link"
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/parameters"
              id="link-parameters"
              className="main-nav-link"
            >
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/community"
              id="link-community"
              className="main-nav-link"
            >
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;
