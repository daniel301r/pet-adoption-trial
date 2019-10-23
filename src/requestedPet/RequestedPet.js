

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

    componentDidMount = () => {
        // just need to send id through 
        //this.props.onRequestAnimal(parseInt(this.props.pet_id))
    }

    // move to next pet
    // maybe set filtered array into the store, then find index of current animal and 
    // move onto the next one

    // move to previous pet




    render() {
        const { animal, isPending, error } = this.props
        const { photos } = animal;
        console.log(animal)
        return (
            <div>
                <SelectBar />
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

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onRequestAnimal: (query) => dispatch(requestAnimal(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestedPet);
