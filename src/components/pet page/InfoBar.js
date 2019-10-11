import React from 'react';

const InfoBar = ({ otherData }) => {
    // if the animalType is small and fury or something similar
    // will need to change what is returned to say '1000 furry and
    // small animals found'

    const text = `${otherData.headers ? otherData.headers["content-length"] : ''} ${otherData.config ? otherData.config.params.type : ''}s found`;

    // also will need to change the icon depending on animal found
    return (
        <div className="info-bar">
            <div><i className="fas fa-frog"></i></div>
            <div>{text}</div>
        </div>
    );
};

export default InfoBar;