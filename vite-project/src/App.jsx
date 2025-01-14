
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails.jsx';
import CategoricalBooks from './components/CategoricalBooks';
import AddBook from './components/AddBook';
import { addBook } from './assets/BooksSlice.js';
import ErrorElement from './components/ErrorElement.jsx';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  function handleaddBook(newBook){
      dispatch(addBook(newBook));
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Header books={books} />}
          errorElement= {<ErrorElement />}
        />
        <Route
          path="/books"
          element={<BrowseBooks books={books} />}
        />
        <Route
          path="/books/:category"
          element={<CategoricalBooks books={books} />}
        />
        <Route
          path="/bookDetails/:id"
          element={<BookDetails books={books}/>}
        />
        <Route
          path="/AddBook"
          element={<AddBook books={books} handleaddBook={handleaddBook}/>}
        />
      </Routes>
    </>
  )
}

export default App;
