import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function SideBar() {

    const [popularBlogs, setPopularBlogs] = useState([])

    useEffect(() => {
        fetch("https://script.googleusercontent.com/macros/echo?user_content_key=4w2z0rXNXqtOB7GPm3GCFPkw-G9XOStmOa6sUF5oy_HUZLPhapt3w0SP5E8cUEuzVvZnePBvKtA8Ma2MRja6mDlPgAW7zLk6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE3xg_5SnZk5KCu5ivEpb4efWdzsgJsvh-Nv0Yeh5KT61nHPcvbyBJUic5D5xtNOGvUKPEOUjgd97AoLsGfVXgcNjytG121TBtz9Jw9Md8uu&lib=MpkQqPPNJx1Cns-Lr2G_PjPgbD6tHr73D")
            .then(res => res.json())
            .then(data => setPopularBlogs(data.slice(
                0, 15
            )))




    }, [])

    return (
        <div>
            <div>
            <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
            <div>
                {
                    popularBlogs.slice(0,5).map(blog =>
                        <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{blog.title}</h4>

                            <Link to="/" className='text-base pb-2 hover:text-yellow-500 inline-flex items-center py-1'>Read more <FaArrowRight className='mt-1 ml-2' /></Link>
                        </div>
                    )
                }
            </div>
        </div>


        {/* popular blogs */}
        <div >
            <h3 className='text-2xl mt-20 font-semibold px-4'>Popular Blogs</h3>
            <div>
                {
                    popularBlogs.slice(6,10).map(blog =>
                        <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{blog.title}</h4>

                            <Link to="/" className='text-base pb-2 hover:text-yellow-500 inline-flex items-center py-1'>Read more <FaArrowRight className='mt-1 ml-2' /></Link>
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    )
}

export default SideBar