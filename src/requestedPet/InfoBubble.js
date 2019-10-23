import React from 'react';
import { capitalize } from '../constants';

const InfoBubble = ({ animal, isPending, error }) => {

    const attributes = (obj) => {
        let finalString ='';
        // I removed === true from conditions because
        if (obj.declawed){
            finalString += 'Declawed, '
        } 
        if (obj.house_trained){
            finalString += 'House Trained, '
        } 
        if (obj.shots_current){
            finalString += 'Shots Up-To-Date, '
        } 
        if (obj.spayed_neutered){
            finalString += 'Spayed, '
        }
        if (obj.house_trained){
            finalString += 'House Trained, '
        } 
        
        if (finalString === ''){
            finalString = 'No Data Available'
        } else {
            finalString = finalString.slice(0, -2)
        }
        
        return finalString
    }

   const colors = () => {
       const colorsArr = Object.values(animal.colors)
       let finalString = ''
        for(const color of colorsArr){
            if(color !== null){
                finalString += `${color}, `
            }
       }
       finalString = finalString.slice(0, -2)
       return finalString
   }
   
    const goodWith = () => {
        const envArr = Object.entries(animal.environment)
        let  finalString = 'Good with: ';
        for (const [who, boolean] of envArr){
            if(boolean === true){
                finalString += `${capitalize(who)}, `;
            }
        }
        
        if(finalString === 'Good with: '){
            finalString = 'Not good with children, cats or dogs'
        } else {
            finalString = finalString.slice(0, -2);
        }
        return finalString
    }

    const breeds = (obj) => {
        let finalString = ''
        if(obj.unknown){
            return 'Unknown'
        } else {
            finalString += `${obj.primary}, ${obj.secondary !== null ? obj.secondary : ''}`;
        }

        if(obj.mixed === true){
            finalString += 'Mix'
        } else {
            finalString = finalString.slice(0, -2)
        }
        return finalString
    }

    if(error){
        return (
            <div>Sorry we couldn't find the animal you are looking for!!</div>
        )
    } else if(isPending){
        return (
            <div>Wait wait wait....</div>
        )
    } else {
        return (
            <div>
                <div>{animal.name}</div>
                {/* something strange happening with breeds */}
                <div>{animal.breeds && breeds(animal.breeds)} / Location</div>
                {/* make colors it's own line and add 'Gender:' to all the options to make it clear */}
                <div>{animal.age} / {animal.gender} / {animal.size} / {animal.colors && colors()}</div>
                <div>
                    <h2>About</h2>
                    {/* add 'Coat:' */}
                    <div>{animal.coat}</div>
                    <div>{animal.environment && goodWith()}</div>
                </div>
                <div>
                    <h2>Health</h2>
                    <div>{animal.attributes && attributes(animal.attributes)}</div>
                </div>
                <div>{animal.description}</div>
                
            </div>
        );
    }
};

export default InfoBubble;