import React from 'react'
import './App.css';
import { Route, Link} from 'react-router-dom'
import HeaderComponent from './header';
import ListComponent from './List';
import Search from './Search';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
state = {
        books: [],
    } 
    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({books}))
        })
    }
    switchShelf = (book, shelff) => {
        let targetBook;
        if (!this.state.books.includes(book)) {
          this.state.books.push(book);
        }
        // if (this.state.books.includes(book)) {
        //   return;
        // }
        const updatedState = this.state.books.forEach(b => {
            if (b === book) {
                b.shelf = shelff;
                targetBook = b;
            }
        })
        this.setState({...this.state, updatedState});
        BooksAPI.update(targetBook, shelff);
    }
    
  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
            <Search switchShelf={this.switchShelf} books={this.state.books}
            />
          )}/>
          <Route exact path="/" render={() => (
            <div className="list-books">
              <HeaderComponent/>
              <ListComponent switchShelf={this.switchShelf} books={this.state.books} 
              />
              <div className="open-search">
                  <Link to="/search" > Add a book </Link>
              </div>
            </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
