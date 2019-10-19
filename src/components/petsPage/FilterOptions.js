import React, { Component } from 'react';

class Filters extends Component {

    state = {
        isExpanded: false,
        breed: false,
        age: false,
        size: false,
        gender: false,
        goodWith: false,
        coatLength: false,
        color: false
    }

    toggleOptions = (e) => {
        if(this.state.isExpanded && this.state[e.target.id] !== true){
            return -1
        }

        this.setState({ 
            isExpanded: !this.state.isExpanded,
            [e.target.id]: !this.state[e.target.id]
        })
    }

    render() {
        const { species, addFilterOptions, makeRequestToAPI } = this.props;
        return (
            // should really make these into small stateless components and pass in data
            <div className="filters-container">
                <div className="filter-container">
                    <div>Breed</div>
                    <button onClick={this.toggleOptions}>Any<i className="fas fa-chevron-down" id="breed"></i></button>
                </div>
                <div className="filter-options-container">
                    <ul className={this.state.isExpanded && this.state.breed ? "filter-options-expanded" : "filter-options"}>
                        {/* {species.map((specie, i) => {
                            return (
                                <li key={i}>
                                    {specie}
                                    <div>
                                        <span>(0)</span>
                                        <i className="fas fa-plus-circle"></i>
                                    </div>
                                </li>
                            )
                        })} */}
                    </ul>
                </div>
                <div className="filter-container">
                    <div>Age</div>
                    <button onClick={this.toggleOptions}>Any<i className="fas fa-chevron-down" id="age"></i></button>
                </div>
                <div className="filter-options-container">
                    <ul className={this.state.isExpanded && this.state.age ? "filter-options-expanded" : "filter-options"}>
                        <li>
                            Baby
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => {
                                    addFilterOptions('age', 'baby');
                                    makeRequestToAPI();
                                    }}></i>
                            </div>
                        </li>
                        <li>
                            Young
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => {
                                    addFilterOptions('age', 'young');
                                    makeRequestToAPI();
                                    }}></i>
                            </div>
                        </li>
                        <li>
                            Adult
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => {
                                    addFilterOptions('age', 'adult');
                                    makeRequestToAPI();}}></i>
                            </div>
                        </li>
                        <li>
                            Senior
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" 
                                    onClick={() => {
                                    addFilterOptions('age', 'senior');
                                    makeRequestToAPI();
                                    }}>
                                </i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="filter-container">
                    <div>Size</div>
                    <button onClick={this.toggleOptions}>Any<i className="fas fa-chevron-down" id="size"></i></button>
                </div>
                <div className="filter-options-container">
                    <ul className={this.state.isExpanded && this.state.size ? "filter-options-expanded" : "filter-options"}>
                        <li>
                            Small
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('size', 'small')}></i>
                            </div>
                        </li>
                        <li>
                            Medium
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('size', 'medium')}></i>
                            </div>
                        </li>
                        <li>
                            Large
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('size', 'large')}></i>
                            </div>
                        </li>
                        <li>
                            XL
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('size', 'xlarge')}></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="filter-container">
                    <div>Gender</div>
                    <button onClick={this.toggleOptions}>Any<i className="fas fa-chevron-down" id="gender"></i></button>
                </div>
                <div className="filter-options-container">
                    <ul className={this.state.isExpanded && this.state.gender ? "filter-options-expanded" : "filter-options"}>
                        <li>
                            Male
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('gender', 'male')}></i>
                            </div>
                        </li>
                        <li>
                            Female
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('gender', 'female')}></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="filter-container">
                    <div>Good With</div>
                    <button onClick={this.toggleOptions}>Any<i className="fas fa-chevron-down" id="goodWith"></i></button>
                </div>
                <div className="filter-options-container">
                    <ul className={this.state.isExpanded && this.state.goodWith ? "filter-options-expanded" : "filter-options"}>
                        <li>
                            Kids
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('good_with_children', true)}></i>
                            </div>
                        </li>
                        <li>
                            Dogs
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('good_with_dogs', true)}></i>
                            </div>
                        </li>
                        <li>
                            Cats
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('good_with_cats', true)}></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="filter-container">
                    <div>Coat Length</div>
                    <button onClick={this.toggleOptions}>Any<i className="fas fa-chevron-down" id="coatLength"></i></button>
                </div>
                <div className="filter-options-container">
                    <ul className={this.state.isExpanded && this.state.coatLength ? "filter-options-expanded" : "filter-options"}>
                        <li>
                            Hairless
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('coat', 'hairless')}></i>
                            </div>
                        </li>
                        <li>
                            Short
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('coat', 'short')}></i>
                            </div>
                        </li>
                        <li>
                            Medium
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('coat', 'medium')}></i>
                            </div>
                        </li>
                        <li>
                            Long
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('coat', 'long')}></i>
                            </div>
                        </li>
                        <li>
                            Curly
                            <div>
                                <span>(0)</span>
                                <i className="fas fa-plus-circle" onClick={() => addFilterOptions('coat', 'curly')}></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="filter-container">
                    <div>Color</div>
                    <button>Any<i className="fas fa-chevron-down"></i></button>
                </div>
            </div>
        );
    }
}



export default Filters;