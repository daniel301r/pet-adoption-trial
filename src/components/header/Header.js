import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Header extends Component {

    state = {
        isExpanded: false
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
                            LOGO
                        </div>
                        <div onClick={this.toggleMenu}>Breeds<i className="fas fa-chevron-down"></i></div>  
                    </div>
                    <div className="header-container">
                        <SearchBar />
                        <ul className="sign-in-buttons">
                            <li>Sign Up</li>
                            <li>Log In</li>
                        </ul>
                    </div>
                </section>
                <ul className={this.state.isExpanded ? "species-menu-expanded" : "species-menu"}>
                    <li>Dog</li>
                    <li>Cat</li>
                    <li>Rabbit</li>
                    <li>Small & Fury</li>
                    <li>Horse</li>
                    <li>Bird</li>
                    <li>Scales, Fins & Other</li>
                    <li>Barnyard</li>
                </ul>
            </div>
        )
    }
}

export default Header;
