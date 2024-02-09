import React from 'react';
import img1 from "../assets/Content/Images/1.jpg";
import img2 from "../assets/Content/Images/2.jpg";
import img3 from "../assets/Content/Images/3.jpg";
import img4 from "../assets/Content/Images/4.jpg";
import img5 from "../assets/Content/Images/5.jpg";
import { Link } from 'react-router-dom';

const Interior = () => {

    const images = [
        { src: img1, id: 1, heading: 'The Sandbox', subheading: 'Peter Braithwaite Studio', description: 'Project details, description, etc.', image1: img1, image2: img2 },
        { src: img2, id: 2, heading: 'Image 2 Heading', subheading: 'Image 2 Subheading', description: 'Image 2 Description', image1: img1, image2: img2 },
        { src: img3, id: 3, heading: 'Image 2 Heading', subheading: 'Image 2 Subheading', description: 'Image 2 Description', image1: img1, image2: img2 },
        { src: img4, id: 4, heading: 'Image 2 Heading', subheading: 'Image 2 Subheading', description: 'Image 2 Description', image1: img1, image2: img2 },
        { src: img5, id: 5, heading: 'Image 2 Heading', subheading: 'Image 2 Subheading', description: 'Image 2 Description', image1: img1, image2: img2 },
        { src: img1, id: 6, heading: 'The Sandbox', subheading: 'Peter Braithwaite Studio', description: 'Project details, description, etc.', image1: img1, image2: img2 },
        { src: img2, id: 7, heading: 'Image 2 Heading', subheading: 'Image 2 Subheading', description: 'Image 2 Description', image1: img1, image2: img2 },
        { src: img3, id: 8, heading: 'Image 2 Heading', subheading: 'Image 2 Subheading', description: 'Image 2 Description', image1: img1, image2: img2 },
        { src: img4, id: 9, heading: 'Image 2 Heading', subheading: 'Image 2 Subheading', description: 'Image 2 Description', image1: img1, image2: img2 },
        { src: img5, id: 10, heading: 'Image 2 Heading', subheading: 'Image 2 Subheading', description: 'Image 2 Description', image1: img1, image2: img2 },
        // Add more image objects as needed
    ];

    return (
        <div className="body-font">
            <div className="container py-6 mx-auto flex flex-wrap">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-[#622c00]"></div>
                    </div>
                    <div className="flex w-full mb-20 flex-wrap py-2 px-2">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-1">Interior</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg">“Our designs dance in the interplay of light and shadow, where every detail is deliberate, and every form has meaning. We celebrating the beauty of simplicity, unburdened by excess, and making way for brilliance to emerge from the void.</p>
                    </div>
                </div>
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {images.map((image, index) => (
                            <div key={index} className="hover:opacity-70 lg:w-1/4 md:w-1/2 p-2 w-full">
                                <Link className="block relative h-full w-full rounded overflow-hidden"
                                    to={{
                                        pathname: `/detail/${encodeURIComponent(image.src)}`,
                                    }}
                                    state={{ ...image }}
                                >
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src={image.src} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interior
