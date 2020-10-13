import React, {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import SearchComponent from "./SearchComponent";
import {connect} from 'react-redux';
import { addBooks } from '../redux/ActionCreators';
import SelectedBook from "./SelectedBook";

const mapStateToProps = state => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = dispatch => ({
    addBooks: (array) => dispatch(addBooks(array))
});

class MainComponent extends Component{
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={() => <SearchComponent addBooks={this.props.addBooks} loadedBooks={this.props.books}/>}/>
                    <Route path='/book/:bookId' component={({match}) => <SelectedBook bookInfo={this.props.books.find(book => book.id === match.params.bookId)}/>}/>
                </Switch>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));