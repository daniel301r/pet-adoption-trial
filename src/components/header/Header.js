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
            <div className="all-header">
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
                    <li onClick={() => this.props.onRequestAnimals({type: 'Dog', limit: 100})}>
                        <Link to="/petpage">Dog</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Cat', limit: 100})}>
                        <Link to="/petpage">Cat</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Rabbit', limit: 100})}>
                        <Link to="/petpage">Rabbit</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Small & Furry', limit: 100})}>
                        <Link to="/petpage">Small & Furry</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Horse', limit: 100})}>
                        <Link to="/petpage">Horse</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Bird', limit: 100})}>
                        <Link to="/petpage">Bird</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Scales, Fins & Other', limit: 100})}>
                        <Link to="/petpage">Scales, Fins & Other</Link>
                    </li>
                    <li onClick={() => this.props.onRequestAnimals({type: 'Barnyard', limit: 100})}>
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
