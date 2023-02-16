import React from 'react'
import instagram from "../assets/socialmedia/instagram.png";
import gmail from "../assets/socialmedia/gmail.png";
import telegram from '../assets/socialmedia/telegram.png'
const SocialMedia = () => {
    const SocialIcons = [
        {
            id: 1,
            img: instagram,
            url: "https://www.instagram.com/learn_web_development1/?igshid=ZmZhODViOGI%3D",
            name: 'insta'
        },
        {
            id: 2,
            img: gmail,
            url: "mailto:contactlearnwebdevelopment@gmail.com?subject=ask%20query",
            name: 'gmail'

        },
        {
            id: 3,
            img: telegram,
            url: "https://telegram.me/codehangout",
            name: 'telegram'

        }
    ];

    const openUrl = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return (
        <div className='py-2'>
            <h2 className='text-center font-bold text-xl underline'>Social media</h2>
            <div className='flex justify-center gap-x-2'>
                {SocialIcons.map((item) => (
                    <div key={item.id} className='cursor-pointer' onClick={() => openUrl(item.url)}><img className='w-10 h-10' alt={item.name} src={item.img} /></div>
                ))}
            </div>
        </div>
    )
}

export default SocialMedia