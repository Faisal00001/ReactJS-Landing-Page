import { useEffect, useState } from "react";


const UpcomingArrivals = () => {
    const [upComingArrivals, setUpComingArrivals] = useState([])
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
                <h3 className="text-center text-3xl font-bold mb-20">Upcoming Arrivals</h3>
                {/* Card section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        upComingArrivals.map(product => <div key={product.id} className="card card-compact w-96 bg-base-100 shadow-xl">
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