import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookList from '../components/BookList'

const BooksApp = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>

    <BookList books={ props.books } changeBook={ props.changeBook } />

    <div className="open-search">
      <Link to="/search">Search</Link>
    </div>
  </div>
)

BooksApp.propTypes = {
  books: PropTypes.array.isRequired,
  changeBook: PropTypes.func.isRequired
}


export default BooksApp
