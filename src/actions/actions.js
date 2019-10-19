import { Client } from "@petfinder/petfinder-js";

import {
    REQUEST_ANIMALS_PENDING,
    REQUEST_ANIMALS_SUCCESS,
    REQUEST_ANIMALS_FAILED
} from '../constants';


const client = new Client({
    apiKey: "gym7fcjyplnoZ2Vid2YV7hL9Qve3mp1rvwJfKzSVcokuYUds7W", 
    secret: "xfiEVqKi58j51pM0Y1aEpSU9dSn7iyU1McDAyab5"
});

export const requestAnimals = (query) => (dispatch) => {
    dispatch({ type: REQUEST_ANIMALS_PENDING });
    client.animal.search(query)
        .then(data => dispatch({ type: REQUEST_ANIMALS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ANIMALS_FAILED, payload: error }))
}

export const updateAnimalQuery = (query) => ({
    type: 'UPDATE_ANIMAL_QUERY',
    payload: query  
})





