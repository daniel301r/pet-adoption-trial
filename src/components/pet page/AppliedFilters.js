import React from 'react';

const AppliedFilters = () => {
    return (
        <div className="filter-bar">
            <p>Filters Applied</p>
            <ul>
                <li>Anywhere<i className="far fa-times-circle"></i></li>
            </ul>
            <p>Clear All</p>
        </div>
    );
};

export default AppliedFilters;