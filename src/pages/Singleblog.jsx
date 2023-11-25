import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaUser, FaClock } from "react-icons/fa6"
import SideBar from '../Componentss/SideBar'
import VideoPlayer from '../Componentss/VideoPlayer'




const Singleblog = () => {
    const { id } = useParams();
    const blogID = parseInt(id, 10);

    const data = JSON.parse(useLoaderData());
    const elementWithId = data.find(item => item.id === blogID);

    console.log(elementWithId.videoSrc);
    // console.log("this is blog id",blogID)



    return (
        <div>
            <div className='py-40 bg-black text-center text-white
            px-4'>
                <h2 className='text-3xl lg:text-5xl leading-snug font-bold mb-5'>{elementWithId.title}</h2>
            </div>

            {/* blog details */}
            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className='lg:w-3/4 mx-auto '>
                    <div>
                        <img src={elementWithId.image} alt="img" className='w-full mx-auto rounded' />
                    </div>

                    <h1 className='text-3xl mt-8 font-bold mb-4 text-blue-600 cursor-pointer'>
                        {elementWithId.title}
                    </h1>

                    <h2 className='text-2xl mt-4 font-bold mb-4 text-gray-600'>
                        {elementWithId.SubTitle}
                    </h2>

                    <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' />{elementWithId.author} | {elementWithId.published_date}</p>


                    <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' />{elementWithId.reading_time}</p>


                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content1}
                    </h3>

                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content2}
                    </h3>

                    <div className='lg:w-3/4 mx-auto '>
                        <img src={elementWithId.image2} alt="img" className='w-full mx-auto rounded' />
                    </div>

                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content3}
                    </h3>

                    {/* youtube video embed */}

                    <iframe className=' lg:max-w-xl lg:h-80 w-full  h-60 mb-6 '  src={elementWithId.videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content4}
                    </h3>

                    <a className='text-red-500' href="https://amzn.to/46skOpe">Get the cheapest Iphone here!</a>

                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content5}
                    </h3>

                    <p className='text-gray-500 text-base mb-6'>
                        {elementWithId.tags}
                    </p>





                </div>

                <div className='lg:w-1/2'>
                    <SideBar />
                </div>
            </div>






        </div>

    )
}

export default Singleblog