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
            let url = `https://script.googleusercontent.com/macros/echo?user_content_key=4w2z0rXNXqtOB7GPm3GCFPkw-G9XOStmOa6sUF5oy_HUZLPhapt3w0SP5E8cUEuzVvZnePBvKtA8Ma2MRja6mDlPgAW7zLk6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE3xg_5SnZk5KCu5ivEpb4efWdzsgJsvh-Nv0Yeh5KT61nHPcvbyBJUic5D5xtNOGvUKPEOUjgd97AoLsGfVXgcNjytG121TBtz9Jw9Md8uu&lib=MpkQqPPNJx1Cns-Lr2G_PjPgbD6tHr73D?page=${currentPage}&limit=${pagesize}`;

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