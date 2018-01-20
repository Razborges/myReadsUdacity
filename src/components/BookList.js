import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookList = (props) => {

  const typesBooks = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead',       title: 'Want to Read' },
    { type: 'read',             title: 'Read'}
  ]

  return (
    <div className="list-books-content">
      { typesBooks.map((shelf, index) =>  {
        const booksFiltered = props.books.filter( book => book.shelf === shelf.type)
        
        return  (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{ shelf.title }</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {booksFiltered.map((book) => (
                  <Book
                    book={ book }
                    key={ book.id }
                    changeBook={ props.changeBook }
                  />
                ))}
              </ol>
            </div>
          </div>
        )
      })}
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  changeBook: PropTypes.func.isRequired
}

export default BookList