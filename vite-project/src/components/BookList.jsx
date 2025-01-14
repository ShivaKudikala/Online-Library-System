import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import "./styles/Books.css";

function BookList(props){
    return (
        <>
            {props.books.map((book) => <Link to={`/bookDetails/${book.id}`} className="books-link"> <div className="all-books"><BookCard key={book.id} Book={book}/></div> </Link> )}
        </>
    )
}

export default BookList;