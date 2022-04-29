import React, { useState } from "react";
import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./Universities.css";
// material-ui
import { Drawer } from "@material-ui/core";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
// constants
import { UNIVERSITIES_ALL_PATH, UNIVERSITIES_N_AMERICA_PATH, UNIVERSITIES_S_AMERICA_PATH, UNIVERSITIES_ASIA_PATH, UNIVERSITIES_EUROPE_PATH, UNIVERSITIES_AUSTRALIA_PATH } from "../../constants/routes";
// components
import LocationNav from "../../components/locationNav/LocationNav";
import Loading from "../../pages/loading/Loading";
import AddCard from "../../components/addCard/AddCard";

const CardsContainer = lazy(() => import("../../components/cardsContainer/CardsContainer"));

const Universities = ({ universities }) => {
    const [addDrawerState, setAddDrawerState] = useState(false);
    const [cards, setCards] = useState(universities);

    const locations = {
        "All": UNIVERSITIES_ALL_PATH,
        "North America": UNIVERSITIES_N_AMERICA_PATH,
        "South America": UNIVERSITIES_S_AMERICA_PATH,
        "Asia": UNIVERSITIES_ASIA_PATH,
        "Europe": UNIVERSITIES_EUROPE_PATH,
        "Australia": UNIVERSITIES_AUSTRALIA_PATH,
    };

    return (
        <div className="universities">
            <LocationNav locations={locations} />
            <Suspense fallback={<Loading />}>
                <Switch>
                    {Object.keys(locations).map((location, index) =>
                        <Route key={index} exact path={locations[location]} component={() => <CardsContainer location={location} cards={cards} />} />
                    )}
                    <Redirect to={UNIVERSITIES_ALL_PATH} />
                </Switch>
            </Suspense>
            <AddRoundedIcon onClick={() => setAddDrawerState(true)} />
            {/* Add Card */}
            <Drawer anchor={"bottom"} open={addDrawerState} onClose={() => setAddDrawerState(false)}>
                <AddCard setCards={setCards} setAddDrawerState={setAddDrawerState} />
            </Drawer>
        </div>
    );
};

export default Universities;
