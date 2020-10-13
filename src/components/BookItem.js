import React from 'react';
import {Link} from "react-router-dom";
import '../css/BookItem.css';

const BookItem = ({info}) => {

    const someImg = info.volumeInfo.imageLinks ?
        <div className='mx-auto'>
            <img src={info.volumeInfo.imageLinks.thumbnail} alt='#' className='thumbnailImg'/>
        </div> : null;

    return (
        <div className="box">
            <div className='card bookCard'>
                <Link to={`/book/${info.id}`}>
                    {someImg}
                    <div className="card-body">
                        <h6 className="card-title">{info.volumeInfo.title}</h6>
                        <small className="card-text">{info.volumeInfo.authors}</small>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default BookItem;