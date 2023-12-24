import React from 'react'
import BlogPage from '../Componentss/BlogPage'

function Blog() {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white
      px-4'>
        <h2 className='text-3xl lg:text-5xl leading-snug font-bold '>Blog Page</h2>
      </div>

      {/* all blog containerr  */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>

    </div>
  )
}

export default Blog
