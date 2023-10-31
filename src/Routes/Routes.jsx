import {
    createBrowserRouter,
} from "react-router-dom";
import AboutDetails from "../Pages/AboutDetails/AboutDetails";
import BlogsDetails from "../Pages/BlogsDetails/BlogsDetails";
import ContactDetails from "../Pages/ContactDetails/ContactDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FaqDetails from "../Pages/FaqDetails/FaqDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductsDetails/ProductDetails";
import Register from "../Pages/Register/Register";
import TestimonialsDetails from "../Pages/TestimonialsDetails/TestimonialsDetails";
import UpcomingProductDetails from "../Pages/UpcomingProductsDetails/UpcomingProductDetails";
import Root from "../Root/Root";
import Career from "../components/Career/Career";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // Providing this if user goes any false route then use show an error page
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "/upcomingProducts",
                element: <UpcomingProductDetails></UpcomingProductDetails>
            },
            {
                path: "/blog",
                element: <BlogsDetails></BlogsDetails>
            },
            {
                path: '/testimonials',
                element: <TestimonialsDetails></TestimonialsDetails>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/faq',
                element: <FaqDetails></FaqDetails>
            },
            {
                path: '/about',
                element: <AboutDetails></AboutDetails>
            },
            {
                path: "/contact",
                element: <ContactDetails></ContactDetails>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    },
]);
export default router