import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const UpcomingArrivals = () => {
    const [upComingArrivals, setUpComingArrivals] = useState([])
    useEffect(() => {
        Aos.init()
    })
    useEffect(() => {
        fetch('UpcomingArrivals.json')
            .then(res => res.json())
            .then(data => {
                setUpComingArrivals(data)
            })
    }, [])
    return (
        <div>
            {/* Center the div for all device */}
            <div className="container mx-auto my-24">
                {/* Title bar */}
                <h3 data-aos="fade-up" data-aos-duration="600" className="text-center text-3xl font-bold mb-20">Upcoming Arrivals</h3>
                {/* Card section */}
                <div className="grid px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Mapping through each product to show in the website */}
                    {
                        upComingArrivals.map(product => <div data-aos="flip-left" data-aos-duration="600" key={product.id} className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img className="h-[250px] w-full" src={product.image} alt="Product" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.productName}</h2>
                                <p>{product.shortDescription}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn bg-black hover:bg-black text-white hover:text-red-500">View Details</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default UpcomingArrivals;