import React from 'react'
import Banner from '../Componentss/Banner'
import BlogPage from '../Componentss/BlogPage'


function Home() {
  return (
    <div>
      <Banner/>
      <div className='mx-w-7xl mx-auto'>
        <BlogPage/>
      </div>
      

    </div>
  )
}

export default Home