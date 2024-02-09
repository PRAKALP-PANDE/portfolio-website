import React from 'react'
import Left from "../assets/Content/Kailash_bungalow/View.png"
import Left2 from "../assets/Content/Kailash_bungalow/Elevation.png"
import Right from "../assets/Content/Shivaji_M_Goa/DWG.png"
import Right2 from "../assets/Content/Shivaji_M_Goa/Site_plan.png"
import { Link } from 'react-router-dom';

const Architecture = () => {

  const images = [
    {
      src: Left, id: 1, heading: 'The Sandbox', subheading: 'Peter Braithwaite Studio', description: "Kailash: Aivale’s Residence Location: Pune, Maharashtra Year: January, 2023 Area: 1500 Sq.ft. ‘Kailash’ bungalow captures the essence of Lord Shiva’s sacred hometown. Just as Mount Kailash is a place of spiritual significance and tranquility, our bungalow embodies these qualities , offering a peaceful retreat that resonates with divine aura of its namesake. Just as pilgrims are drawn to the serenity of Mount Kailash, residents of ‘Kailash’ bungalow will experience a similar sense of calm, connection & harmony. The concept draws inspiration from contemporary minimalist architecture, rooted in ancient Vastu Shastra principles, providing well ventilated & well lighted spaces. Balconies are extended along a lateral axis, facing the surrounding hills.The master bedroom maximizes its carpet area by omitting a terrace, yet offers an exterior view through a window - cum - balcony.", image1: Left, image2: Left2 },

    { src: Right, id: 2, heading: 'Chhatrapati Shivaji Maharaj Memorial', subheading: 'Calangute, Goa.', description: "Location: Calangute. Goa. Year: June, 2023 Statue Height: Including Base: 21’(6.5 m) Excluding Base: 11’(3.4 m) Base Size: 10’ x 4’ Statue Composition: Bronze Metal Chhatrapati Shivaji Maharaj Memorial Statue in Calangute, Goa, marks a celebration of history, art, and the enduring spirit of a legendary leader. As visitors gaze upon the minimalist statue base and the towering figure of Shivaji Maharaj, they are invited to not only witness history but to become a part of the ongoing narrative of India's cultural richness. The memorial stands as a timeless tribute, bridging the gap between the past and the present, and inviting all to appreciate the legacy of one of India's greatest warriors. Rising above the serene landscapes of Calangute, the statue captures the essence of Shivaji Maharaj's legacy with a minimalist design, emphasizing simplicity and timelessness. The project envisions a harmonious blend of artistic finesse and historical significance, inviting visitors to reflect upon the rich cultural tapestry of India.", image1: Right, image2: Right2 }
    // Add more image objects as needed
  ];

  return (
    <div className="body-font">
      <div className="container pl-5 pr-16 py-6 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-[#622c00]"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-1 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Architecture</h1>
            <p className="sm:w-3/5 leading-relaxed text-lg sm:pl-10 pl-0">Our designs dance in the interplay of light and shadow, where every detail is deliberate, and every form has meaning. We celebrating the beauty of simplicity, unburdened by excess, and making way for brilliance to emerge from the void.</p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {images.map((image, index) => (
            <div key={index} className="px-4 py-1 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-96 overflow-hidden">
                <Link to={{
                  pathname: `/detail/${encodeURIComponent(image.src)}`,
                }}
                  state={{ ...image }} >
                  <img alt="content" className="object-contain h-full w-full" src={image.src} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Architecture
