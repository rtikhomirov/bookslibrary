import React from 'react';
import SearchBar from "./SearchBar";
import BooksList from "./BooksList";
import axios from "axios";

const SearchComponent = (props) => {

    const onSearchSubmit = async (term) => {
        const {data} = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: term
            }
        });
        props.addBooks(data.items);
    };

    return (
        <div>
            <SearchBar onSubmit={(term) => onSearchSubmit(term)}/>
            <BooksList books={props.loadedBooks}/>
        </div>
    );
};

export default SearchComponent;