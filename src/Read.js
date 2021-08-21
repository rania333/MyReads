import SingleBook from "./SingleBook";

const Read = (props) => {
    const {books, switchShelf} = props;
    const Read = books.filter(book => (
        book.shelf === 'read'
    ))
    return (  
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <SingleBook books={Read} switchShelf={switchShelf} />
                </ol>
            </div>
        </div>
    );
}

export default Read;