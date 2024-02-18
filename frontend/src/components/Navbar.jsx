import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//react icons
import { FaBarsStaggered, FaBookOpenReader, FaXmark } from "react-icons/fa6";
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [isSticky,setIsSticky] = useState(false)

    //toggle menu
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>100){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
            window.addEventListener("scroll",handleScroll)
        }
        return ()=>{
            window.addEventListener("scroll",handleScroll)
        }
    },[])

    //nav items
    const navItems=[
        {link:"Home",path:"/" },
        {link:"Shop",path:"/shop" },
        {link:"Sell",path:"/admin/dashboard" },
        {link:"Blog",path:"/blog" },
        {link:"About",path:"/about" }
    ]
  return ( 
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky?"sticky top-0 left-0 right-0 bg-blue-300 ":""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/*logo*/}
                <Link to="/" className='text-2xl font-bold text-blue-600 flex items-center gap-2'><FaBookOpenReader className='inline-block'/>BookWise</Link>
            

            {/*nav item for large devices*/}
            <ul>{
                <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-600'>{link}</Link>
                            </li>
                        ))}
            </ul>
                }
            </ul>
            {/*button for long devices*/}
            <div className='space-x-12 hidden lg:flex item-center'>
                <button><FaBarsStaggered className='w-5 hover:text-blue-600'/></button>
            </div>


            {/*menu button for mobile devices*/}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-black focus:outline-none'>
                    {
                        isMenuOpen?<FaXmark className='h-5 text-5 text-black'/>:<FaBarsStaggered className='h-5 text-5 text-black'/>
                    }
                </button>
            </div>


            {/*nav items for small devices*/}
                    <div className={`space-y-4 mt-12 py-7 bg-blue-600 ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
                    {
                        navItems.map(({ link, path })=>(<Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>
                        ))
                        }
                    </div>
                        

            </div>
        </nav>
    </header>
  )
}

export default Navbar