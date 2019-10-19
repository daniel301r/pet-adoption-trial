import React from 'react';

const InfoBar = ({ otherData }) => {
    // if the animalType is small and fury or something similar
    // will need to change what is returned to say '1000 furry and
    // small animals found'

    const animalIcon = (animal) => {
        // <i class="fas fa-dog"></i>

        // <i class="fas fa-cat"></i>

        // rabbit/hamster not on font awesome

        // <i class="fas fa-horse"></i>

        // <i class="fas fa-crow"></i>

        // <i class="fas fa-fish"></i>

        // <i class="fas fa-piggy-bank"></i>
    }

    const text = `${otherData.headers ? otherData.headers["content-length"] : ''} ${otherData.config ? otherData.config.params.type : ''}s Found`;

    // also will need to change the icon depending on animal found
    return (
        <div className="info-bar">
            <div><i className="fas fa-frog"></i></div>
            <div>{text}</div>
        </div>
    );
};

export default InfoBar;