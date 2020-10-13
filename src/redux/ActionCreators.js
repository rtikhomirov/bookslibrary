import * as ActionTypes from './ActionTypes';

export const addBooks = (booksArray) => ({
    type: ActionTypes.ADD_BOOKS,
    payload: {
        books: booksArray
    }
});