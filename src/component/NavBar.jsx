import {Link, useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase, faGraduationCap, faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import {NavLink} from "react-router-dom";
import WarningMessage from "./WarningMessage.jsx";
import { useNavigate } from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import WarningContext from "../context/WarningContext.js";


function NavBar() {
  const location = useLocation();
  const { showWarning, setShowWarning } = useContext(WarningContext);

  useEffect(() => {
    const handlePopState = () => {
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location]);

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
        {showWarning && <WarningMessage closeWarning={() => setShowWarning(false)} />}
      </div>

  );
}

export default NavBar;