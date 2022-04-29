import React, { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import "./Applications.css";
// constants
import { APPLICATIONS_ALL_PATH, APPLICATIONS_N_AMERICA_PATH, APPLICATIONS_S_AMERICA_PATH, APPLICATIONS_ASIA_PATH, APPLICATIONS_EUROPE_PATH, APPLICATIONS_AUSTRALIA_PATH } from "../../constants/routes";
// components
import LocationNav from "../../components/locationNav/LocationNav";
import Loading from "../../pages/loading/Loading";
const CardsContainer = lazy(() => import("../../components/cardsContainer/CardsContainer"));

const GET_USER_ENDPOINT = "http://localhost:8000/user";

const Applications = ({ universities }) => {
    const [cards, setCards] = useState([]);

    const locations = {
        "All": APPLICATIONS_ALL_PATH,
        "North America": APPLICATIONS_N_AMERICA_PATH,
        "South America": APPLICATIONS_S_AMERICA_PATH,
        "Asia": APPLICATIONS_ASIA_PATH,
        "Europe": APPLICATIONS_EUROPE_PATH,
        "Australia": APPLICATIONS_AUSTRALIA_PATH,
    };

    useEffect(() => {

        axios.get(GET_USER_ENDPOINT + "/6106bfb6b898a10c88ed2ad0").then(res => {
            const user = res.data[0];
            const myUniversities = universities.filter(university => user.universities.includes(university.title));
            setCards(myUniversities);
        }).catch(err => console.log(err));

    }, []);

    return (
        <div className="applications">
            <LocationNav locations={locations} />
            <Suspense fallback={<Loading />}>
                <Switch>
                    {Object.keys(locations).map((location, index) =>
                        <Route key={index} exact path={locations[location]} component={() => <CardsContainer location={location} cards={cards} />} />
                    )}
                    <Redirect to={APPLICATIONS_ALL_PATH} />
                </Switch>
            </Suspense>
        </div>
    );
};

export default Applications;
