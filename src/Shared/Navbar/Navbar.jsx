// AiOutlineSearch
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // Using navlinks to set the value in the jsx easily
    const navLinks = <>
        <li className="text-base font-medium "><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : "text-white"
            }
        >
            Home
        </NavLink></li>
        <li className="text-base font-medium"><NavLink
            to="/products"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : "text-white"
            }
        >
            Products
        </NavLink></li>
        <li className="text-base font-medium"><NavLink
            to="/upcomingProducts"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : "text-white"
            }
        >
            Upcoming Products
        </NavLink></li>
        <li className="text-base font-medium"><NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : "text-white"
            }
        >
            Blog
        </NavLink></li>
        <li className="text-base font-medium"><NavLink
            to="/testimonials"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : "text-white"
            }
        >
            Testimonials
        </NavLink></li>
        <li className="text-base font-medium"><NavLink
            to="/career"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : "text-white"
            }
        >
            Career
        </NavLink></li>
        <li className="text-base font-medium"><NavLink
            to="/faq"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : "text-white"
            }
        >
            FAQ
        </NavLink></li>
        <li className="text-base font-medium"><NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : "text-white"
            }
        >
            About
        </NavLink></li>
        <li className="text-base font-medium"><NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : "text-white"
            }
        >
            Contact
        </NavLink></li>


    </>
    return (
        <>
            <div className="navbar bg-[#222222] py-3 px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <FiMenu className='text-2xl text-white'></FiMenu>
                        </label>
                        <ul tabIndex={0} className="menu bg-[#222222] menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className=" text-white hidden lg:block  text-3xl font-bold">ShopMingle</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>

                </div>
                <div className="navbar-center ">
                    <a className="normal-case text-white lg:hidden  text-3xl font-bold">ShopMingle</a>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'}>
                        <a className="btn px-6">Login</a>
                    </Link>

                </div>
            </div>

        </>
    );
};

export default Navbar;