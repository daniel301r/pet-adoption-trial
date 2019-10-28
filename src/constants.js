export const REQUEST_ANIMALS_PENDING = 'REQUEST_ANIMALS_PENDING';

export const REQUEST_ANIMALS_SUCCESS = 'REQUEST_ANIMALS_SUCCESS';

export const REQUEST_ANIMALS_FAILED = 'REQUEST_ANIMALS_FAILED';

export const REQUEST_ANIMAL_PENDING = 'REQUEST_ANIMAL_PENDING';

export const REQUEST_ANIMAL_SUCCESS = 'REQUEST_ANIMAL_SUCCESS';

export const REQUEST_ANIMAL_FAILED = 'REQUEST_ANIMAL_FAILED';

export const UPDATE_ANIMAL_QUERY = 'UPDATE_ANIMAL_QUERY';

export const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const capitaliseWords = (phrase) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}