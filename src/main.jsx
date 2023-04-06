import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import MainPage from './Components/MainPage.jsx/MainPage';
import Books from './Components/Books/Books';
import About from './Components/About/About';
import BookDetails from './Components/BookDetails/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path: "/",
        element:<MainPage></MainPage>,
      },
      {
        path: "/home",
        element:<MainPage></MainPage>,
      },
      {
        path: "/books",
        element:<Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: "/books/:id",
        element:<BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: "/about",
        element:<About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
