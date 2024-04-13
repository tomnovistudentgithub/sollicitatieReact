import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase, faGraduationCap, faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import {NavLink} from "react-router-dom";
import WarningMessage from "./WarningMessage.jsx";

function NavBar() {
  return (
      <div className="navbar-outer-container" id="navbarId">
        <nav className="navbar-inner-container">
          <ul>
            <li>
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                <FontAwesomeIcon icon={faHome} /> <span className="nav-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/werkervaring" className="nav-link" activeClassName="active-nav-link">
                <FontAwesomeIcon icon={faBriefcase} /> <span className="nav-text">Werkervaring</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/opleidingen" className="nav-link" activeClassName="active-nav-link">
                <FontAwesomeIcon icon={faGraduationCap} /> <span className="nav-text">Opleiding</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about" className="nav-link" activeClassName="active-nav-link">
                <FontAwesomeIcon icon={faUser} /> <span className="nav-text">About</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <WarningMessage />
      </div>

  );
}

export default NavBar;