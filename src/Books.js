import React, { Component} from 'react';

class Books extends Component {
    
    render(){
        const { book, books, updateBookShelf} = this.props;
        //console.log(books)
       // console.log(book.id)
        let book_shelf = "";
        if(book.shelf===undefined){
            let required =  books.filter((bk) => bk.id===book.id);
            book_shelf = required.length > 0 ? required[0].shelf : "none";
        }
        else{
            book_shelf = book.shelf;
        }
                
        let image = book.imageLinks === undefined ? "" : book.imageLinks.thumbnail;
        //console.log(image)
                   
        return(
            <div>
                <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})`}}></div>
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