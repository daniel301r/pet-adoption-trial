import React from 'react';
import { Link } from 'react-router-dom';

const selectBar = ({ movePetSelection }) => {
    return (
        <div className="select-bar">
            <div onClick={() => movePetSelection("prev")}><i className="fas fa-arrow-left"></i>Previous Pet</div>
            <div><Link to="/petpage">Back to Pet Search</Link></div>
            <div onClick={() => movePetSelection("next")}>Next Pet<i className="fas fa-arrow-right"></i></div>
        </div>
    );
};

export default selectBar;