import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
// constants
import { UNIVERSITIES_PATH, APPLICATIONS_PATH, HOME_PATH } from "../../constants/routes";
import { KGP_LOGO_PNG, IRC_LOGO_PNG } from "../../constants/images";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__left">
                <Link to={HOME_PATH}><img src={KGP_LOGO_PNG} alt="" /></Link>
                <Link to={HOME_PATH}><img src={IRC_LOGO_PNG} alt="" /></Link>
                <div className="navBar__title">
                    <h1>International Relations Cell</h1>
                    <h2>IIT Kharagpur</h2>
                </div>
            </div>
            <div className="navBar__right">
                <NavLink className="navBar__link" activeClassName="navBar__activeLink" to={UNIVERSITIES_PATH}>Universities</NavLink>
                <NavLink className="navBar__link" activeClassName="navBar__activeLink" to={APPLICATIONS_PATH}>My Applications</NavLink>
                <NavLink className="navBar__link" activeClassName="navBar__activeLink" to={HOME_PATH}>Home</NavLink>
                <p className="navBar__link" onClick={() => window.location.reload()} >Logout</p>
            </div>
        </div>
    );
};

export default NavBar;
