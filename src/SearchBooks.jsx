import React from "react"
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
    this.setState({query})
    let showingBooks = []
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          showingBooks = response.map(b => {
            const index = this.props.books.findIndex(c => c.id === b.id)
            b.shelf = 'none'
            if( index >= 0 ) {
              return this.props.books[index]
            } else {
              return b
            }
          })
        }
        this.setState({showingBooks})
      })
    }
    else {
      this.setState({showingBooks})
    }
  }

    render() {

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to='/'
                className="close-search"
              >Close</Link>
              <div className="search-books-input-wrapper">

                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                  />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.showingBooks.map(book => (
                  <li key={book.id}>
                    <Book
                      book = {book}
                      onChangeShelf = {this.props.onChangeShelf}
                      /></li>))}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks
