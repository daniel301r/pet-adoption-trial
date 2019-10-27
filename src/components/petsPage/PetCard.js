import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ name, age, species, img, id }) => {
    return (
        <Link to={"/singlePet/" + id}>
            <div className="pet-card">
                {/* need to figure out what to do with the imgs - there are different sizes etc. */}
                <div className="img-container">
                    <img src={img} alt=""/>
                </div>
                <div className="pet-info">
                    {/* link to individual animal in anchor tag*/}
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