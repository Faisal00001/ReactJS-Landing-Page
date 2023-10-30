// AiOutlineSearch
import { NavLink } from "react-router-dom";
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
                        <li><a><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "navLinkActive" : ""
                            }
                        >
                            Home
                        </NavLink></a></li>
                        <li><a><NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "navLinkActive" : ""
                            }
                        >
                            About
                        </NavLink></a></li>
                        <li><a><NavLink
                            to="/messages"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "navLinkActive" : ""
                            }
                        >
                            Products
                        </NavLink></a></li>
                        <li><a>Blog</a></li>
                        <li><a>Special Offers</a></li>
                        <li><a>Career</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
            </header>

        </>
    );
};

export default Navbar;