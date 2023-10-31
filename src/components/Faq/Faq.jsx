import { useEffect, useState } from "react";


const Faq = () => {
    // Using useState to set the json data
    const [FAQ, setFAQ] = useState([])
    // useEffect to load the data and then set the data to the FAQ 
    useEffect(() => {
        fetch('FAQ.json')
            .then(res => res.json())
            .then(data => {
                setFAQ(data)
            })
    }, [])
    return (
        <div className="container mx-auto">
            <h3 className="text-3xl mt-24 font-bold text-center">Frequently Asked Question</h3>
            <div className="px-5 my-10">
                <div className="shadow-xl">
                    {/* Mapping to array of FAQ and then get single faq to set the faq data in the webpage */}
                    {
                        FAQ.map((item, index) => <><div key={index} className="collapse collapse-plus ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                {
                                    item.question
                                }
                            </div>
                            <div className="collapse-content">
                                <p>{item.answer}</p>
                            </div>
                        </div></>)
                    }
                </div></div>


        </div>
    );
};

export default Faq;