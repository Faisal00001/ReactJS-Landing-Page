import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            {/* Navbar component */}
            <Navbar></Navbar>
            {/* Providing outlet to show the child component */}
            <Outlet></Outlet>
            {/* Footer component */}
            <Footer></Footer>
        </div>
    );
};

export default Root;