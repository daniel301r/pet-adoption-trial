import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateAnimalQuery, requestAnimals } from '../../actions/actions';

class Header extends Component {

    state = {
        isExpanded: false
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
                        <div className="logo">
                            <Link to="/">Find A Pet</Link>
                        </div>
                        <div className="species-menu-btn" onClick={this.toggleMenu}>
                            <div>Species</div>
                            {this.state.isExpanded ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i> }
                            
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
