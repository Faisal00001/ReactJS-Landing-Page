// AiOutlineArrowRight
import about from "../../assets/images/about_us/about.svg";
const AboutUs = () => {
    return (
        <div>
            <div className="p-8">
                {/*container mx-auto always center the section when the screen get larger */}
                <div className="container mx-auto">
                    {/*Section Title */}
                    <h1 className="text-3xl font-semibold mb-4 text-center">About Our E-commerce Store</h1>
                    <div className="flex gap-10 items-center mt-10 flex-col lg:flex-row">
                        {/* Adding about us section image */}
                        <div className="lg:w-[50%]">
                            <img src={about} alt="About" />
                        </div>
                        <div className="p-2 font-semibold lg:w-[50%]">
                            {/* About us text content */}
                            <p className="text-gray-700">
                                Welcome to our online store! We are passionate about delivering high-quality products to our customers and providing an exceptional shopping experience.
                            </p>
                            <p className="text-gray-700 mt-2">
                                Our mission is to offer a wide range of products, from electronics to fashion, all carefully curated to meet your needs. We believe in quality, affordability, and customer satisfaction.
                            </p>
                            <p className="text-gray-700 mt-2">
                                Our dedicated team works tirelessly to ensure that your online shopping experience is smooth, secure, and enjoyable. We value your trust and strive to exceed your expectations.
                            </p>
                            <p className="text-gray-700 mt-2">
                                Thank you for choosing us as your online shopping destination. If you have any questions or feedback, please do not hesitate to reach out to our customer support team.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutUs;