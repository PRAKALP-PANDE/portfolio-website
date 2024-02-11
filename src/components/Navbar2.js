import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png"

const Navbar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');

            sections.forEach((section) => {
                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                    });
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`p-2 flex flex-col md:w-64 lg:w-64 fixed h-screen z-50 ${isMenuOpen ? 'bg-[#f1d29c] w-64' : ''}`}>
            <div className='lg:hidden md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={handleMenuToggle} className="cursor-pointer w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <a href="/#" className={`md:flex items-center pl-3 mb-14 mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <img src={logo} alt='logo' className={`w-full h-full object-contain ${activeSection === 'architecture' || activeSection === 'graphic' || activeSection === 'interior' || activeSection === 'contact' ? 'logo' : 'logo-hide'}`}
                />
                {/* <h1 className="text-2xl font-bold">PKSD</h1> */}
            </a>
            <nav className={`md:flex md:flex-col md:p-2 md:w-64 navbar block h-full px-3 py-4 overflow-y-auto space-y-2 font-medium  bg-[#f1d29c] ${isMenuOpen ? 'block' : 'hidden'}`}>
                <a href="/#home" className={`flex items-center p-2 text-gray-500 my-4 rounded-lg hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'home' ? 'active' : ''}`}>
                    Home
                </a>
                <a
                    href="/#architecture"
                    className={` flex items-center p-2 text-gray-500 my-4 rounded-lg hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'architecture' ? 'active' : ''}`}>
                    Architecture
                </a>
                <a
                    href="/#interior"
                    className={` flex items-center p-2 text-gray-500 my-4 rounded-lg hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'interior' ? 'active' : ''}`}>
                    Interior
                </a>
                <a href="/#graphic" className={` flex items-center p-2 text-gray-500 my-4 rounded-lg hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'graphic' ? 'active' : ''}`}>
                    Graphic
                </a>
                <a
                    href="/#contact"
                    className={` flex items-center p-2 text-gray-500 my-4 rounded-lg hover:text-[#622c00] hover:border-b-8 border-[#622c00] group ${activeSection === 'contact' ? 'active' : ''}`}>
                    Contact
                </a>
                <div className="h-5/6 w-10 absolute inset-x-44 -inset-y-2 flex items-center justify-center">
                    <div className="h-full w-4 rounded-b-lg bg-[#622c00] pointer-events-none"></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar2
