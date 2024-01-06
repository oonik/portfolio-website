import { Link } from 'react-router-dom';

const Projects = () => {

    return (
        <div className="mx-10 my-20">
            <h1 className="text-3xl mb-14 lg:text-5xl font-bold text-sky-600 text-center">Portfolio</h1>
            <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
                <div className="card bg-base-100 shadow-xl">
                    <div className='h-full border-y border-blue-200 rounded-2xl'>
                        <img src="https://i.postimg.cc/vmJtCdvS/Screenshot-2024-01-06-183413-1.png" className='p-4' alt="" />
                        </div>
                    <div className="card-body">
                        <ul className='overflow-y-auto no-scrollbar h-28 list-disc list-inside pb-5'>
                            <h2 className="card-title">Luxurious Hotel</h2>
                            <p>Hotel Room Ticket Book Website</p>
                            <li>Here everyone can book a ticket.</li>
                            <li>User login with Google and email and password.</li>
                            <li>User can ticket book and delete</li>
                            <li>Tow dashboard for admin and user</li>
                            <li>Teach Stack: React JS | Node JS | MongoDB Database | Firebase | JWT for Authorization.</li>
                        </ul>
                        <div className="card-actions justify-center">
                            <button className="btn btn-sm border-2  bg-gradient-to-r from-white to-sky-300 bg-white"><Link to="https://luxurious-hotel-ee862.web.app/" target='_blank'>Live Link</Link></button>
                            <button className="btn btn-sm border-2 bg-gradient-to-r from-white to-sky-300 bg-white"><Link to="https://github.com/oonik/luxurious-hotel" target='_blank'>Code Client</Link></button>
                            <button className="btn btn-sm border-2 bg-gradient-to-r from-white to-sky-300 bg-white"><Link to="https://github.com/oonik/luxurious-hotel-server" target='_blank'>Code Server</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className='h-full border-y border-sky-200 rounded-2xl'>
                        <img src="https://i.postimg.cc/vTGthtQP/Screenshot-3.png" className='p-4' alt="" />
                    </div>
                    <div className="card-body">
                        <ul className='overflow-y-auto no-scrollbar h-28 list-disc list-inside pb-5'>
                            <h2 className="card-title">Travel & Tour</h2>
                            <p>Travel Ticket Book Website</p>
                            <li>Everyone can book hotel room ticket.</li>
                            <li>User login with Google and email and password.</li>
                            <li>Users can ticket book and delete</li>
                            <li>Tow dashboard for admin and user</li>
                            <li>Teach Stack: React JS | Node JS | MongoDB Database | Firebase | JWT for Authorization.</li>
                        </ul>
                        <div className="card-actions justify-center">
                            <button className="btn btn-sm border-2 bg-gradient-to-r from-white to-sky-300 bg-white"><Link to="https://lovely-empanada-b05325.netlify.app/" target='_blank'>Live Link</Link></button>
                            <button className="btn btn-sm border-2 bg-gradient-to-r from-white to-sky-300 bg-white"><Link to="https://github.com/oonik/tourist-client-site" target='_blank'>Code Client</Link></button>
                            <button className="btn btn-sm border-2 bg-gradient-to-r from-white to-sky-300 bg-white"><Link to="https://github.com/oonik/tourist-server-side" target='_blank'>Code Server</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className='h-full border-y border-blue-200 rounded-2xl'>
                        <img src="https://i.postimg.cc/0QNVqqMY/Screenshot-2024-01-06-184459-111.png" className='p-4' alt="" />
                        </div>
                    <div className="card-body">
                        <ul className='overflow-y-auto no-scrollbar h-28 list-disc list-inside pb-5'>
                            <h2 className="card-title">Doctor Portal</h2>
                            <p>Book Doctor Appointment website</p>
                            <li>Everyone can book a appointment</li>
                            <li>User login with Google and email and password.</li>
                            <li>User can book appointment and delete</li>
                            <li>Tow dashboard for admin and user</li>
                            <li>Teach Stack: React JS | Node JS | MongoDB Database | Firebase | JWT for Authorization.</li>
                        </ul>
                        <div className="card-actions justify-center">
                            <button className="btn btn-sm border-2 bg-gradient-to-r from-white to-sky-300 bg-white"><Link to="https://gilded-axolotl-ad3e39.netlify.app/" target='_blank'>Live Link</Link></button>
                            <button className="btn btn-sm border-2 bg-gradient-to-r from-white to-sky-300 bg-white"><Link to="https://github.com/oonik/doctors-portal-client" target='_blank'>Code Client</Link></button>
                            <button className="btn btn-sm border-2 bg-gradient-to-r from-white to-sky-300 bg-white"><Link to="https://github.com/oonik/doctors-portal-server" target='_blank'>Code Server</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;