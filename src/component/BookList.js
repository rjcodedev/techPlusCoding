import React from 'react'
import Book1 from '../assets/Books/Book1.png'
import Book2 from '../assets/Books/Book2.png'
import Book3 from '../assets/Books/Book3.png'

const BookList = () => {
    const Books = [{
        id: 1,
        img: Book1,
        name: 'Learning the HTML',
        subName: 'step by step Guide',
        price: 100,
        currency: 'Rs.',
        url: "https://rzp.io/l/LearnHTML"
    }, {
        id: 2,
        img: Book2,
        name: 'Put Books cover here',
        subName: 'step by step Guide',
        price: 200,
        currency: 'Rs.',
        url: "https://rzp.io/l/LearnHTML"
    }, {
        id: 3,
        img: Book3,
        name: 'How to Business',
        subName: 'step by step Guide',
        price: 300,
        currency: 'Rs.',
        url: "https://rzp.io/l/LearnHTML"
    }]

    const openUrl = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <div className='flex flex-wrap gap-x-5 gap-y-2 justify-center mx-auto'>
            {Books.map((item) =>
                <div key={item.id} className='w-[200px] h-[320px] bg-white shadow-black shadow-lg rounded-lg flex flex-col items-center m-2 pt-1' >
                    <div className='w-[150px] h-[203px] border-white border-2 rounded-lg overflow-hidden' >
                        <img src={item.img} alt={item.name} className='w-[150px] h-[200px] ' />
                    </div>
                    <div className='text-center text-sm font-medium'>{item.name}</div>
                    <div className='text-center text-[10px] font-medium'>{item.subName}</div>
                    <div className='text-sm text-center font-bold'>{item.currency} {item.price}</div>
                    <button onClick={() => openUrl(item.url)} target="_blank" className='hover:bg-green-500 mx-6 mt-2 text-sm font-semibold text-center border-2 border-green-600 bg-green-600 rounded-full py-1 px-2.5'>
                        BUY NOW</button>
                </div>
            )}
        </div>)
}

export default BookList