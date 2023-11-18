import React, { useEffect, useState } from 'react'
// import blogData from '../../api/blogData.json'
import BlogCard from './BlogCard';
function BlogPage() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        async function fetchBlogs (){
            let url = `https://raw.githubusercontent.com/deepcs2004/blog/main/blogsite/api/blogData.json`;

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
            // console.log(data);
        }
        fetchBlogs();

    }, [])

    
    return (
        <div>
            {/* catagory section */}
            <div>Page Category</div>



            {/* blogSection */}
            <div>
                <BlogCard blogs={blogs} />
            </div>



            {/* pagination */}
            <div>pagination</div>


        </div>
    )
}

export default BlogPage