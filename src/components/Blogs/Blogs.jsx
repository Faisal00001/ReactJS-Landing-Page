import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const Blogs = () => {
    // Using useState to set the json loaded data in the blogs
    const [blogs, setBlogs] = useState([])
    // Initial AOS
    useEffect(() => {
        Aos.init()
    })
    // Fetch the json data
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])
    return (
        <div>
            <div className="bg-gray-100 font-sans">
                {/* Header Section */}
                <header className="bg-white p-4 shadow-md">
                    <div className="container mx-auto">
                        <h1 data-aos="fade-up" data-aos-duration="600" className="text-3xl font-semibold text-gray-800 text-center">Our Blogs</h1>
                    </div>
                </header>

                {/* Blog Post Section */}
                <section className="container mx-auto mt-8 px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {/* Blog Post  */}
                        {/* using map to get a particular job and key to unique identifier */}
                        {

                            blogs.map((blog, index) => <div data-aos="flip-right" data-aos-duration="600" key={index} className="bg-white rounded-lg shadow-md">
                                <img src={blog.image} alt="Blog Post 1" className="w-full h-48 object-cover object-center" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                                    <p className="text-gray-600 mt-2">{blog.shortDescription}</p>
                                    <a href="blog-post-1.html" className="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
                                </div>
                            </div>)
                        }

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blogs;