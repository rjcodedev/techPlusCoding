import React from 'react'
import { Link } from 'react-router-dom'
import headLogo from '../assets/head-logo.png'
// import cartLogo from '../assets/cart-logo.png'

const Header = () => {
    return (
        <div className='bg-[#b3ecff] flex justify-between py-1 px-2' >
            <Link to='/'><img src={headLogo} alt='img' className='md:w-10 md:h-10 w-10 h-10' /></Link>

            <div className='flex justify-between items-center'>
                {/* <Link to='about' className='pr-3 font-bold'>About</Link> */}
                <Link to='contact' className='pr-3 font-bold'>Contact</Link>
                {/* <div className='pr-3 font-bold'><img src={cartLogo} alt='img'className='md:w-10 md:w-10 w-10 h-10'/></div> */}
            </div>
        </div>
    )
}
export default Header