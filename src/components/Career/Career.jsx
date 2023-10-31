import { useEffect, useState } from "react";


const Career = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    return (
        <div>
            <section className="bg-blue-900 text-white py-8 mt-10">
                <div className="container mx-auto text-center ">
                    <h1 className="text-4xl font-bold">Join Our Team</h1>
                    <p className="text-lg mt-4">Explore exciting career opportunities with us.</p>
                </div>
            </section>
            <section className="bg-gray-100 py-12 px-5">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Current Job Openings</h2>
                    {
                        jobs.map((job) => <div key={job.id} className="bg-white p-6 rounded-lg shadow-md mb-4">
                            <h3 className="text-xl font-semibold text-blue-900">{job.jobTitle}</h3>
                            <p className="text-gray-600">We are looking for a talented front-end developer to join our team.</p>
                            <p className="text-gray-600">Location: Anytown, USA</p>
                            <button className="bg-blue-500 mt-5 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700">View Details</button>
                        </div>)
                    }

                </div>
            </section>
        </div>
    );
};

export default Career;