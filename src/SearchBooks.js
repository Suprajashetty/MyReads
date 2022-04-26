import React, { Component } from 'react';
import Books from './Books';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBooks extends Component {

    state = {
        searchBooks: [],
        query: '',
    }

    updateQuery = (query) => {
        if (query) {
            BooksAPI.search(query.trim())
            .then((books)=> {
                this.setState(()=> ({
                    searchBooks: books,
                    query: query.trim()
                }))
            })
        }
        else {
            this.setState(()=> ({
                searchBooks: [],
                query: query.trim()
            }))
        }
    }

    render() {
        const {books, updateBookShelf } = this.props;
        //console.log(books)
        const { query, searchBooks } = this.state;
        //console.log(searchBooks)
        
        //console.log(newBook)
        const showingBooks = query === '' ? [] : searchBooks;
       // let book_shelf = books.shelf
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to = '/'>
                        <button className = "close-search">Back to home screen</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type = "text" 
                            placeholder = "Search by book title or author"
                            //value={query}
                            onChange = {(event)=> this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.length > 0 && showingBooks.filter(book => (
                            book.title 
                        )).map(book => (
                            <Books key={book.id}
                                book={book}
                                books={books}
                                updateBookShelf={updateBookShelf}
                            />
                        ))}

                    </ol>
                </div>
                
            </div>
        )
    }

}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  };

export default SearchBooks;