import React, { useEffect, useState } from 'react'
// import blogData from '../../api/blogData.json'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';
function BlogPage() {

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pagesize = 12
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {

        async function fetchBlogs() {
            let url = `https://raw.githubusercontent.com/deepcs2004/blog/main/blogsite/api/blogData.json?page=${currentPage}&limit=${pagesize}`;

            // filter by category 
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
            // console.log(data);
        }
        fetchBlogs();

    }, [pagesize, currentPage, selectedCategory])


    // page chnging
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    // change category
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

    return (
        <div>
            {/* catagory section */}
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory}
                    activeCategory={activeCategory} />
            </div>



            {/* blogSection */}
            <div className='flex flex-col lg:flex-row gap-12'>
                <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pagesize={pagesize} />

                {/* side bar component */}
                <div>
                    <SideBar />
                </div>
            </div>



            {/* pagination */}
            <div>
                <Pagination onPageChnage={handlePageChange} currentPage={currentPage} blogs={blogs} pagesize={pagesize} />
            </div>


        </div>
    )
}

export default BlogPage