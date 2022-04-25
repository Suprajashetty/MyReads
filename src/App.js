import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books'
import { Route, Routes } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    //showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
       this.setState(() => ({
        books
      }))
    })
  }

  updateBookShelf = (book, shelf) => {
    (book.shelf !== shelf) && 
      BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(currentstate => ({
        books: currentstate.books.filter((b) => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    const {books} = this.state
    //const book=books.map(b => b.imageLinks)
    //console.log(books.shelf)
    return (
      <div className="app">
        <Routes>
          <Route exact path = '/' element = {
           <ListBooks 
                books={books}
                updateBookShelf={this.updateBookShelf}
            />
          } 
          />
          <Route path = '/search' element = {
            <SearchBooks
              books={books}
              updateBookShelf={this.updateBookShelf}
            />
          } 
          />
        </Routes>
      </div>
    )
  }
}

export default BooksApp;
