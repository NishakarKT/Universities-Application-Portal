import Reac from "react";
import "./CardsContainer.css";
// components
import InfoCard from "../infoCard/InfoCard";

const CardsContainer = ({ location, cards }) => {
    const newCards = (location !== "All") ? cards?.filter(card => card.continent?.toLowerCase() === location.toLowerCase()) : cards;

    return (
        <div className="cardsContainer">
            {newCards?.map((card, index) => <InfoCard key={index} card={card} />)}
        </div>
    );
};

export default CardsContainer;
