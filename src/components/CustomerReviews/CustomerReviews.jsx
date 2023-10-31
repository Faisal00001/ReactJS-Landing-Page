// Import Swiper React components
import Aos from "aos";
import 'aos/dist/aos.css';
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
    // using useState to set the customer loaded from the json file
    const [customers, setCustomers] = useState([])
    // useEffect to initial AOS
    useEffect(() => {
        Aos.init()
    })
    // using useEffect to load the customer json data and set the data to customer
    useEffect(() => {
        fetch('customerReviews.json')
            .then(res => res.json())
            .then(data => {
                setCustomers(data)
            })
    }, [])

    return (
        <>
            <div data-aos="fade-up" data-aos-duration="600" className='testimonialsHeader'>Our Testimonials</div>
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
                    {/* Mapping to the customer array and getting each customer to show the output */}
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