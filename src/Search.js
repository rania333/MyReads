import React, {Component} from "react";
import * as BooksAPI from'./BooksAPI';
import { Link } from "react-router-dom";
import SingleBook from "./SingleBook";
class Search extends Component {
    state = { 
        books: [],
        query: ''
    }
    updateQuery(q) {
        this.setState(() => ({
            query: q.trim()
        }))
    }
    clearQuery = () => {
        this.updateQuery('')
    }
    componentDidUpdate() {
        if (this.state.query.trim() !== "") {
        BooksAPI.search(this.state.query)
        .then(books => {
            let allBooks=[];
            books.forEach(book => {
                if (book.imageLinks && book.authors) {
                    allBooks.push(book)
                }
            });
            this.setState(() => ({books: allBooks}))
        })
        .catch(err => {
            this.updateQuery("");
        })
        }
    }
    render() {
        const switchShelf = this.props.switchShelf;
        return (  
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search"> Close </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                        onChange={(e) => (this.updateQuery(e.target.value))}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { (this.state.query.trim() !== "") && (this.props.books.length!== 0) &&
                        <SingleBook books={this.state.books} switchShelf={switchShelf} />
                        }
                    </ol>
                </div>
            </div>
        );
    }
}
export default Search;