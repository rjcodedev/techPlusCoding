import React from 'react'
import books from '../assets/books.png'
import BookList from './BookList'

const Home = () => {
    return (
        <div className=''>
            <div className='flex flex-row justify-around p-2 items-center bg-slate-300'>
                <div><img src={books} alt="boosks" className='w-[200px] h-[200px] md:w-[310px] md:h-[310px]' /></div>
                <div className='ml-2 lg:ml-0'><div className='font-bold text-xl md:text-3xl'>Get all the Books </div><div className='font-bold text-xl md:text-3xl'>You Need!</div></div>
            </div>
            <div className='bg-red-500 w-full text-center text-white font-medium' >Get 10% Off On Every Book Purchased</div>
            <BookList />
        </div>
    )
}

export default Home