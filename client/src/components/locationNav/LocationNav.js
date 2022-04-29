import React from "react";
import { NavLink } from "react-router-dom";
import "./LocationNav.css";

const LocationNav = ({ locations }) => {
    return (
        <div className="locationNav">
            {Object.keys(locations).map((location, index) =>
                <NavLink key={index} className="locationNav__link" activeClassName="locationNav__activeLink" to={locations[location]}>{location}</NavLink>
            )}
        </div>
    );
};

export default LocationNav;
