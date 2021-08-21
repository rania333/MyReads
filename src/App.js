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
    async componentDidMount() {
        const books = await BooksAPI.getAll();
        this.setState({books});
    }
    switchShelf = (book, shelff) => {
      console.log("before", this.state.books) 
        let targetBook;
        const updatedState = this.state.books.map(bo => {
          if (bo.id === book.id) {
            bo.shelf = shelff;
            targetBook = bo;
          } else {
            book.shelf = shelff;
            targetBook = book
          }
        })
        this.setState({...this.state.books, updatedState});
        BooksAPI.update(targetBook, shelff);
        console.log("after", this.state.books) 

        
    }
    
  render() {
    return (
      <div className="app">
          <Route path="/search">
            <Search switchShelf={this.switchShelf} books={this.state.books}/>
          </Route>
          <Route exact path="/">
          <div className="list-books">
              <HeaderComponent/>
              <ListComponent switchShelf={this.switchShelf} books={this.state.books} 
              />
              <div className="open-search">
                  <Link to="/search" > Add a book </Link>
              </div>
            </div>
          </Route>
      </div>
    )
  }
}

export default BooksApp
