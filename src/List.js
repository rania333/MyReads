import React from "react";
import CurrentReading from "./CurrentReading";
import Read from "./Read";
import WillRead from "./WillRead";
function ListComponent(props) {
    const {switchShelf, books} = props
        return (  
            <div className="list-books-content">
                <CurrentReading books={books} switchShelf={switchShelf}/>
                <WillRead books={books} switchShelf={switchShelf}/>
                <Read books={books} switchShelf={switchShelf}/>
        </div>
        );
}
export default ListComponent;