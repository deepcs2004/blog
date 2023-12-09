import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function Banner() {
    return (
        <div className='px-4 py-32 bg-black mx-auto'>

            <div className='text-white text-center'>
                <h1 className='text-3xl lg:text-5xl leading-snug font-bold mb-5'>Welcome to Our Blog</h1>

                <p className='text-gray-100 text-lg mb-5'>Read our Blogs today and join a community of intellectuals </p>

                <div>
                    <Link to="/about" className='font-medium hover:text-yellow-500 inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
