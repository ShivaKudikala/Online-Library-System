import "./styles/header.css";
import BookList from "./BookList";
import { Link } from "react-router-dom";

function Header(props) {

    const PopularBooks = props.books.filter((book) => book.rating >= 4.8);
    return(
        <div>
            <div className="heading-div">
                <h1>Welcome to my Online Bookstore!</h1>
                <h3 className="tagline">Dive into a universe of books, curated just for you</h3>
            </div>
            <div className="category-div">
                <h3>Explore books by Categories: </h3>
                <ul className="categories">
                    <Link className="link-ele" to={"/books/Fiction"}><li>Fiction</li></Link>
                    <Link className="link-ele" to={"/books/History"}><li>History</li></Link>
                    <Link className="link-ele" to={"/books/Sci-Fi"}><li>Sci-Fi</li></Link>
                    <Link className="link-ele" to={"/books/Classic"}><li>Classic</li></Link>
                    <Link className="link-ele" to={"/books/Fantasy"}><li>Fantasy</li></Link>
                    <Link className="link-ele" to={"/books/Science"}><li>Science</li></Link>
                    <Link className="link-ele" to={"/books/Business"}><li>Business</li></Link>
                </ul>
            </div>
            <div className="trendingbooks-div">
                <h3>Popular Books: </h3>
                <div className="book-list-div"><BookList books = {PopularBooks}/></div>
            </div>
            
        </div>
    )
}

export default Header;