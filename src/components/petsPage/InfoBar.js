import React from 'react';

const InfoBar = ({ otherData, query }) => {
    
    const animalIcon = (animal) => {  
        switch(animal){
            case 'Dog':
                return <i className="fas fa-dog"></i>
            case 'Cat':
                return <i className="fas fa-cat"></i>
            case 'Rabbit':
                return <i className="fas fa-horse"></i>
            case 'Small & Furry':
                // need to find image
                break;
            case 'Horse':
                // need to find image
                break;
            case 'Bird':
                return <i className="fas fa-crow"></i>
            case 'Barnyard':
                return <i className="fas fa-piggy-bank"></i>
            case 'Scales, Fins & Other':
                return <i className="fas fa-fish"></i>
        }
    }

    const text = (data, animal) => {
        const amount = data.headers["content-length"];
        const animalType = data.config.params.type;
        // refactor this
        switch(animal){
            case 'Dog':
                return `${amount} ${animalType}s Found`
            case 'Cat':
                return `${amount} ${animalType}s Found`
            case 'Rabbit':
                return `${amount} ${animalType}s Found`
            case 'Small & Furry':
                return `${amount} ${animalType} Animals Found`
            case 'Horse':
                return `${amount} ${animalType}s Found`
            case 'Bird':
                return `${amount} ${animalType}s Found`
            case 'Barnyard':
                return `${amount} ${animalType} Animals Found`
            case 'Scales, Fins & Other':
                return `${amount} ${animalType} Animals Found`
        }
    }

    return (
        <div className="info-bar">
            <div>{animalIcon(query)}</div>
            <div>{text(otherData, query)}</div>
        </div>
    );
};

export default InfoBar;