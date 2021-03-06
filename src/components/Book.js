import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, changeBook }) => (
  <li key={props.book.id}>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.smallThumbnail })` }} />
        <div className="book-shelf-changer">
          <select value={ book.shelf } onChange={(e) => props.changeBook(book, e.target.value)}>
            <option value="none">Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{ book.title }</div>
      { book.authors && book.authors.map((author, index) => (
          <div className="book-authors" key={index}>{author}</div>
      ))}
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeBook: PropTypes.func.isRequired
};

export default Book;
