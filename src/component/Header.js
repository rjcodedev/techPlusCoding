import React from 'react'
import headLogo from '../assets/head-logo.png'
import cartLogo from '../assets/cart-logo.png'

const Header = () => {
    return (
        <div className='bg-[#b3ecff] flex justify-between py-1 px-2' >
            <div><img src={headLogo} alt='img'className='md:w-10 md:w-10 w-10 h-10'/></div>

            <div className='flex justify-between items-center'>
                <div className='pr-3 font-bold'>About</div>
                <div className='pr-3 font-bold'>Contact</div>
                <div className='pr-3 font-bold'><img src={cartLogo} alt='img'className='md:w-10 md:w-10 w-10 h-10'/></div>
            </div>
        </div>
    )
}

export default Header