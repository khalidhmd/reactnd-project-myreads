import React from 'react'
import { getAll } from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: []

  }
  componentDidMount() {
    const books = JSON.parse(localStorage.getItem('books'))
    if (books.length > 0) this.setState({ books })
    console.log(books)
    if(!(localStorage.getItem('books'))) {
      getAll().then((books)=> {
        this.setState({books})
        localStorage.setItem('books', JSON.stringify(books))
      })
    }
  }

  changeShelf = (book, shelf) => {
    let newBooks = this.state.books
    for (let i=0; i<newBooks.length; i++) {
      if (newBooks[i].id === book.id) {
        newBooks[i].shelf = shelf
        break
      }
    }
    this.setState({books: newBooks})
    localStorage.setItem('books', JSON.stringify(newBooks))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component = {() => (
            <ListBooks
              books = {this.state.books}
              onChangeShelf = {this.changeShelf}
              />
          )}/>
        <Route path='/search'  component = {() => (
            <SearchBooks
              books = {this.state.books}
              onChangeShelf = {this.changeShelf}
              />
          )}/>
      </div>
    )
  }
}

export default BooksApp
