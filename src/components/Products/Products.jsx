import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const Products = () => {
    // use state to set products data from json
    const [products, setProducts] = useState([])
    const [dataLength, setDataLength] = useState(6)
    // Intial aos
    useEffect(() => {
        Aos.init()
    })
    // use effect to load json data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
                {
                    // mapping through each product then render it to the client side
                    products.slice(0, dataLength).map((product, index) => <div key={index} data-aos="zoom-in-up" data-aos-duration="600" className="card bg-base-100 shadow-xl my-5">
                        <figure className="px-10 pt-10">
                            <img src={product.image} alt="Shoes" className="rounded-xl h-[250px] w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.title}</h2>
                            <p>{product.description.slice(0, 100)}.....</p>
                            <p className="text-lg font-semibold">Price: ${product.price}</p>
                            <div className="card-actions">
                                <button className="btn hover:text-red-500 bg-black text-white hover:bg-black">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* Making  a button to see all the items.If the products have more then 4 items it will be showing and then after clicking the see all all the available product will be shown.After that it will disable */}
            <div className={`flex justify-center my-16 ${(dataLength >= 0 && dataLength < 4) || (dataLength === products.length) ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(products.length)} className="px-8 btn bg-black hover:bg-black text-white">See All</button>
            </div>



        </>
    );
};

export default Products;