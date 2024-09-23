import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Briefcase.css'

// import required modules
import { Pagination } from 'swiper/modules';

const Briefcase: React.FC = () => {
  return (
    <div className='briefcase'>
        <div>
            <p className='title__briefcase'>Briefcase</p>
        </div>
        <Swiper
            pagination={{
            dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
                <div className='briefcase__card'>
                    <div className='briefcase__card_container ecommerce-01'>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='briefcase__card'>
                    <a href="https://ecommer-01.vercel.app" target="_blank" rel="noopener noreferrer">
                        <div className='briefcase__card_container cms-01'>

                        </div>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='briefcase__card'>
                    <div className='briefcase__card_container'>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='briefcase__card'>
                    <div className='briefcase__card_container'>

                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Briefcase
