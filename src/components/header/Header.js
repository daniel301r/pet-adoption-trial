import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

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
                    <li><Link to="/petpage/dog" >Dog</Link></li>
                    <li><Link to="/petpage/cat">Cat</Link></li>
                    <li><Link to="/petpage/rabbit">Rabbit</Link></li>
                    <li><Link to="/petpage/small-fury">Small & Furry</Link></li>
                    <li><Link to="/petpage/horse">Horse</Link></li>
                    <li><Link to="/petpage/bird">Bird</Link></li>
                    <li><Link to="/petpage/scales-fins-other">Scales, Fins & Other</Link></li>
                    <li><Link to="/petpage/barnyard">Barnyard</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;
