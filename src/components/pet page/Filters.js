import React, { Component } from 'react';

class Filters extends Component {

    render() {
        return (
            // think about how to organise this as a form or not
            <div className="filters">
                <div>
                    <div>Breed</div>
                    <button>Any<i className="fas fa-chevron-down"></i></button>
                </div>
                {/* <div>
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age"/>
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <input type="text" id="size"/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input type="text" id="color"/>
                </div>
                <div>
                    <label htmlFor="good-with">Good With</label>
                    <input type="text" id="good-with"/>
                </div> */}
            </div>
        );
    }
}



export default Filters;