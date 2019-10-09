import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestAnimals } from '../../actions/actions';

import InfoBar from './InfoBar';
import Filters from './Filters';
import ShowAnimals from '../ShowAnimals';

class PetPage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <InfoBar />
                <Filters />
                <ShowAnimals/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { animal } = ownProps.match.params;
    console.log(animal)
    return {
        animal,
        searchTerm: state.searchAnimals.searchTerm,
        isPending: state.searchAnimals.isPending,
        animals: state.searchAnimals.animals,
        error: state.searchAnimals.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onRequestAnimals: (query) => dispatch(requestAnimals(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetPage);