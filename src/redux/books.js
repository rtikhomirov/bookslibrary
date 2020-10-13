import * as ActionTypes from './ActionTypes';

export const Books = (state = {books:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BOOKS:
            return {...state, books: action.payload.books};

        default:
            return state;
    }
};