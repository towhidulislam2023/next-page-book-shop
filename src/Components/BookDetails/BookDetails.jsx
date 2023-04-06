import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const [seemore ,setSeemore]=useState(false)
    const bookData = useLoaderData()
    const navigate=useNavigate()
    const handelGoback=()=>{
        navigate(-1)
    }
    console.log(bookData);
    const { authors, desc, image, language, publisher, rating, subtitle, title, url, year
    ,price } = bookData
    return (
        <div className='md:flex justify-center items-center border-2 mt-10 lg:w-[60%] h-full mx-12 md:mx-auto'>
            <div className='md:flex gap-6 items-center px-5 '>
                <div className='md:w-[50%] h-full mx-auto'>
                <img className='h-[500px] w-[550px]' src={image} alt="" />
                </div>
                <div className='my-10 md:w-[50%]'>
                    <div className="badge badge-warning gap-2 my-3 py-3 px-4 font-bold">
                        BRAND NEW
                    </div>
                    <div>
                        <h1 className="text-4xl mb-7">{title}</h1>
                        <p>Authors:{authors}</p>
                        <p>Publisher:{publisher}</p>
                        <p>Year:{year}</p>
                        <p>Rating:{rating}</p>
                    </div>
                    <p className="my-7">{desc.slice(0,300)}......</p>
                    {/* <div className=''>
                        {
                            seemore ? <p className="my-7">{desc.substring(0, 50)}... <span className='cursor-pointer' onClick={() => setSeemore(!seemore)}>Seemore</span></p> : <p className="my-7">{desc}<span className='cursor-pointer' onClick={() => setSeemore(!seemore)}>see less</span></p>
                        }
                    </div> */}
                    <a href={url} target='_blank'><button className="btn bg-indigo-700 hover:bg-indigo-600 border-none text-white font-thin">Buy Now</button></a>  <span className=' bg-transparent text-black hover:bg-transparent border-opacity-10 ml-4 hover:border-opacity-10' >price: {price}</span>
                    <p onClick={handelGoback}  className='mt-10 text-blue-800 underline -ml-14 cursor-pointer'>Go back</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;