import React from 'react';

const AppliedFilters = ({ filters }) => {
    const capitalize = (s) => {
        // if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const createList = (list) => {
        return list.map(listEl => (<li>{capitalize(listEl)}<i className="far fa-times-circle"></i></li>))
    }

    // breed: [],
    // age: [],
    // size: [],
    // gender: [],
    // good_with_children: false,
    // good_with_dogs: false,
    // good_with_cats: false,
    // coat: [],
    // color: []
    console.log(filters)
    return (
        
        <div className="filter-bar">
            <p>Filters Applied</p>
            <ul>
                {filters.ages && createList(filters.ages)}
                {filters.sizes && createList(filters.sizes)}
                {filters.genders && createList(filters.genders)}
                {filters.coats && createList(filters.coats)}
                {/* {filters.ages.map(age => {
                    return(
                        <li>{capitalize(age)}<i className="far fa-times-circle"></i></li>
                    )
                })}   */}
            </ul>
            <p>Clear All</p>
        </div>
    );
};

export default AppliedFilters;