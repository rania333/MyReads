const SingleBook = (props) => {
    const {books, switchShelf} = props;
    let currentBook = "none";
    return (
        books.map(d => (
            <li key={d.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${d.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) =>{
                        return switchShelf(d, e.target.value)}}
                        defaultValue={d.shelf ? d.shelf : currentBook}>
                            <option value="move" disabled>Move to...</option>
                            <option disabled />
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{d.title}</div>
                <div className="book-authors">{d.authors}</div>
            </div>
        </li>
        ))
        
    );
}
export default SingleBook;