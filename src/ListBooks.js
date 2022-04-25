import React, { Component } from 'react'
import Books from './Books'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends Component {
    render() {
        const {books, updateBookShelf} = this.props
        console.log(books)
        return (
            <div className="list-books">
                <Link to="/search"><h3>Click here to search books</h3></Link>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter(book => book.shelf==="currentlyReading").map(book => (
                                        <Books key = {book.id} book={book} updateBookShelf={updateBookShelf} />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter(book=>book.shelf==="wantToRead").map(book=> (
                                        <Books key={book.id} book={book} updateBookShelf={updateBookShelf}/>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter(book=>book.shelf==="read").map(book=> (
                                        <Books key={book.id} book={book} updateBookShelf={updateBookShelf}/>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        )
    }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  };
  
export default ListBooks