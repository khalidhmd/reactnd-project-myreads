import React from 'react'

class Book extends React.Component {
  render() {
    let authors
    if (this.props.authors) {
      authors = this.props.authors.splice(0)
    } else {
      authors = []
    }
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${this.props.book.imageLinks ? this.props.book.imageLinks.smallThumbnail : null})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={this.props.book.shelf}
              onChange={(e) => this.props.onChangeShelf(this.props.book, e.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{authors.map((author, index) => (
            <p key={index}>{author}</p>
          ))}</div>
      </div>

    )
  }
}

export default Book
