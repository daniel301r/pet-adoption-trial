

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

class RequestedPet extends Component {

    componentDidMount = () => {
        // just need to send id through 
        console.log(this.props.pet_id);
        console.log(parseInt(this.props.pet_id));
        //this.props.onRequestAnimal(id);
        //this.props.onRequestAnimal(parseInt(this.props.pet_id))
    }

    // move to next pet
    // maybe set filtered array into the store, then find index of current animal and 
    // move onto the next one

    // move to previous pet


    /*
        age - string
        attributes - object
        breeds: { mixed: boolean, primary: string, secondary: string, unknown: boolean }
        coat
        colors : {}
        description - string
        environment - object - good with children etc
        gender
        name
        photos - object
        size - string
        tags - array
    */

    render() {
        console.log(this.props);
        const { photos } = this.props.animal;
        console.log(photos);
        const images = [/*"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46341299/1/?bust=1571693959&width=600",*/"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46341299/2/?bust=1571693958&width=600"]
        return (
            <div>
                <SelectBar />
                <ImageGallery photos={images} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { pet_id } = ownProps.match.params;
    console.log(ownProps)
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
