import {
    REQUEST_ANIMALS_PENDING,
    REQUEST_ANIMALS_SUCCESS,
    REQUEST_ANIMALS_FAILED
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
    searchTerm: '',
    isPending: false,
    animals: [],
    error: ''
}

export const searchAnimals = (state=searchAnimalsState, action) => {
    switch(action.type){
        case REQUEST_ANIMALS_PENDING:
            return {...state, isPending: true}
        case REQUEST_ANIMALS_SUCCESS:
            return {...state, animals: action.payload, isPending: false}
        case REQUEST_ANIMALS_FAILED: 
            return {...state, error: action.payload, isPending: false}
        default:
            return state;
    }
}