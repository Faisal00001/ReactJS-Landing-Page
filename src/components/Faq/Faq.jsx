import { useEffect, useState } from "react";


const Faq = () => {
    const [FAQ, setFAQ] = useState([])
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