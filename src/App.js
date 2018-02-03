import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BooksApp from './pages/BooksApp';
import SearchBooks from './pages/SearchBooks';

class App extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {this.setState({books})})
  };

  moveBook = ( book, shelf ) => {
    BooksAPI.update(book, shelf)
      .then(response =>{
        book.shelf = shelf
        let updatedBooks = this.state.books.filter( item => item.id !== book.id )
        updatedBooks.push(book);
        this.setState(
          { books: updatedBooks }
        )
      })
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={({ history }) => (
          <BooksApp 
            books={ this.state.books }
            changeBook={ this.moveBook }
          />
        )}/>
        <Route exact path="/search" render={({ history }) => (
          <SearchBooks
            books={ this.state.books }
            changeBook={ this.moveBook }
          />
        )}/>
      </div>
    );
  };
};

export default App;
