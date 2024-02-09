import React from 'react';
import { Carousel } from 'flowbite-react';
import HomeImage1 from "../assets/Content/PNGs_sketches/01.png"
// import HomeImage2 from "../assets/Content/PNGs_sketches/02.png"
// import HomeImage3 from "../assets/Content/PNGs_sketches/03.png"
// import HomeImage4 from "../assets/Content/PNGs_sketches/04.png"
// import HomeImage5 from "../assets/Content/PNGs_sketches/05.png"
// import HomeImage6 from "../assets/Content/PNGs_sketches/06.png"
// import HomeImage7 from "../assets/Content/PNGs_sketches/07.png"


const SliderImg = () => {

    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 py-2">
                <Carousel>
                    <img className="lg:h-full md:h-full w-full object-contain" src={HomeImage1} alt="..." />
                    {/* <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
                    <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
                    <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
                    <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
                    <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." />
                    <img className="lg:h-48 md:h-36 w-full object-contain" src={HomeImage1} alt="..." /> */}
                </Carousel>
            </div>

        </div>
    );
};

export default SliderImg;
