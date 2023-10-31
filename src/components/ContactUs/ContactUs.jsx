import contact from "../../assets/images/contact/contact.svg";

const ContactUs = () => {
    return (
        <div className="container mx-auto my-24">
            {/* Center the title */}
            <h3 className="text-3xl font-bold text-center my-16">Contact Us</h3>
            {/* Divide the width equal to each div */}
            <div className="flex gap-10 items-center flex-col lg:flex-row px-5">
                <div className="flex-1">
                    <img src={contact} alt="Contact" />
                </div>
                <div className="flex-1 space-y-3">
                    <h3>Have a question?</h3>
                    <p>If you would like more information, we are here to help.</p>
                    <button className="btn px-6 hover:text-red-500 bg-black hover:bg-black text-white">Contact Us</button>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;