import React from 'react';
import { Carousel, IconButton } from '@material-tailwind/react';
import HomeImage1 from "../assets/Content/PNGs_sketches/01.png"
import HomeImage2 from "../assets/Content/PNGs_sketches/02.png"
import HomeImage3 from "../assets/Content/PNGs_sketches/03.png"
import HomeImage4 from "../assets/Content/PNGs_sketches/04.png"
import HomeImage5 from "../assets/Content/PNGs_sketches/05.png"
import HomeImage6 from "../assets/Content/PNGs_sketches/06.png"
import HomeImage7 from "../assets/Content/PNGs_sketches/07.png"


const SliderImg = () => {

    return (
        <div>
            <Carousel autoplay={true} loop={true} className="rounded-lg h-64 overflow-hidden" prevArrow={({ handlePrev }) => (
                <IconButton variant="text" color="white" size="lg" onClick={handlePrev} className="!absolute top-2/4 left-4 -translate-y-2/4" >
                    <svg>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </IconButton>
            )}
                nextArrow={({ handleNext }) => (
                    <IconButton variant="text" color="white" size="lg" onClick={handleNext} className="!absolute top-2/4 !right-4 -translate-y-2/4" >
                        <svg>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </IconButton>
                )}
            >
                <img src={HomeImage1} alt="Slider" className="object-contain h-full w-full" />
                <img src={HomeImage2} alt="Slider" className="object-contain h-full w-full" />
                <img src={HomeImage3} alt="Slider" className="object-contain h-full w-full" />
                <img src={HomeImage4} alt="Slider" className="object-contain h-full w-full" />
                <img src={HomeImage5} alt="Slider" className="object-contain h-full w-full" />
                <img src={HomeImage6} alt="Slider" className="object-contain h-full w-full" />
                <img src={HomeImage7} alt="Slider" className="object-contain h-full w-full" />
            </Carousel>

        </div>
    );
};

export default SliderImg;
