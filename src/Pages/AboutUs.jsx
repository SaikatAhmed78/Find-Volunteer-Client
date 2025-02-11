import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import image1 from '../assets/update/manegar.jpg'
import developer from '../assets/update/developer.jpg'
import uideginer from '../assets/update/uideginer.jpg'

const AboutUs = () => {
    return (
        <div className="bg-gray-900 text-white mb-4 rounded-lg">

            <section className="flex flex-col items-center py-20">
                <h1 className="text-4xl font-bold text-center mt-6">
                    About Volunteer Management System
                </h1>
                <p className="text-xl text-center max-w-4xl mt-4 px-4">
                    Volunteer Management System helps organizations efficiently manage
                    volunteer opportunities and enables users to sign up for various
                    volunteering tasks. Our goal is to connect passionate individuals with
                    organizations that are looking to make a positive impact.
                </p>
            </section>


            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-6">Mission & Vision</h2>
                    <p className="text-lg mb-4">
                        Our mission is to create a seamless and accessible platform for
                        both volunteers and organizations, empowering people to make a
                        difference in their communities. We envision a world where volunteer
                        opportunities are easily accessible to everyone.
                    </p>
                </div>
            </section>


            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <img
                                src={image1}
                                alt="Team Member 1"
                                className="w-32 h-32 mx-auto rounded-full"
                            />
                            <h3 className="text-2xl mt-4">John Doe</h3>
                            <p className="text-lg text-gray-400">Project Manager</p>
                        </div>

                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <img
                                src={uideginer}
                                alt="Team Member 2"
                                className="w-32 h-32 mx-auto rounded-full"
                            />
                            <h3 className="text-2xl mt-4">Jane Smith</h3>
                            <p className="text-lg text-gray-400">Developer</p>
                        </div>

                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <img
                                src={developer}
                                alt="Team Member 3"
                                className="w-32 h-32 mx-auto rounded-full"
                            />
                            <h3 className="text-2xl mt-4">Emily Johnson</h3>
                            <p className="text-lg text-gray-400">UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default AboutUs;
