import React from "react";
import { useHistory } from "react-router-dom";
import "./Error_404.css";
// constants
import { HOME_PATH } from "../../constants/routes";
import { ERROR_404_GIF } from "../../constants/images";
// material-ui icons
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const Error_404 = () => {
    const history = useHistory();

    return (
        <div className="error_404">
            <div className="error_404__box">
                <img src={ERROR_404_GIF} alt="" />
                <h1>404 - Page Not Found !</h1>
                <h2>Although we have access to many countries, but right now, the page you are trying to reach seems inaccessible to us.</h2>
                <div className="error_404__links">
                    <button className="error_404__link" onClick={() => history.push(HOME_PATH)}>
                        <AssignmentRoundedIcon />
                        <p>Task</p>
                    </button>
                    <button className="error_404__link" onClick={() => history.goBack()}>
                        <ArrowBackIosRoundedIcon />
                        <p>Back</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error_404;
