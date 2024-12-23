import React, { useState } from 'react';
import emailjs from 'emailjs-com';


function ContactForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState(''); // For success or error message
    const [isSuccess, setIsSuccess] = useState(false); // To differentiate between success and error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_9mw46cb', 'template_hqtk9x3', formData, 'n6X9j08c9ku0Jwyas')
            .then((result) => {
                console.log('Email sent successfully!', result.text);
                setIsSuccess(true); // Set success flag
                setStatusMessage('Your message has been sent successfully!');
                setFormData({ firstname: '', lastname: '', email: '', message: '' }); // Reset form
            })
            .catch((error) => {
                console.error('Failed to send email.', error.text);
                setIsSuccess(false); // Set error flag
                setStatusMessage('Failed to send your message. Please try again.');
            });
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstname" className="block text-lg font-semibold text-gray-700">First Name</label>
                        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500" required />
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block text-lg font-semibold text-gray-700">Last Name</label>
                        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500" required />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email ID</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500" required />
                </div>

                <div>
                    <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500" required></textarea>
                </div>

                <button type="submit" className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 text-white font-semibold rounded-md transition duration-300 ease-in-out">
                    Send Message
                </button>
            </form>

            {statusMessage && (
                <div className={`mt-6 p-4 text-center rounded-md ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {statusMessage}
                </div>
            )}
        </div>
    );
}

export default ContactForm;
