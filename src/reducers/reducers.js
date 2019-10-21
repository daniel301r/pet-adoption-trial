import {
    REQUEST_ANIMALS_PENDING,
    REQUEST_ANIMALS_SUCCESS,
    REQUEST_ANIMALS_FAILED,
    REQUEST_ANIMAL_PENDING,
    REQUEST_ANIMAL_SUCCESS,
    REQUEST_ANIMAL_FAILED,
    UPDATE_ANIMAL_QUERY
} from '../constants';

const initState = {
    
}

export const initReducer = (state=initState, action) => {
    switch(action.type){

        default:
            return state;
    }
}

const searchAnimalsState = {
    animalQuery: '',
    isPendingAnimals: false,
    animals: [],
    otherData: {},
    errorAnimals: '',
    animal: [],
    isPendingAnimal: false,
    errorAnimal: ''
}

export const searchAnimals = (state=searchAnimalsState, action) => {
    switch(action.type){
        case UPDATE_ANIMAL_QUERY:
            return {...state, animalQuery: action.payload}
        case REQUEST_ANIMALS_PENDING:
            return {...state, isPendingAnimals: true}
        case REQUEST_ANIMALS_SUCCESS:
            return {...state, animals: action.payload.data.animals, otherData: action.payload, isPendingAnimals: false}
        case REQUEST_ANIMALS_FAILED: 
            return {...state, errorAnimals: action.payload, isPendingAnimals: false}
        case REQUEST_ANIMAL_PENDING:
            return {...state, isPendingAnimal: true}
        case REQUEST_ANIMAL_SUCCESS:
            return {...state, animal: action.payload.data.animal, isPendingAnimal: false}
        case REQUEST_ANIMAL_FAILED: 
            return {...state, errorAnimal: action.payload, isPendingAnimal: false}
        default:
            return state;
    }
}