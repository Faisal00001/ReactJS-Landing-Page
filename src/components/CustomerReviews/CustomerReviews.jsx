// Import Swiper React components

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { useEffect, useState } from 'react';
import 'swiper/css';
import "./Reviews.css";
const CustomerReviews = () => {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch('customerReviews.json')
            .then(res => res.json())
            .then(data => {
                setCustomers(data)
            })
    }, [])
    console.log(customers)
    return (
        <>
            <div className='testimonialsHeader'>Our Testimonials</div>
            <Swiper
                effect='fade'
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                <div className='reviews-container'>
                    {
                        customers.map((customer, index) => <SwiperSlide key={index}>
                            <div className='reviews-container'>
                                <figure style={{
                                    paddingBottom: '40px'
                                }} className="snip1390">
                                    <img src={customer.image} alt="profile-sample3" className="profile" />
                                    <figcaption className='profile-text-container'>
                                        <h2 style={{
                                            textAlign: 'center',
                                            padding: '10px'
                                        }}>{customer.name}</h2>
                                        <blockquote>{customer.review}</blockquote>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </>

    );
};

export default CustomerReviews;