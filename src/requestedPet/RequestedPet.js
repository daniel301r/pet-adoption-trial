import React, { Component } from 'react'
import SelectBar from './SelectBar';
import { connect } from 'react-redux';

import { requestAnimal } from '../actions/actions';
import ImageGallery from './ImageGallery';
import InfoBubble from './InfoBubble';

class RequestedPet extends Component {

    componentDidMount = () => {
        this.props.onRequestAnimal(parseInt(this.props.pet_id))
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.pet_id !== prevProps.pet_id){
            this.props.onRequestAnimal(parseInt(this.props.pet_id))
        }
    }

    movePetSelection = (way) => {
        const animals = this.props.animals;
        const id = this.props.animal.id;
        const currIndex = animals.findIndex(animal => animal.id === id);

        if(way === 'next'){
            this.props.history.push('/singlepet/' + animals[currIndex + 1].id);
        } else {
            this.props.history.push('/singlepet/' + animals[currIndex - 1].id);
        }
    }

    render() {
        const { animal, isPending, error, animals } = this.props
        const { photos } = animal;

        const currIndex = animals.findIndex(el => el.id === animal.id);

        return (
            <div>
                <SelectBar movePetSelection={this.movePetSelection} animals={animals} currIndex={currIndex}/>
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
