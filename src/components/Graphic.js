import React from 'react';
import image1 from "../assets/Content/Images/1.jpg";
import img1 from "../assets/Content/Images/1.jpg";
import img2 from "../assets/Content/Images/2.jpg";
import image2 from "../assets/Content/Images/2.jpg";
import img3 from "../assets/Content/Images/3.jpg";
import img4 from "../assets/Content/Images/4.jpg";
import img5 from "../assets/Content/Images/5.jpg";
import { Link } from 'react-router-dom';

const Graphic = () => {

    const heading = "Hello world"
    const subheading = "Hello world"
    const description = "Hello world"

    return (
        <div className="body-font">
            <div className="container pl-1 pr-2 py-3 mx-auto flex flex-wrap">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-[#622c00]"></div>
                    </div>
                    <div className="flex w-full mb-4 flex-wrap py-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-1">Graphic</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg">“Our designs dance in the interplay of light and shadow, where every detail is deliberate, and every form has meaning. We celebrating the beauty of simplicity, unburdened by excess, and making way for brilliance to emerge from the void.</p>
                    </div>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap md:w-1/2">
                        <div className="hover:opacity-70 md:p-2 p-1 w-1/2">
                            <Link
                                to={{
                                    pathname: `/detail/${encodeURIComponent(image1)}`,
                                    state: { description, heading, subheading, image1, image2 }
                                }}
                            >
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={image1} />
                            </Link>
                        </div>
                        <div className="hover:opacity-70 md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src={img2} />
                        </div>
                        <div className="hover:opacity-70 md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src={img3} />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:w-1/2">
                        <div className="hover:opacity-70 md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src={img4} />
                        </div>
                        <div className="hover:opacity-70 md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src={img5} />
                        </div>
                        <div className="hover:opacity-70 md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src={img1} />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:w-1/2">
                        <div className="hover:opacity-70 md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src={img2} />
                        </div>
                        <div className="hover:opacity-70 md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src={img3} />
                        </div>
                        <div className="hover:opacity-70 md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src={img4} />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:w-1/2">
                        <div className="hover:opacity-70 md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src={img5} />
                        </div>
                        {/* <div className="hover:opacity-70 md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src={img1} />
                        </div>
                        <div className="hover:opacity-70 md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src={img1} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graphic
