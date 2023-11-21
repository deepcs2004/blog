import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaXmark } from "react-icons/fa6";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // navItems
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/about", link: "About" },
        { path: "/blog", link: "Blogs" },
        { path: "/services", link: "Services" },
        { path: "/contact", link: "Contact" },

    ]


    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto  flex justify-between items-center'>


                <a href="/" className='text-xl font-bold text-white cursor-pointer'>Money<span className='text-yellow-500'>View</span></a>

                {/* navitems for lg screen */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({ path, link }) => <li className='text-white hover:text-yellow-500' key={path}>
                            <NavLink className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""


                            } to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>


                {/* menu icons */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="/" className='hover:text-yellow-500'> <FaFacebook /> </a>

                    <a href="/" className='hover:text-yellow-500'> <FaInstagram /> </a>

                    <a href="/" className='hover:text-yellow-500'> <FaTwitter /> </a>
                </div>


                {/* mobile menu btn, display in mobile screen */}

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>

                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }

                    </button>
                </div>



            </nav>

            {/* menu items only for mobile */}

            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-black  ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-in-out duration-700  text-center" : "hidden"}`}>
                    {
                        navItems.map(({ path, link }) => <li className='text-white hover:text-yellow-500' key={path}>
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar