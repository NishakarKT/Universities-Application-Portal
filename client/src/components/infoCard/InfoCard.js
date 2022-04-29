import React, { useState } from "react";
import axios from "axios";
import "./InfoCard.css";
// components
import Loading from "../../pages/loading/Loading";

const GET_USER_ENDPOINT = "http://localhost:8000/user";
const POST_UNIVERSITY_TO_USER_ENDPOINT = "http://localhost:8000/add_university_to_user";

const InfoCard = ({ card }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdate = () => {
        setIsLoading(true);
        axios.get(GET_USER_ENDPOINT + "/6106bfb6b898a10c88ed2ad0").then(res => {
            const currentUniversities = res.data[0]?.universities;

            if (currentUniversities?.includes(card.title)) {
                alert("You have already registered for " + card.title);
                setIsLoading(false);
            }
            else {
                const updatedUniversities = currentUniversities ? [...currentUniversities, card.title] : [card.title];

                axios.patch(POST_UNIVERSITY_TO_USER_ENDPOINT + "/" + "6106bfb6b898a10c88ed2ad0", { universities: updatedUniversities }).then(res => {
                    console.log(res);
                    setIsLoading(false);
                }).catch(() => setIsLoading(false));
            }
        }).catch(() => setIsLoading(false));
    };

    return (
        <div className="infoCard">
            {isLoading ? <Loading /> : null}
            <marquee scrollamount={5}>{card.title}</marquee>
            <h2>{card.country}</h2>
            <h3>Expenses: {card.expenses}</h3>
            <h4>Deadline: {card.deadline}</h4>
            <hr />
            <button onClick={() => handleUpdate()}>Apply</button>
        </div>
    );
};

export default InfoCard;
