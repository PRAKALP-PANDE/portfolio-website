import React, { useState } from 'react'
import sheetdb from 'sheetdb-node';
// import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        // Extract form data
        const formData = `Name: ${name}\nLast Name: ${lname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        const Contactdata = [{
            Message : formData,
        }] 


        const config = {
            address: 'https://sheetdb.io/api/v1/zcwbzp6kdjw8d',
        };

        // Create new client
        const client = sheetdb(config);

        // Send data to sheetdb
        client.create(Contactdata)
            .then((response) => {
                console.log('Data stored in sheetdb:', response);
            })
            .catch((error) => {
                console.error('Error storing data in sheetdb:', error);
            });

    };
    // Send data to server using axios
    // axios.post('https://sheetdb.io/api/v1/zcwbzp6kdjw8d', formData)
    //     .then((response) => {
    //         console.log('Data submitted successfully:', response.data);
    //         // Clear form fields after successful submission
    //         setName('');
    //         setLname('');
    //         setEmail('');
    //         setPhone('');
    //         setMessage('');
    //     })
    //     .catch((error) => {
    //         console.error('Error submitting form data:', error);
    //     });

    // // Display success message using toast
    // toast.success('Form submitted successfully', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    // });



    return (
        <div className="text-black body-font relative">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="container px-5 py-8 mx-auto">
                <div className="h-1 bg-gray-200 rounded overflow-hidden mb-6">
                    <div className="w-24 h-full bg-[#622c00]"></div>
                </div>
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#622c00]">Contact Us</h1>
                    {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-[#622c00]">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-black">First Name*</label>
                                    <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setName(e.target.value)} value={name} required />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-black">Last Name*</label>
                                    <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setLname(e.target.value)} value={lname} required />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-black">Company Email*</label>
                                    <input type="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setEmail(e.target.value)} value={email} required />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-black">Phone Number*</label>
                                    <input type="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-black">Message*</label>
                                    <textarea className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-[#622c00] bg-[#f1d29c] border-[#622c00] border-2 py-2 px-8 focus:outline-none hover:bg-[#622c00] hover:text-white rounded text-lg" type="submit" >Button</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <span href="/" className="text-[#622c00]">parthkumbhar269@gmail.com</span>
                                <p className="leading-normal my-5">Shop no.: 134, Shine Square
                                    <br />Near Imperil Hospital, Chikhali, Pune, Vitthal Nagar, Maharashtra 411062
                                </p>
                                <span className="inline-flex">
                                    {/* <a href="/" className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a href="/" className="ml-4 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a> */}
                                    <a href="https://www.instagram.com/pk_design.studio" className="ml-4 text-[#622c00]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    {/* <a href="/" className="ml-4 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a> */}
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
