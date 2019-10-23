import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestAnimals } from '../actions/actions';

class SplashPage extends Component {
    // this could be updated to a stateless component
    // need to add function to update the animal query
    render() {
        return (
            <div>
                <div id="splash-container">
                    <div className="splash-front">
                        <h1>Find Your Perfect Companion</h1>
                        <h2>Hundreds of pets for adoption, looking for a home.</h2>
                        <button className="search-btn"><Link to="/petpage/any">Find your buddy now!</Link></button>
                    </div>
                    <div className="quick-search-container">
                        <div className="quick-search">
                            <div>Quick Search</div>
                        </div>
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
