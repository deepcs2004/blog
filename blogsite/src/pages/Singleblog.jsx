import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaUser ,FaClock} from "react-icons/fa6"
import SideBar from '../componentss/Sidebar';




const Singleblog = () => {
    const { id } = useParams();
    const blogID = parseInt(id, 10);

    const data = JSON.parse(useLoaderData());
    const elementWithId = data.find(item => item.id === blogID);

    console.log(elementWithId);
    // console.log("this is blog id",blogID)


    return (
        <div>
            <div className='py-40 bg-black text-center text-white
            px-4'>
                <h2 className='text-3xl lg:text-5xl leading-snug font-bold mb-5'>{elementWithId.title}</h2>
            </div>

            {/* blog details */}
            <div className='max-w-7xl mx-auto my-12'>
                <div className='lg:w-3/4 mx-auto'>
                    <div>
                        <img src={elementWithId.image} alt="img" className='w-full mx-auto rounded' />
                    </div>

                    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-600 cursor-pointer'>
                        {elementWithId.title}
                    </h2>

                    <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' />{elementWithId.author} | {elementWithId.published_date}</p>


                    <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' />{elementWithId.reading_time}</p>


                    <p className='text-base text-gray-500 mb-6'>
                        {elementWithId.content}
                    </p>

                    
                </div>

                <div>
                    <SideBar/>
                </div>
            </div>






        </div>

    )
}

export default Singleblog