// AiOutlineSearch

import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo logoSearch">E-Tech</label>
                    <ul>
                        <li><a className="active" href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Special Offers</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <section></section>
            </header>

        </>
    );
};

export default Navbar;