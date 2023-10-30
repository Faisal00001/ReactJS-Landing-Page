import Products from "../../components/Products/Products";
import Slider from "../../components/Products/Slider/Slider";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <div className="products-container">

                <h3 className="products-title">Our Products</h3>
                <Products></Products>
            </div>
        </>

    );
};

export default Home;