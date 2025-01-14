import "./styles/navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <div className="navbar">
            <Link className="link-to" to={"/"}>Home</Link>
            <Link className="link-to" to={"/books"}>Browse Books</Link>
            <Link className="link-to" to={"/AddBook"}>Add Book</Link>
        </div>
    )
}

export default Navbar;