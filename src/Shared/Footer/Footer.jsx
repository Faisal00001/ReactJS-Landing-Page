
import "./Footer.css";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="content">
                    <div className="left box">
                        <div className="upper">
                            <div className="topic">About us</div>
                            <p> Your destination for quality products and exceptional service. We are committed to simplifying your shopping journey and providing reliable, top-notch experiences every time you visit.</p>
                        </div>
                        <div className="lower">
                            <div className="topic">Contact us</div>
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
                        <div><a>Web Design, Development</a></div>
                        <div><a>Web UX Design, Reasearch</a></div>
                        <div><a>Web User Interface Design</a></div>
                        <div><a>Theme Development, Design</a></div>
                        <div><a>Mobile Application Design</a></div>
                        <div><a>Wire raming & Prototyping</a></div>
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