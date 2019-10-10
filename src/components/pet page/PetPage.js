import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestAnimals } from '../../actions/actions';

import InfoBar from './InfoBar';
import Filters from './Filters';
import ShowAnimals from '../ShowAnimals';

class PetPage extends Component {
    
    render() {
        console.log(this.props.isPending)
        console.log(this.props.animals)
        console.log(this.props.error)
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
    return {
        animal,
        animalQuery: state.searchAnimals.animalQuery,
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