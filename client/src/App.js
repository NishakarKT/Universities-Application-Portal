import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
// constants
import { KGP_MAIN_JPG } from "./constants/images";
import { UNIVERSITIES_PATH, APPLICATIONS_PATH, HOME_PATH } from "./constants/routes";
// components
import NavBar from "./components/navBar/NavBar";
// pages
import Loading from "./pages/loading/Loading";
const Universities = lazy(() => import("./pages/universities/Universities"));
const Applications = lazy(() => import("./pages/applications/Applications"));
const Home = lazy(() => import("./pages/home/Home"));
const ERROR_404 = lazy(() => import("./pages/error_404/Error_404"));

const GET_UNIVERSITIES_ENDPOINT = "https://irc-task-nk.herokuapp.com/universities";

function App() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {

    axios.get(GET_UNIVERSITIES_ENDPOINT).then(res => {
      const universities = res.data;
      if (res.data) setUniversities(universities);
    }).catch(err => console.log(err));

  }, []);

  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="app__body">
          <img className="app__bg" src={KGP_MAIN_JPG} alt="" />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path={UNIVERSITIES_PATH} component={() => <Universities universities={universities} />} />
              <Route path={APPLICATIONS_PATH} component={() => <Applications universities={universities} />} />
              <Route exact path={HOME_PATH} component={Home} />
              <Route exact path="/" component={() => <Redirect to={HOME_PATH} />} />
              <Route component={ERROR_404} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
