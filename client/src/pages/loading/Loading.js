import React from "react";
import "./Loading.css";
// constants
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
    return (
        <div className="loading">
            <CircularProgress />
        </div>
    );
};

export default Loading;
