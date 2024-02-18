import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}

            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell your books<span className='text-blue-500'> for the best prices</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ut sed nihil facilis deserunt expedita cumque magni quia eos minima enim corporis possimus consequuntur, commodi reiciendis. Maxime officiis aspernatur molestiae?</p>
                <div>
                    <input type="search" id="search" name="search" placeholder='search books' dir="ltr" className='py-2 px-2 rounded-s-lg outline-none mr-1' />
                <button dir="rtl" className='bg-gray-400 px-4 py-2 text-white font-medium rounded-s-lg hover:bg-black transition-all ease-in duration-200'>go</button>
                </div>
            </div>

             {/* right side */}
             <div><BannerCard /></div>
        </div>
    </div>
  )
}

export default Banner