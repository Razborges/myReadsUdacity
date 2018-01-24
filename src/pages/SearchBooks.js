import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import DebounceInput from 'react-debounce-input'
import Book from '../components/Book'

class SearchBooks extends React.Component {
  state = {
    search: '',
    resultBooks: [],
    msg: 'You must enter 3 or more characters to search.'
  }

  handleSearch = (e) => {
    const query = e.target.value
    if (query) {
      this.setState({ search: query })
      this._searchBooks(query)
    } else {
      this.setState({ resultBooks: [], msg: 'You must enter 3 or more characters to search.' })
    }
  }

  _searchBooks = (query) => {
    BooksAPI.search(query, 20)
      .then( resultBooks => {
        if(resultBooks.error) {
          this.setState({ resultBooks: [], msg: 'No results found! You can do a new search.' })
        } else {
          this.props.books.forEach(book => {
            resultBooks.forEach(result => {
              if(book.id === result.id){
                result.shelf = book.shelf
              }
            })
          })
          this.setState({ resultBooks: resultBooks, msg: `Found ${resultBooks.length} books` })
        }
      })
  }

  render() {
    const { resultBooks, msg } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"  to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={3}
              debounceTimeout={200}
              element="input"
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div>
            <div>
              <h3>{ msg }</h3>
            </div>
            { resultBooks.length > 0 && (
            <ol className="books-grid">
              {resultBooks.map((book) => (
                <Book
                  book={ book }
                  key={ book.id }
                  changeBook={ this.props.changeBook }
                />
              ))}
            </ol>
            )}
          </div>
        </div>
      </div>
    )
  }

  static proptypes = {
    books: PropTypes.array.isRequired,
    changeBook: PropTypes.func.isRequired
  }
}

export default SearchBooks
