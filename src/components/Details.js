import React from 'react'
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const { description, heading, subheading, image1, image2 } = location.state || {};

    const changeImage = (thumbnail) => {
        const mainImage = document.getElementById("mainImg");
        mainImage.src = thumbnail.src;
    };

    return (
        <div>
            <div className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 md:py-6 py-8 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap md:w-1/2 h-1/2">
                            <div className="md:p-2 w-full">
                                <img className="w-full h-96 object-contain block" src={image1} id="mainImg" alt="MainImage" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    className="w-full object-contain h-full block"
                                    src={image1}
                                    onClick={(e) => changeImage(e.target)}
                                    alt="Thumbnail 1"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    className="w-full object-contain h-full block"
                                    src={image2}
                                    onClick={(e) => changeImage(e.target)}
                                    alt="Thumbnail 2"
                                />
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-2 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{heading}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{subheading}</h1>
                            <p className="leading-relaxed">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
