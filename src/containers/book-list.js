import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => (
            <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
            </li>
        ))
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will ends up as
// props on the BookList container.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers.
    return bindActionCreators({ selectBook }, dispatch)
}

// Promote BookList from a component to a container
// - it need to know about this new dispacth method, selectBook
// Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
