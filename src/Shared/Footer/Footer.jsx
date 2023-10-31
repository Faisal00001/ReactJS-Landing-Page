
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="content">
                    <div className="left box">
                        <div className="upper">
                            <Link to={'/about'}>
                                <div className="topic underline">About us</div>
                            </Link>

                            <p> Your destination for quality products and exceptional service. We are committed to simplifying your shopping journey and providing reliable, top-notch experiences every time you visit.</p>
                        </div>
                        <div className="lower">
                            <Link to={'/contact'}>
                                <div className="topic underline">Contact us</div>
                            </Link>

                            <div className="phone">
                                <a><i className="fas fa-phone-volume"></i>+007 9089 6767</a>
                            </div>
                            <div className="email">
                                <a><i className="fas fa-envelope"></i>abc@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="middle box">
                        <div className="topic">Our Services</div>
                        <div><a>Quick Shipping: Get it in days.</a></div>
                        <div><a>24/7 Support: Help when you need it.</a></div>
                        <div><a>Safe Payments: Secure and easy transactions.</a></div>
                        <div><a>Easy Returns: No-hassle product exchanges</a></div>
                        <div><a>Special Deals: Discounts, every day.</a></div>
                    </div>
                    <div className="right box">
                        <div className="topic">Subscribe us</div>
                        <form >
                            <input type="text" placeholder="Enter email address" />
                            <input type="submit" name="" value="Send" />
                            <div className="media-icons">
                                <a><i className="fab fa-facebook-f"></i></a>
                                <a><i className="fab fa-instagram"></i></a>
                                <a><i className="fab fa-twitter"></i></a>
                                <a><i className="fab fa-youtube"></i></a>
                                <a><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </form>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;