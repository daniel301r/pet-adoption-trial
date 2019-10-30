import React from 'react';
import { capitalize } from '../constants';

const InfoBubble = ({ animal, isPending, error }) => {

    const attributes = (obj) => {
        let finalString ='';
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
        let  finalString = '';
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
            <div className="info-bubble">
                <div className="info-data">
                    <div className="info-name">
                        <h1>{animal.name}</h1>
                        <div>{animal.breeds && breeds(animal.breeds)}</div>
                    </div>
                    <div className="info-mix">{animal.age} / {animal.gender} / {animal.size} / {animal.colors && colors()}</div>
                    <div className="info-about">
                        <h2>About</h2>
                        <div>
                            <h4>Coat Length</h4>
                            <div>{animal.coat}</div>
                        </div>
                        <div>
                            <h4>Good In a House With</h4>
                            <div>{animal.environment && goodWith()}</div>
                        </div>
                        <div>
                            <h4>Description</h4>
                            <div>{animal.description}</div>
                        </div>
                    </div>  
                    <div className="info-health">
                        <h2>Health</h2>
                        <div>{animal.attributes && attributes(animal.attributes)}</div>
                    </div>
                    
                </div>   
                <div className="sponsor-div">
                    <div className="sponsor-div-btns">
                        <button>Ask about {animal.name}</button>
                        <button>Sponsor {animal.name}</button>
                    </div>
                    <div className="sponsor-div-shr">
                        <div><i className="fas fa-share"></i>Share</div>
                        <div><i className="fas fa-print"></i>Print</div>
                    </div>
                </div>        
            </div>
        );
    }
};

export default InfoBubble;