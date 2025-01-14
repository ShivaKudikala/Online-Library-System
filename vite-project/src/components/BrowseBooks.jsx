import { useState } from "react";
import BookList from "./BookList";
import "./styles/Books.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function BrowseBooks(props){
    
    const [input, setinput] = useState("");
    const [books, setbooks] = useState([]);

    function handleSearch(){
        if(input.trim()){
            setbooks(props.books.filter((book) => book.title.toLowerCase().includes(input.toLowerCase())));
        }
    }

    const FictionBooks = props.books.filter((book) => book.category == "Fiction");
    const ScienceBooks = props.books.filter((book) => book.category == "Science");
    const FantasyBooks = props.books.filter((book) => book.category == "Fantasy");
    const SciFIBooks = props.books.filter((book) => book.category == "Sci-Fi");
    const HistoryBooks = props.books.filter((book) => book.category == "History");
    const BusinessBooks = props.books.filter((book) => book.category == "Business");
    const ClassicBooks = props.books.filter((book) => book.category == "Classic");

    return(
        <>
            <div className="search-books">
                <input type="text" placeholder="Search Book..." onChange={(e) => setinput(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
                {books && Object.keys(books).length > 0 && <div className="book-list-div"><BookList books={books} /></div>}
            </div>

            <div className="category-books">
                <Link className="link-tag" to={"/books/Fiction"}>Fiction Books  <FontAwesomeIcon className="link-icon" icon={faGreaterThan} /></Link>
                <div className="book-list-div"><BookList books={FictionBooks}/></div>
            </div>
            <div className="category-books">
                <Link className="link-tag" to={"/books/Science"}>Science Books: <FontAwesomeIcon className="link-icon" icon={faGreaterThan} /></Link>
                <div className="book-list-div"><BookList books={ScienceBooks}/></div>
            </div>
            <div className="category-books">
                <Link className="link-tag" to={"/books/Fantasy"}>Fantasy Books: <FontAwesomeIcon className="link-icon" icon={faGreaterThan} /></Link>
                <div className="book-list-div"><BookList books={FantasyBooks}/></div>
            </div>
            <div className="category-books">
                <Link className="link-tag" to={"/books/Sci-Fi"}>Sci-Fi Books: <FontAwesomeIcon className="link-icon" icon={faGreaterThan} /></Link>
                <div className="book-list-div"><BookList books={SciFIBooks}/></div>
            </div>
            <div className="category-books">
                <Link className="link-tag" to={"/books/History"}>History Books: <FontAwesomeIcon className="link-icon" icon={faGreaterThan} /></Link>
                <div className="book-list-div"><BookList books={HistoryBooks}/></div>
            </div>
            <div className="category-books">
                <Link className="link-tag" to={"/books/Classic"}>Classic Books: <FontAwesomeIcon className="link-icon" icon={faGreaterThan} /></Link>
                <div className="book-list-div"><BookList books={ClassicBooks}/></div>
            </div>
            <div className="category-books">
                <Link className="link-tag" to={"/books/Business"}>Business Books: <FontAwesomeIcon className="link-icon" icon={faGreaterThan} /></Link>
                <div className="book-list-div"><BookList books={BusinessBooks}/></div>
            </div>
            
        </>
    )
}

export default BrowseBooks;