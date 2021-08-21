import SingleBook from "./SingleBook";

const WillRead = (props) => {
    const {books, switchShelf} = props;
    const WillRead = books.filter(book => (
        book.shelf === 'wantToRead'
    ))
    return (  
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <SingleBook books={WillRead} switchShelf={switchShelf} />
                </ol>
            </div>
        </div>
    );
}
export default WillRead;