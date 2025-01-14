import { Link, useParams } from "react-router-dom";
import "./styles/Books.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';

function BookDetails(props){
    const params = useParams();
    const book = props.books.find((book) => book.id == params.id);
    console.log(book);
    return(
        <>  
            <Link to={"/books"}><button className="back-btn"><FontAwesomeIcon icon={faLessThan} />  Back to browseBooks page</button></Link>
            <div className="full-book">
                <div className="book-primary">
                    <h1>{book.title}</h1>
                    <img className="fullbook-img" src={book.coverImage}/>
                    <h3>Author: {book.author}</h3>
                </div>
                <div className="book-secondary">
                    <div className="description"><h2>{book.description}</h2></div>
                    <div className="cat-year">
                        <p className="cat-name">{book.category}</p>
                        <div className="publish-year">
                            <p>Published Year</p>
                            <p>{book.publishedYear}</p>
                        </div>
                        
                    </div>
                    <div className="rating"><p>Rating: {book.rating}</p></div>
                </div>
             </div>
        </>
       
    )
}

export default BookDetails;