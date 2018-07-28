import React from "react";
import './App.css';
import CurrentlyReadingShelf from './CurrentlyReadingShelf'
import { Link } from 'react-router-dom'
import WantToReadShelf from './WantToReadShelf'
import ReadShelf from './ReadShelf'

class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <CurrentlyReadingShelf
              onChangeShelf = {this.props.onChangeShelf}
              books = {this.props.books.filter((book) => (
                book.shelf === 'currentlyReading'
              ))
              }/>
            <WantToReadShelf
              onChangeShelf = {this.props.onChangeShelf}
              books = {this.props.books.filter((book) => (
                book.shelf === 'wantToRead'
              ))
              }/>
            <ReadShelf
              onChangeShelf = {this.props.onChangeShelf}
              books = {this.props.books.filter((book) => (
                book.shelf === 'read'
              ))
              }/>
        </div>


        <div className="open-search">
          <Link
            to='/search'
            >Add a book</Link>
        </div>
      </div>
    );
  }
}


export default ListBooks
