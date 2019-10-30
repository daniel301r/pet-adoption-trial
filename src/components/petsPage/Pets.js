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
            <div className="pet-search-results">
                {animals.map((animal, i) => {
                    return <PetCard 
                                key={i} 
                                id={animal.id}
                                name={animal.name} 
                                age={animal.age} 
                                species={animal.species}
                                img={animal.photos.length > 0 ? animal.photos[0].medium : 'No Image'}
                            />
                })}
            </div>
        );
    }
};

export default Pets;