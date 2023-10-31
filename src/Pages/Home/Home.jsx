import AboutUs from "../../components/AboutUs/AboutUs";
import Career from "../../components/Career/Career";
import ContactUs from "../../components/ContactUs/ContactUs";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import Faq from "../../components/FAQ/FAQ";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import UpcomingArrivals from "../../components/UpcomingArrivals/UpcomingArrivals";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <div className="products-container">

                <h3 className="products-title text-3xl font-bold">Our Products</h3>
                <Products></Products>
                <UpcomingArrivals></UpcomingArrivals>
                <CustomerReviews></CustomerReviews>
                <Career></Career>
                <Faq></Faq>
                <AboutUs></AboutUs>
                <ContactUs></ContactUs>
            </div>
        </>

    );
};

export default Home;