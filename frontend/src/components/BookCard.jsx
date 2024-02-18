import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Link} from 'react-router-dom'
//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import {RiShoppingCart2Line} from 'react-icons/ri'

const BookCard = ({books,headline}) => {
  return (
    <div className='my-15 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

        {/*cards*/}
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
       {
            books.map(book=> <SwiperSlide key={book.id}>
                <Link to ="/">
                    <div className='relative'>
                        <img src={book.imageURL} alt="" />
                        <div className='absolute top-3 right-3 bg-blue-500 hover:bg-black p-1.5 rounded '>
                            <RiShoppingCart2Line className='w-4 h-4 text-white' />
                        </div>
                    </div>
                    <div>
                        <h3>{book.bookTitle}</h3>
                        <p>{book.authorName}</p>
                    </div>
                    <div>
                        <p>₹199</p>
                    </div>
                </Link>
            </SwiperSlide>)
       }
      </Swiper>
        </div>
    </div>
  )
}

export default BookCard