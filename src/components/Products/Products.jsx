import "./Products.css";

const Products = () => {
    return (
        <>
            <div className="card-list">
                <a className="card-item">
                    <img src="images/developer.jpg" alt="Card Image" />
                    <span className="developer">Developer</span>
                    <h3>A developer codes software and websites.</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a className="card-item">
                    <img src="images/designer.jpg" alt="Card Image" />
                    <span className="designer">Designer</span>
                    <h3>A designer is a design expert.</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a className="card-item">
                    <img src="images/editor.jpg" alt="Card Image" />
                    <span className="editor">Editor</span>
                    <h3>An editor ensures content quality and accuracy.</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
            </div>
        </>
    );
};

export default Products;