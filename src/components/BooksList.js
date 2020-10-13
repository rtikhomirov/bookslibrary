import React from 'react';
import BookItem from "./BookItem";

const BooksList = ({books}) => {

    const booksList = books.map((book) => {
        return <BookItem
            key={book.id}
            info={book}
        />
    });

    return (
        <div className="container grid">
            {booksList}
        </div>
    );
};
export default BooksList;