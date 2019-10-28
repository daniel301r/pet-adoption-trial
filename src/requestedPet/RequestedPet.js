

// then image gallery that you can select different photos
// if only one pet put image in middle and then black on the sides
// maybe add modal that adds full page image

// then another info bar that has all the information about him
// look on actual page to take a look at the design

import React, { Component } from 'react'
import SelectBar from './SelectBar';
import { connect } from 'react-redux';

import { requestAnimal } from '../actions/actions';
import ImageGallery from './ImageGallery';
import InfoBubble from './InfoBubble';

class RequestedPet extends Component {

    state = {
        animal: [],
        currIndex: 0
    }

    componentDidMount = () => {
        // just need to send id through 
        this.props.onRequestAnimal(parseInt(this.props.pet_id))
        // see if setting the animal immediately after this works
    }

    movePetSelection = (way) => {
        const animals = this.props.animals;
        const id = this.props.animal.id;
        const currIndex = animals.findIndex(animal => animal.id === id);
        console.log(way, id, animals, currIndex)
        // need to check if it is on 0 or the last in the array
        if(way === 'next'){
            // go forward in array
            this.setState({ animal: animals[currIndex + 1], currIndex: currIndex + 1})
        } else {
            // go backwards in array
            this.setState({ animal: animals[currIndex - 1], currIndex: currIndex - 1})
        }

    }
    // move to next pet
    // maybe set filtered array into the store, then find index of current animal and 
    // move onto the next one

    // move to previous pet




    render() {
        const { animal, isPending, error } = this.props
        const { photos } = animal;
        console.log(this.props.animals)
        return (
            <div>
                <SelectBar movePetSelection={this.movePetSelection}/>
                <ImageGallery photos={photos} />
                <InfoBubble animal={animal} isPending={isPending} error={error}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { pet_id } = ownProps.match.params;
    return {
        pet_id,
        animal: state.searchAnimals.animal,
        isPending: state.searchAnimals.isPendingAnimal,
        error: state.searchAnimals.errorAnimal,
        animals: state.searchAnimals.animals
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onRequestAnimal: (query) => dispatch(requestAnimal(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestedPet);
