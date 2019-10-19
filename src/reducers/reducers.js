import {
    REQUEST_ANIMALS_PENDING,
    REQUEST_ANIMALS_SUCCESS,
    REQUEST_ANIMALS_FAILED,
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
    isPending: false,
    animals: [],
    otherData: {},
    error: ''
}

export const searchAnimals = (state=searchAnimalsState, action) => {
    switch(action.type){
        case UPDATE_ANIMAL_QUERY:
            return {...state, animalQuery: action.payload}
        case REQUEST_ANIMALS_PENDING:
            return {...state, isPending: true}
        case REQUEST_ANIMALS_SUCCESS:
            return {...state, animals: action.payload.data.animals, otherData: action.payload, isPending: false}
        case REQUEST_ANIMALS_FAILED: 
            return {...state, error: action.payload, isPending: false}
        default:
            return state;
    }
}