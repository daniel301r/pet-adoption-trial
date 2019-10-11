import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';

import { updateAnimalQuery, requestAnimals } from '../../actions/actions';

class Header extends Component {

    state = {
        isExpanded: false,
    }

    toggleMenu = () => {
        this.setState({ isExpanded: !this.state.isExpanded })        
    }
    
    render() {
        return (
            <div>
                <section id="header">
                    <div className="header-container">
                        <div className="logo">
                            <Link to="/">LOGO</Link>
                        </div>
                        <div onClick={this.toggleMenu}>Breeds<i className="fas fa-chevron-down"></i></div>  
                    </div>
                    <div className="header-container">
                        <SearchBar />
                        <ul className="sign-in-buttons">
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                        </ul>
                    </div>
                </section>
                <ul className={this.state.isExpanded ? "species-menu-expanded" : "species-menu"}>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Dog'})}>
                        <Link to="/petpage">Dog</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Cat'})}>
                        <Link to="/petpage">Cat</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Rabbit'})}>
                        <Link to="/petpage">Rabbit</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Small & Furry'})}>
                        <Link to="/petpage">Small & Furry</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Horse'})}>
                        <Link to="/petpage">Horse</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Bird'})}>
                        <Link to="/petpage">Bird</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Scales, Fins & Other'})}>
                        <Link to="/petpage">Scales, Fins & Other</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Barnyard'})}>
                        <Link to="/petpage">Barnyard</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onUpdateAnimalQuery: (query, calledFrom) => dispatch(updateAnimalQuery(query, calledFrom)),
        onRequestAnimals: (query) => dispatch(requestAnimals(query))
    }
}

export default connect(null, mapDispatchToProps)(Header);
