import React, { Component } from "react";

// Components
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    books: this.props.books
  };
  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ books: filteredBooks });
  };
  componentDidMount() {
    if (this.props.match.params.bookColor) {
      this.setState({
        books: this.state.books.filter(
          book => book.color === this.props.match.params.bookColor.toLowerCase()
        )
      });
    }
  }
  componentWillUnmount() {
    this.setState({
      books: this.props.books
    });
  }
  render() {
    return (
      <div>
        <SearchBar onChange={this.filterBooks} />
        <h3>Books</h3>
        <div className="row">
          <BookTable books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default BookList;
