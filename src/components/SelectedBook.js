import React from 'react';
import {Link} from "react-router-dom";
import '../css/SelectedBook.css';

const SelectedBook = (props) => {

    const someImg = props.bookInfo.volumeInfo.imageLinks ?
        <div className='mx-auto imgContainer'>
            <span className="helper"/>
            <img src={props.bookInfo.volumeInfo.imageLinks.thumbnail} alt='#'/>
        </div> : null;

    return (
        <div className='container'>
            <div className='row'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Search</Link></li>
                    <li className='breadcrumb-item active'>Book</li>
                </ol>
            </div>
            <div className='card'>
                <div className="row">
                    <div className="col-4 mx-auto">{someImg}</div>
                    <div className="col-8">
                        <div className="card-body">
                            <h6 className="card-title">{props.bookInfo.volumeInfo.title}</h6>
                            <p className="card-text">{props.bookInfo.volumeInfo.description}</p>
                            <cite>Publisher: {props.bookInfo.volumeInfo.publisher}</cite>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SelectedBook;