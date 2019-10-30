import React from 'react';

const AppliedFilters = ({ filters, deleteFilterOptions, deleteAllFilters, makeRequestToAPI }) => {
    
    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const valueArray = Object.values(filters);
    const check = (element) => {
        if (element.length > 0 || element === true){
            return element
        }
    }
    
    // const createList = (list) => {
    //     return list.map((listEl, i) => { 
    //         return (<li key={i}>{capitalize(listEl)}<i className="far fa-times-circle"></i></li>)
    //     })
    // }

    if(valueArray.some(check)){
        return (
            <div className="filter-bar">
                <p>Filters Applied</p>
                <ul>
                    {/* put the options into an array and then create a function to display them all */}
                    {filters.ages && filters.ages.map((age, i) => {
                        return (
                            <li key={i}>
                                {capitalize(age)}
                                <i className="far fa-times-circle" 
                                    onClick={() => {deleteFilterOptions('age', age); makeRequestToAPI();}}>
                                </i>
                            </li>
                        )
                    })}
                    {filters.sizes && filters.sizes.map((size, i) => {
                        return (
                            <li key={i}>
                                {capitalize(size)}
                                <i className="far fa-times-circle" 
                                    onClick={() => {deleteFilterOptions('size', size); makeRequestToAPI();}}>
                                </i>
                            </li>
                        )
                    })}
                    {filters.genders && filters.genders.map((gender, i) => {
                        return (
                            <li key={i}>
                                {capitalize(gender)}
                                <i className="far fa-times-circle" 
                                    onClick={() => {deleteFilterOptions('gender', gender); makeRequestToAPI();}}>
                                </i>
                            </li>
                        )
                    })}
                    {filters.coats && filters.coats.map((coat, i) => {
                        return (
                            <li key={i}>
                                {capitalize(coat)}
                                <i className="far fa-times-circle" 
                                    onClick={() => {deleteFilterOptions('coat', coat); makeRequestToAPI();}}>
                                </i>
                            </li>
                        )
                    })}
                    {filters.colors && filters.colors.map((color, i) => {
                        return (
                            <li key={i}>
                                {capitalize(color)}
                                <i className="far fa-times-circle" 
                                    onClick={() => {deleteFilterOptions('color', color); makeRequestToAPI();}}>
                                </i>
                            </li>
                        )
                    })}
                    {filters.breeds && filters.breeds.map((breed, i) => {
                        return (
                            <li key={i}>
                                {capitalize(breed)}
                                <i className="far fa-times-circle" 
                                    onClick={() => {deleteFilterOptions('breed', breed); makeRequestToAPI();}}>
                                </i>
                            </li>
                        )
                    })}
                    {filters.good_with_children ? (
                            <li>
                                Kids
                                <i className="far fa-times-circle" 
                                    onClick={() => {deleteFilterOptions('good_with_children'); makeRequestToAPI();}}>
                                </i>
                            </li>
                        ): ''}
                    {filters.good_with_dogs ? (
                            <li>
                                Dogs
                                <i className="far fa-times-circle" 
                                    onClick={() => {deleteFilterOptions('good_with_dogs'); makeRequestToAPI();}}>
                                </i>
                            </li>
                        ): ''}
                    {filters.good_with_cats ? (
                            <li>
                                Cats
                                <i className="far fa-times-circle" 
                                    onClick={() => {deleteFilterOptions('good_with_cats'); makeRequestToAPI();}}>
                                </i>
                            </li>
                        ): ''}
                </ul>
                <p onClick={() => {deleteAllFilters(); makeRequestToAPI();}}>Clear All</p>
            </div> 
        )
    } else {
        return (
            <div></div>
        )
    }
};

export default AppliedFilters;