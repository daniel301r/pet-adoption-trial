import React from 'react';

const PetCard = ({ index, name, age, species }) => {
    return (
        <div className="pet-card">
            {/* need to figure out what to do with the imgs - there are different sizes etc. */}
            <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46249153/2/?bust=1570823424&width=200" alt=""/>
            <div className="pet-info">
                {/* link to individual animal in anchor tag*/}
                <h4>{name}</h4>
                <p>{species}</p>
                <p>{age}</p>
            </div>
        </div>
    );
};

export default PetCard;