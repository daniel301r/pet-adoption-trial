import React from 'react';

const selectBar = () => {
    return (
        <div className="select-bar">
            <div><i className="fas fa-arrow-left"></i>Previous Pet</div>
            <div>Back to Pet Search</div>
            <div>Next Pet<i className="fas fa-arrow-right"></i></div>
        </div>
    );
};

export default selectBar;