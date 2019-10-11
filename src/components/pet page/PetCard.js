import React from 'react';

const PetCard = ({ index, name, age, species }) => {
    return (
        <div>
            {/* need to figure out what to do with the imgs - there are different sizes etc. */}
            <img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46249153/2/?bust=1570823424&width=100" alt=""/>
            <div>
                {/* link to individual animal in anchor tag*/}
                <p>{name}</p>
                <p>{species}</p>
                <p>{age}</p>
            </div>
        </div>
    );
};

export default PetCard;