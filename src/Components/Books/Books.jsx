import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const books=useLoaderData()
    return (
        <div className='w-[75%] mx-auto my-10'>
            <h1>This is Book Page</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                {
                    books.books.map(book => <Book key={book.isbn13} book={book} ></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;