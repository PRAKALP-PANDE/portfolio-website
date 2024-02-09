import React from 'react'
import loader from "../assets/loader.gif"

const Loader = () => {
    return (
        <div className='m-0 p-0 flex justify-center items-center overflow-hidden'>
            <img src={loader} className="object-contain w-full h-screen" alt='loader'/>
        </div>

    )
}

export default Loader
