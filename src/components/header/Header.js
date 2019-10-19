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

    sendQuery = (query) => {
        this.props.onRequestAnimals({type: query, limit: 100});
        this.props.onUpdateAnimalQuery(query);
        this.toggleMenu();
    }
    
    render() {
        return (
            <div className="all-header">
                <section id="header">
                    <div className="header-container">
                        <div className="logo">
                            <Link to="/">LOGO</Link>
                        </div>
                        <div onClick={this.toggleMenu}>Species<i className="fas fa-chevron-down"></i></div>  
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
                    <li onClick={() => this.sendQuery('Dog')}>
                        <Link to="/petpage">Dog</Link>
                    </li>
                    <li onClick={() => this.sendQuery('Cat')}>
                        <Link to="/petpage">Cat</Link>
                    </li>
                    <li onClick={() => this.sendQuery('Rabbit')}>
                        <Link to="/petpage">Rabbit</Link>
                    </li>
                    <li onClick={() => this.sendQuery('Small & Furry')}>
                        <Link to="/petpage">Small & Furry</Link>
                    </li>
                    <li onClick={() => this.sendQuery('Horse')}>
                        <Link to="/petpage">Horse</Link>
                    </li>
                    <li onClick={() => this.sendQuery('Bird')}>
                        <Link to="/petpage">Bird</Link>
                    </li>
                    <li onClick={() => this.sendQuery('Scales, Fins & Other')}>
                        <Link to="/petpage">Scales, Fins & Other</Link>
                    </li>
                    <li onClick={() => this.sendQuery('Barnyard')}>
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
