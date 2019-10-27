import React from 'react';

const AppliedFilters = ({ filters, deleteFilterOptions, deleteAllFilters }) => {
    
    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const valueArray = Object.values(filters)
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
                    {filters.ages && filters.ages.map((age, i) => {
                        return (
                            <li key={i}>
                                {capitalize(age)}
                                <i className="far fa-times-circle" 
                                    onClick={() => deleteFilterOptions('age', age)}>
                                </i>
                            </li>
                        )
                    })}
                    {filters.sizes && filters.sizes.map((size, i) => {
                        return (
                            <li key={i}>
                                {capitalize(size)}
                                <i className="far fa-times-circle" 
                                    onClick={() => deleteFilterOptions('size', size)}>
                                </i>
                            </li>
                        )
                    })}
                    {filters.genders && filters.genders.map((gender, i) => {
                        return (
                            <li key={i}>
                                {capitalize(gender)}
                                <i className="far fa-times-circle" 
                                    onClick={() => deleteFilterOptions('gender', gender)}>
                                </i>
                            </li>
                        )
                    })}
                    {filters.coats && filters.coats.map((coat, i) => {
                        return (
                            <li key={i}>
                                {capitalize(coat)}
                                <i className="far fa-times-circle" 
                                    onClick={() => deleteFilterOptions('coat', coat)}>
                                </i>
                            </li>
                        )
                    })}
                    {/* add other filters here
                        need to do something with good_with_animals etc.
                        coats
                        colors
                    */}
                </ul>
                <p onClick={() => deleteAllFilters()}>Clear All</p>
            </div> 
        )
    } else {
        return (
            <div>No Filters Applied</div>
        )
    }
};

export default AppliedFilters;