export const REQUEST_ANIMALS_PENDING = 'REQUEST_ANIMALS_PENDING';

export const REQUEST_ANIMALS_SUCCESS = 'REQUEST_ANIMALS_SUCCESS';

export const REQUEST_ANIMALS_FAILED = 'REQUEST_ANIMALS_FAILED';

export const REQUEST_ANIMAL_PENDING = 'REQUEST_ANIMAL_PENDING';

export const REQUEST_ANIMAL_SUCCESS = 'REQUEST_ANIMAL_SUCCESS';

export const REQUEST_ANIMAL_FAILED = 'REQUEST_ANIMAL_FAILED';

export const UPDATE_ANIMAL_QUERY = 'UPDATE_ANIMAL_QUERY';

export const capitalize = (s) => {
    // if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}