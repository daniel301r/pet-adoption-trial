import React from 'react';
import PetCard from './PetCard';


const Pets = ({ animals, isPending, error }) => {

    const capitaliseWords = (phrase) => {
        return phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const filteredAnimals = animals.reduce((finalList, animal) => {
        const symbols = [".",",","(",")","&","!","%","*","-","#","?","/","1","2","3","4","5","6","7","8","9","0"] 
        if(!symbols.some(el => animal.name.includes(el)) && animal.photos.length > 0){
            finalList.push(animal)
        }

        animal.name = capitaliseWords(animal.name)

        return finalList;
    },[]);

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
                {filteredAnimals.map((animal, i) => {
                    return <PetCard 
                                key={i} 
                                id={animal.id}
                                name={animal.name} 
                                age={animal.age} 
                                species={animal.species}
                                img={animal.photos.length > 0 ? animal.photos[0].medium : 'No Image'}
                                // need to standardise the image
                            />
                })}
            </div>
        );
    }
};

export default Pets;