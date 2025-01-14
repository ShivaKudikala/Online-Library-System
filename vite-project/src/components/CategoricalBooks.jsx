import { useParams } from "react-router"
import BookList from "./BookList";
import "./styles/Books.css"
function CategoricalBooks(props){
    const params = useParams();

    const filteredBooks = props.books.filter((book) => book.category.toLowerCase() == params.category.toLowerCase());
    return(
        <div className="filtered-books">
            <h1 className="category-name">{params.category} Books: </h1>
            <div className="book-list-div"><BookList books={filteredBooks} /></div>
        </div>
    )
}

export default CategoricalBooks;