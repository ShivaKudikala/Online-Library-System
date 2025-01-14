import "./styles/books.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
function BookCard(props){

    return(
        <div className="Book-card">
            <img className="book-img" src={props.Book.coverImage}/>
            <h2>Title: {props.Book.title} </h2>
            <h4>Author: {props.Book.author}</h4>
            <p className="book-description">Description: {props.Book.description}</p>
            <Link to={`/bookDetails/${props.Book.id}`}><button className="viewDetails-btn">View Details <FontAwesomeIcon className="link-icon" icon={faRocket} /></button></Link>
        </div>
    )
}

export default BookCard;