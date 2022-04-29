import React, { useState } from "react";
import axios from "axios";
import "./AddCard.css";
// constants
import { KGP_MAIN_JPG } from "../../constants/images";
// components
import Loading from "../../pages/loading/Loading";
// material-ui
import { TextField, Button } from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const POST_UNIVERSITY_ENDPOINT = "http://localhost:8000/add_university";

const AddCard = ({ setCards, setAddDrawerState }) => {
    // states
    const [title, setTitle] = useState("");
    const [country, setCountry] = useState("");
    const [continent, setContinent] = useState("");
    const [expenses, setExpenses] = useState("");
    const [deadline, setDeadline] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // errors
    const [titleErr, setTitleErr] = useState("");
    const [countryErr, setCountryErr] = useState("");
    const [continentErr, setContinentErr] = useState("");
    const [expensesErr, setExpensesErr] = useState("");
    const [deadlineErr, setDeadlineErr] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // error handling
        setTitleErr(!title);
        setCountryErr(!country);
        setContinentErr(!continent);
        setExpensesErr(!expenses);
        setDeadlineErr(!deadline);

        if (title && country && continent && expenses && deadline) {
            const university = { title, country, continent, expenses, deadline };

            // update data
            axios.post(POST_UNIVERSITY_ENDPOINT, university).then(res => {
                // reset
                setIsLoading(false)
                e.target.reset();
                setAddDrawerState(false);
            }).catch(() => {
                // reset
                setIsLoading(false)
                e.target.reset();
                setAddDrawerState(false);
            });

            // create new card
            setCards(cards => [...cards, university]);
        }
        else
            setIsLoading(false);
    };

    return (
        <div className="addCard">
            {isLoading ? <Loading /> : null}
            <img className="addCard__bg" src={KGP_MAIN_JPG} alt="" />
            <form className="addCard__box" onSubmit={(e) => handleUpdate(e)}>
                <TextField
                    label="Title"
                    error={titleErr}
                    helperText={titleErr ? "What's the title ?" : ""}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Country"
                    error={countryErr}
                    helperText={countryErr ? "What's the country ?" : ""}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <TextField
                    label="Continent"
                    error={continentErr}
                    helperText={continentErr ? "What's the country ?" : ""}
                    onChange={(e) => setContinent(e.target.value)}
                />
                <TextField
                    label="Expenses"
                    error={expensesErr}
                    helperText={expensesErr ? "What's the expenses ?" : ""}
                    onChange={(e) => setExpenses(e.target.value)}
                />
                <TextField
                    label="Deadline"
                    error={deadlineErr}
                    helperText={deadlineErr ? "What's the deadline ?" : ""}
                    onChange={(e) => setDeadline(e.target.value)}
                />
                <Button type="submit"><AddRoundedIcon />Add</Button>
            </form>
            <ArrowBackRoundedIcon onClick={() => setAddDrawerState(false)} />
        </div>
    );
};

export default AddCard;
