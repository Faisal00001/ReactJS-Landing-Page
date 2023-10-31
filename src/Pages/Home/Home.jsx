import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Blogs from "../../components/Blogs/Blogs";
import Career from "../../components/Career/Career";
import ContactUs from "../../components/ContactUs/ContactUs";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import Faq from "../../components/FAQ/FAQ";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import UpcomingArrivals from "../../components/UpcomingArrivals/UpcomingArrivals";
import "./Home.css";
const Home = () => {
    // Intial AOS
    useEffect(() => {
        Aos.init()
    })
    return (
        <>
            <Slider></Slider>
            <div className="products-container">

                <h3 data-aos="fade-up" data-aos-duration="600" className="products-title text-3xl font-bold">Our Products</h3>
                {/* Product component */}
                <Products></Products>
                {/* UpcomingArrivals component */}
                <UpcomingArrivals></UpcomingArrivals>
                {/* Blog component */}
                <Blogs></Blogs>
                {/* Cutomer Review Component */}
                <CustomerReviews></CustomerReviews>
                {/* Career component */}
                <Career></Career>
                {/* FAQ component */}
                <Faq></Faq>
                {/* About Us component */}
                <AboutUs></AboutUs>
                {/* Contact us Component */}
                <ContactUs></ContactUs>
            </div>
        </>

    );
};

export default Home;