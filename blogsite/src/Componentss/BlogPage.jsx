import React, { useEffect, useState } from 'react'
// import blogData from '../../api/blogData.json'
import BlogCard from './BlogCard';
function BlogPage() {

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const pagesize = 12
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {

        async function fetchBlogs (){
            let url = `https://raw.githubusercontent.com/deepcs2004/blog/main/blogsite/api/blogData.json?page=${currentPage}&limit=${pagesize}`;

            // filter by category 
            if(selectedCategory){
                url +=`&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
            // console.log(data);
        }
        fetchBlogs();

    }, [pagesize,currentPage,selectedCategory])

    
    // page chnging
    const handlePageChange =(pageNumber)=>{
        setCurrentPage(pageNumber);
    }


    // change category
    const handleCategoryChange =(category)=>{
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

    return (
        <div>
            {/* catagory section */}
            <div>Page Category</div>



            {/* blogSection */}
            <div>
                <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pagesize={pagesize} />
            </div>



            {/* pagination */}
            <div>pagination</div>


        </div>
    )
}

export default BlogPage