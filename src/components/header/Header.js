import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Header extends Component {
    
    render() {
        return (
            <div>
                <div className="logo"></div>
                <SearchBar onSearchChange={onSearchChange}/>
                {/* Sign Up Log In */}
            </div>
        )
    }
}

export default Header;
