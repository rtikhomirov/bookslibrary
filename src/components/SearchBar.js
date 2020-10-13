import React, {useState, useEffect, useRef} from 'react';
import '../css/SearchBar.css';
import axios from 'axios';

const SearchBar = ({onSubmit}) => {

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [autocompleteData, setAutocompleteData] = useState([]);
    const [postData, setPostData] = useState(false);
    const listRef = useRef();

    useEffect( () => {
        const timerID = setTimeout(() => {
            setDebouncedTerm(term);
            setPostData(false);
        }, 500);
        return () => {
            clearTimeout(timerID);
        }
    }, [term]);

    useEffect( () => {
        const getAutocompleteData = async () => {
            const {data} = await axios.get('https://suggestqueries.google.com/complete/search', {
                params: {
                    client: 'chrome',
                    ds: 'bo',
                    dataType: 'jsonp',
                    q: debouncedTerm
                },
            });
            if(!postData) {
                setAutocompleteData(data[1]);
            }
        };
        if(debouncedTerm) {
            getAutocompleteData();
        }
    }, [debouncedTerm]);

    useEffect(() => {
        const onBodyClick = (event) => {
            if(!listRef.current.contains(event.target)) {
                /*
                * if click is done outside of list component,
                * we need to close it
                * */
                setAutocompleteData([]);
            }
        };
        window.addEventListener('click', onBodyClick);
        return() => {
            window.removeEventListener('click', onBodyClick);
        }
    }, []);

    const onAutocompleteDataItemClick = (e) => {
        setPostData(true);
        setAutocompleteData([]);
        setTerm(e.target.text);
        onSubmit(e.target.text);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setPostData(true);
        setAutocompleteData([]);
        onSubmit(term);
    };

    const autocompleteList = autocompleteData.map((item, index) => {
        return <a
                    className="list-group-item list-group-item-action"
                    href="/#"
                    key={index}
                    onClick={onAutocompleteDataItemClick}
                >{item}</a>
    });

    return (
        <div className="container">
            <form onSubmit={onFormSubmit} method="post">
                <label htmlFor="searchInput">Type some book you want to find and press "Search" button</label>
                <div className="row">
                    <div className="col-11">
                        <input
                            id="searchInput"
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                        />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-dark" type="submit">Search</button>
                    </div>
                </div>
                <div ref={listRef} className="row">
                    <div className="col-11">
                        <div className='list-group mt-0 autocompleteItems'>
                            {autocompleteList}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;