import {createStore} from 'redux';
import { Books } from './books';

export const ConfigureStore = () => {
    const store = createStore(
        Books
    );
    return store;
};