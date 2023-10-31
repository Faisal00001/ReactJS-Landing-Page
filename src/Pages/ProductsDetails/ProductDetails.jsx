import Products from "../../components/Products/Products";


const ProductDetails = () => {
    return (
        <div>
            <h3 className="text-center text-3xl font-bold mt-24">Our Products</h3>
            {/* Products component */}
            <Products></Products>
        </div>
    );
};

export default ProductDetails;