import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestAnimals } from '../actions/actions';

class SplashPage extends Component {

    render() {
        return (
            <div>
                <div id="splash-container">
                    <div className="splash-front">
                        <h1>Find Your Perfect Companion</h1>
                        <h3>Thousands of pets for adoption. Looking for a home.</h3>
                        <button><Link to="/petpage/any">Search Pets</Link></button>
                    </div>
                    <div className="quick-search">
                        <div>Quick Search<i className="far fa-arrow-alt-circle-right"></i></div>
                        <div onClick={() => this.props.onRequestAnimals({type: 'Dog'})}>
                            <Link to="/petpage/"><i className="fas fa-dog"></i>Find a dog</Link>
                        </div>
                        <div onClick={() => this.props.onRequestAnimals({type: 'Cat'})}>
                            <Link to="/petpage/"><i className="fas fa-cat"></i>Find a cat</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onRequestAnimals: (query) => dispatch(requestAnimals(query))
    }
}

export default connect(null, mapDispatchToProps)(SplashPage);
