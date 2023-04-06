import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const { image, isbn13, price, subtitle, title }=book
    return (
        <Link to={`/books/${isbn13}`}><div className='relative transition transform hover:-translate-y-1 duration-300 cursor-pointer'>
            <img src={image} alt="" />
            <div className='overflow-hiddenr absolute top-0 left-0 bg-black inset-0 opacity-0 hover:opacity-90 duration-300 rounded-lg  transition-opacity text-white px-6 py-5 flex flex-col'>
                <h1 className='text-xl'>{title}</h1>
                <p className='my-10 flex-grow'>{subtitle.substring(0, 45)}...</p>
                <p className=''>Price: {price}</p>
            </div>

        </div></Link> 
    );
};

export default Book;