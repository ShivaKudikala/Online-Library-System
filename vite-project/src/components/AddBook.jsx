import { useState } from "react";
import "./styles/Books.css";
import { useNavigate } from 'react-router-dom';


function AddBook(props){

    const [newBook, setNewBook] = useState({
        id: "",
        title: "",
        author: "",
        category: "",
        description: "",
        publishedYear: 0,
        coverImage: "",
        rating: 0
    });

    const [errors, setErrors] = useState({});
    function validateForm() {
        const newErrors = {};
        if(!newBook.category || (newBook.category !== "Classic" && newBook.category !== "Fiction" && newBook.category !== "Sci-Fi" && newBook.category !== "History" && newBook.category !== "Business" && newBook.category !== "Fantasy" && newBook.category !== "Science")){
            newErrors.category = "Enter a valid Category";
        }
        if (!newBook.publishedYear || isNaN(newBook.publishedYear) || newBook.publishedYear <= 0 || newBook.publishedYear > 2025) {
            newErrors.publishedYear = "Enter a valid published year";
        }
        if (!newBook.rating || isNaN(newBook.rating) || newBook.rating <= 0 || newBook.rating > 5) {
            newErrors.rating = "Rating must be between 1 and 5";
        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        let imageLink = "";


        if(validateForm()){
            imageLink = `https://dummyimage.com/150x220/000/fff&text=${newBook.title.replace(/ /g, "+")}`;
            newBook.coverImage = imageLink;
            props.handleaddBook(newBook);
            setNewBook({ id: "", title: "", author: "", description: "", coverImage: "", publishedYear:0,rating:0 });
            navigate("/books");
        } else {
            alert('Please fill all the details required.');
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit} className="form-div">
                <div className="image-div"><img src="/Icon.png"/></div>
                
                <div className="form-1">
                    <input type="text" placeholder="Title" name="title" required onChange={(e) => setNewBook({ ...newBook, [e.target.name]: e.target.value })}/>
                    <input type="text" placeholder="Author" name="author" required onChange={(e) => setNewBook({ ...newBook, [e.target.name]: e.target.value })}/>
                    <input type="text" placeholder="Category" name="category" required onChange={(e) => setNewBook({ ...newBook, [e.target.name]: e.target.value })}/>
                    {errors.category && <p className="error">{errors.category}, Eg: Fiction, Science, Sci-Fi, History, Business, Fantasy, Classic</p>}
                </div>
                <div className="form-2">
                    <input type="text" placeholder="Description" name="description" required onChange={(e) => setNewBook({ ...newBook, [e.target.name]: e.target.value })}/>
                </div>
                <div className="form-3">
                    <input type="number" placeholder="Published year" name="publishedYear" required onChange={(e) => setNewBook({ ...newBook, [e.target.name]: e.target.value })}/>
                    {errors.publishedYear && <p className="error">{errors.publishedYear}</p>}
                    <input type="number" placeholder="Rating" name="rating" required onChange={(e) => setNewBook({ ...newBook, [e.target.name]: e.target.value })}/>
                    {errors.rating && <p className="error">{errors.rating}</p>}
                </div>
                <button className="add-btn" type="submit">Add Book</button>
            </form>
        </>
    )
}

export default AddBook;