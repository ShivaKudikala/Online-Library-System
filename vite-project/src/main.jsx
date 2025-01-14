import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header.jsx';
import BrowseBooks from './components/BrowseBooks.jsx';
import BookDetails from './components/BookDetails.jsx';
import CategoricalBooks from './components/CategoricalBooks.jsx';
import AddBook from './components/AddBook.jsx';
import { Provider } from 'react-redux';
import store from './assets/Store.js';
import ErrorElement from './components/ErrorElement.jsx';




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/books",
        element: <BrowseBooks />,
      },
      {
        path: "/books/:category",
        element: <CategoricalBooks />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
      },
      {
        path: "/AddBook",
        element: <AddBook />,
      },
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={appRouter}></RouterProvider>
  </Provider>
  </StrictMode>,
)
