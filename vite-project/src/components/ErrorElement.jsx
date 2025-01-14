import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import "./styles/error.css";

function ErrorElement(){
    const error = useRouteError();
    return(
        <div className="error-div">
            <h1 className="error-code">{error.status}</h1>
            <h2>{error.data}</h2>
            <p className="err-text">But don't worry, you can find plenty of other things on homepage.</p>
            <Link to={"/"}><button className="home-btn">Back to Homepage</button></Link>
        </div>
    )
}

export default ErrorElement;