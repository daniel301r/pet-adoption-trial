import React from 'react';
import { Link } from 'react-router-dom';

const selectBar = ({ movePetSelection, animals, currIndex }) => {

    if(currIndex === 0) {
        return (
            <div className="select-bar">
                <div></div>
                <div><Link to="/petpage">Back to Pet Search</Link></div>
                <div onClick={() => movePetSelection("next")}>Next Pet<i className="fas fa-arrow-right"></i></div>
            </div>
        )
    } else if (currIndex === animals.length -1){
        return(
            <div className="select-bar">
                <div onClick={() => movePetSelection("prev")}><i className="fas fa-arrow-left"></i>Previous Pet</div>
                <div><Link to="/petpage">Back to Pet Search</Link></div>
                <div></div>
            </div>
        )
    } else {
        return (
            <div className="select-bar">
                <div onClick={() => movePetSelection("prev")}><i className="fas fa-arrow-left"></i>Previous Pet</div>
                <div><Link to="/petpage">Back to Pet Search</Link></div>
                <div onClick={() => movePetSelection("next")}>Next Pet<i className="fas fa-arrow-right"></i></div>
            </div>
        );
    }
};

export default selectBar;