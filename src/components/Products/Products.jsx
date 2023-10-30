import { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <>


            <div className="card-list">
                {
                    products.map((product, index) => <a key={index} className="card-item">
                        <img src={product.image} alt="Card Image" />
                        <span className="developer">{product.title}</span>
                        <h3>{product.description}</h3>
                        <div className="arrow">
                            <i className="fas fa-arrow-right card-icon"></i>
                        </div>
                    </a>)
                }

            </div>



        </>
    );
};

export default Products;