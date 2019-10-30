import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ name, age, species, img, id }) => {
    return (
        <Link to={"/singlePet/" + id}>
            <div className="pet-card">
                <div className="img-container">
                    <img src={img} alt=""/>
                </div>
                <div className="pet-info">
                    <h4>{name}</h4>
                    <p>{species} <span className="dot"></span> {age}</p>
                </div>
                <div className="pet-card-overlay">
                    <div>Find out more about {name}</div>
                </div>
            </div>
        </Link>
    );
};

export default PetCard;