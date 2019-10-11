import React from 'react';
import PetCard from './PetCard';


const Pets = ({ animals, isPending, error }) => {
    if(isPending){
        return(
            <div className="">Wait wait wait...</div>
        );
    } else if (error) {
        return (
            <div className="">Please widen your search parameters...</div>
        );
    } else {
        return (
            <div className="pet-cards">
                {animals.map((animal, i) => {
                    return <PetCard 
                                key={i} 
                                name={animal.name} 
                                age={animal.age} 
                                species={animal.species}
                                // need to figure out what to do with the image
                            />
                })}
            </div>
        );
    }
};

export default Pets;