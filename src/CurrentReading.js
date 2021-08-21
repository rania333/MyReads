import SingleBook from "./SingleBook";

const CurrentReading = (props) => {
    const {books, switchShelf} = props;
    const current = books.filter(book => (
        book.shelf === "currentlyReading"
    ))
    return (  
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <SingleBook books ={current} switchShelf={switchShelf}/>
                </ol>
            </div>
        </div>
    );
}
export default CurrentReading;