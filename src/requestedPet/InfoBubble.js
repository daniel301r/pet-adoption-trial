import React from 'react';
import { capitalize } from '../constants';

const InfoBubble = ({ animal }) => {


    
    //const healthAttributes = { declawed: null, house_trained: false, shots_current: true, spayed_neutered: true, special_needs: false}
    // need to add the 
    const attributes = (obj) => {
        let finalString =''
        if (obj.declawed === true){
            finalString += 'Declawed, '
        } 
        if (obj.house_trained === true){
            finalString += 'House Trained, '
        } 
        if (obj.shots_current === true){
            finalString += 'Shots Up-To-Date, '
        } 
        if (obj.spayed_neutered === true){
            finalString += 'Spayed, '
        }
        if (obj.house_trained === true){
            finalString += 'House Trained, '
        } 
        
        if (finalString === ''){
            finalString = 'No Data Available'
        } else {
            finalString = finalString.slice(0, -2)
        }
        
        return finalString
    }

   //const colorsObj = { primary: 'Brown', secondary: 'Blue', tertiary: null}
   
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
   //console.log('colors', colors(colorsArr))
   
   // const environment = { cats: null, children: true, dogs: false} 
   
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
    /*
        
        
        contact - make something up
        description - string
        environment - { cats: null, children: true, dogs: true}
        breeds: { mixed: true, primary: "Chihuahua", secondary: null, unknown: false }
    */



   // const breedsObj = { mixed: true, primary: "Chihuahua", secondary: null, unknown: false };
    const breeds = (obj) => {
        let finalString = ''

        if(obj.unknown){
            return 'Unknown'
        } else {
            finalString += `${obj.primary}, ${obj.secondary !== null ? obj.secondary : ''}`
        }

        if(obj.mixed === true){
            finalString += 'Mix'
        } else {
            finalString = finalString.slice(0, 2)
        }

        return finalString
    }
    //console.log('breeds', breeds(breedsObj))


    if(!animal){
        return (
            <div>No Animal</div>
        )
    } else {
        return (
            <div>
                <div>{animal.name}</div>
                <div>{animal.breeds && breeds(animal.breeds)} / Location</div>
                <div>{animal.age} / {animal.gender} / {animal.size} / {animal.colors && colors()}</div>
                <div>
                    <h2>About</h2>
                    <div>{animal.coat}</div>
                    <div></div>
                </div>
                <div>
                    <h2>Health</h2>
                    <div>{animal.attributes && attributes(animal.attributes)}</div>
                </div>
                <div>{animal.description}</div>
                <div>{animal.environment && goodWith()}</div>
            </div>
        );
    }
};

export default InfoBubble;