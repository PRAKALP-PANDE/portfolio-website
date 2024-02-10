import React, { useEffect, useState } from 'react';
import './style.css';
import HL from "../assets/home-left.png"
import HR from "../assets/home-right.png"
import Architecture from './Architecture'
import Interior from './Interior'
import Graphic from './Graphic'
import Contact from './Contact'
import SliderImg from './SliderImg';

const Home2 = () => {

    const [activeSection, setActiveSection] = useState('');

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = document.querySelectorAll('section');

    //         sections.forEach((section) => {
    //             const top = window.scrollY;
    //             const offset = section.offsetTop - 150;
    //             const height = section.offsetHeight;
    //             const id = section.getAttribute('id');

    //             if (top >= offset && top < offset + height) {
    //                 section.classList.remove('fly-in-element');
    //                 // section.classList.add('fly-out-element');
    //                 setActiveSection(id);
    //             }
    //         });
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    section.classList.remove('active');
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
        <div className="flex flex-col justify-center items-center">
            <section className={`home container px-5 ${activeSection === 'home' ? 'fly-in-element' : ''}`} id="home">
                <div className="text-gray-600 body-font">
                    <div className="py-2 mx-auto flex flex-col">
                        <div className="mx-auto">
                            <SliderImg />
                            <div className="text-gray-600 body-font">
                                <div className="container px-3 py-14 mx-auto">
                                    <div className="flex flex-wrap -mx-4 text-center">
                                        <div className="sm:w-1/2 mb-1 md:px-4">
                                            <div className="rounded-lg h-5/6 md:h-64 overflow-hidden">
                                                <img alt="content" className="object-contain h-full w-full" src={HL} />
                                            </div>
                                        </div>
                                        <div className="sm:w-1/2 mb-1 md:px-4">
                                            <div className="rounded-lg h-5/6 md:h-64 overflow-hidden">
                                                <img alt="content" className="object-contain h-full w-full" src={HR} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`architecture ${activeSection === 'architecture' ? 'fly-in-element' : 'fly-out-element'}`} id="architecture">
                <Architecture />
            </section>

            <section className={`interior ${activeSection === 'interior' ? 'fly-in-element' : 'fly-out-element'}`} id="interior">
                <Interior />
            </section>

            <section className={`graphic ${activeSection === 'graphic' ? 'fly-in-element' : 'fly-out-element'}`} id="graphic">
                <Graphic />
                {/* <Interior/> */}
            </section>

            <section className={`contact ${activeSection === 'contact' ? 'fly-in-element' : 'fly-out-element'}`} id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Home2
