import { useEffect, useState } from "react";


const Products = () => {
    // use state to set products data from json
    const [products, setProducts] = useState([])
    const [dataLength, setDataLength] = useState(6)
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
                    products.slice(0, dataLength).map((product, index) => <div key={index} className="card bg-base-100 shadow-xl my-5">
                        <figure className="px-10 pt-10">
                            <img src={product.image} alt="Shoes" className="rounded-xl h-[250px] w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.title}</h2>
                            <p>{product.description.slice(0, 100)}.....</p>
                            <div className="card-actions">
                                <button className="btn bg-black text-white hover:bg-black">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className={`flex justify-center my-16 ${(dataLength >= 0 && dataLength < 4) || (dataLength === products.length) ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(products.length)} className="px-8 btn bg-black hover:bg-black text-white">See All</button>
            </div>



        </>
    );
};

export default Products;