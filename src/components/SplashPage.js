import React, { Component } from 'react'

class SplashPage extends Component {
    render() {
        return (
            <div id="splash-container">
                <div className="splash-front">
                    <h1>Find Your Perfect Companion</h1>
                    <h3>Thousands of pets for adoption. Looking for a home.</h3>
                    <button>Search Pets</button>
                </div>
                <div className="quick-search">
                    <div>Quick Search<i className="far fa-arrow-alt-circle-right"></i></div>
                    <div><i className="fas fa-dog"></i>Find a dog</div>
                    <div><i className="fas fa-cat"></i>Find a cat</div>
                </div>
            </div>
        )
    }
}

export default SplashPage;
