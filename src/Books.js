import React, { Component} from 'react';

class Books extends Component {
    
    render(){
        const { book, books, updateBookShelf} = this.props;
        //console.log(books)
        console.log(book)
        let book_shelf = book.shelf;
                   
        return(
            <div>
                <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book_shelf} onChange={(event)=>updateBookShelf(book, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
            </div>
                      
        )
        
    }
}
export default Books;