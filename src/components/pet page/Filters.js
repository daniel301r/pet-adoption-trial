import React, { Component } from 'react';

class Filters extends Component {

    state = {
        isExpanded: false
    }

    toggleOptions = () => {
        this.setState({ isExpanded: !this.state.isExpanded })
    }

    render() {
        return (
            // should really make these into small stateless components and pass in data
            <div className="filters-container">
                <div className="filter-container">
                    <div>Breed</div>
                    <button>Any<i className="fas fa-chevron-down"></i></button>
                </div>
                <div className="filter-container">
                    <div>Age</div>
                    <button onClick={this.toggleOptions}>Any<i className="fas fa-chevron-down"></i></button>
                </div>
                <ul className={this.state.isExpanded ? "filter-options-expanded" : "filter-options"}>
                    <li>
                        Baby
                        <div>
                            <span>(0)</span>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </li>
                    <li>
                        Young
                        <div>
                            <span>(0)</span>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </li>
                    <li>
                        Adult
                        <div>
                            <span>(0)</span>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </li>
                    <li>
                        Senior
                        <div>
                            <span>(0)</span>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </li>
                </ul>
                <div className="filter-container">
                    <div>Size</div>
                    <button>Any<i className="fas fa-chevron-down"></i></button>
                </div>
                <div className="filter-container">
                    <div>Gender</div>
                    <button>Any<i className="fas fa-chevron-down"></i></button>
                </div>
                <div className="filter-container">
                    <div>Good With</div>
                    <button>Any<i className="fas fa-chevron-down"></i></button>
                </div>
                <div className="filter-container">
                    <div>Coat Length</div>
                    <button>Any<i className="fas fa-chevron-down"></i></button>
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