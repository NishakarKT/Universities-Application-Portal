import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// constants
import { UNIVERSITIES_ALL_PATH, APPLICATIONS_ALL_PATH } from "../../constants/routes";

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to IRC - IIT Kharagpur</h1>
            <p>Genesis: Located at a latitude of 22.3145° N and longitude of 87.3091° E, Kharagpur - a sleepy town tucked away in the eastern corner of India, famous in colonial times as home of the longest railway platform in the world - was chosen by a newly independent nation in 1951 to witness an epic experiment: the creation of an Institute of Technology at par with the best in the world. Kharagpur, it turned out, would never be the same again.</p>
            <div className="home__links">
                <Link className="home__link" to={UNIVERSITIES_ALL_PATH}>Universities</Link>
                <Link className="home__link" to={APPLICATIONS_ALL_PATH}>Applications</Link>
            </div>
        </div>
    );
};

export default Home;
