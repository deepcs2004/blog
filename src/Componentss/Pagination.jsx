import React from 'react'

function Pagination({ onPageChnage, currentPage, blogs, pagesize }) {

    const totalPages = Math.ceil(blogs.length / pagesize);

    const renderPaginationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" onClick={() => onPageChnage(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }




    return (
        <ul className='paginaiton my-8 flex-wrap gap-4'>
            <li>
                <button onClick={() => onPageChnage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            </li>
            <div className='flex gap-1'>{renderPaginationLinks()}</div>
            <li>
                <button onClick={() => onPageChnage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </li>
        </ul>
    )
}

export default Pagination