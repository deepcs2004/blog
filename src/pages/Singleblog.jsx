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
                <div className='lg:w-3/4 mx-auto sm:p-5'>
                    <div>
                        <img src={elementWithId.image} alt="img" className='w-full mx-auto rounded' />
                    </div>

                    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-600 cursor-pointer'>
                        {elementWithId.title}
                    </h2>

                    <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' />{elementWithId.author} | {elementWithId.published_date}</p>


                    <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' />{elementWithId.reading_time}</p>


                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content1}
                    </h3>

                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content2}
                    </h3>

                    <div>
                        <img src={elementWithId.image2} alt="img" className='w-full mx-auto rounded' />
                    </div>

                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content3}
                    </h3>

                    {/* youtube video embed */}

                    <iframe className='mb-6' width="560" height="315" src={elementWithId.videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content4}
                    </h3>

                    {/* amazon link */}

                    <a href="https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD?crid=2VHZNRL0VO96U&keywords=iphone+in+20000&qid=1700833521&sprefix=iphone+in+20%2Caps%2C483&sr=8-1&linkCode=li2&tag=lappeed2004-21&linkId=66b99e4c37e71edc51c891aa7e337b9d&language=en_IN&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09G9HD6PD&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=lappeed2004-21&language=en_IN" /></a>
                    
                    <img src="https://ir-in.amazon-adsystem.com/e/ir?t=lappeed2004-21&language=en_IN&l=li2&o=31&a=B09G9HD6PD" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />



                    <h3 className='text-xl font-bold text-gray-800 mb-6 '>
                        {elementWithId.content5}
                    </h3>





                </div>

                <div className='lg:w-1/2'>
                    <SideBar />
                </div>
            </div>






        </div>

    )
}

export default Singleblog