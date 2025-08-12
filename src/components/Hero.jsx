import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

import img from "../assets/pic.jpeg";

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-gradient-to-r from-[#141037] via-[#302b63] to-[#141037] text-white px-6 pt-20"
        >
            <div className="max-w-7xl lg:mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen">
                {/* Left Side */}
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    className="flex-1 text-center md:text-left space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Hi, I’m{" "}
                        <span className="text-purple-400">
                            <Typewriter
                                words={["Maruf Hossain"]}
                                loop={false}
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>

                    <h2 className="text-2xl text-purple-300 font-semibold">
                        <Typewriter
                            words={[
                                "Frontend Developer",
                                "MERN Stack Developer",
                            ]}
                            loop={0}
                            typeSpeed={80}
                            deleteSpeed={60}
                            delaySpeed={2000}
                        />
                    </h2>

                    <p className="max-w-lg mx-auto md:mx-0 text-gray-300">
                        I’m a passionate Frontend Developer who loves creating responsive,
                        user-friendly websites. I focus on clean code, efficient
                        design, and smooth user experiences.
                    </p>

                    {/* Buttons */}
                    <div
                        data-aos="fade-down"
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="/Resume.pdf"
                            download
                            className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full font-medium transition hover:opacity-90"
                        >
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="border border-purple-400 px-6 py-3 rounded-full font-medium hover:bg-purple-500/20 transition"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center md:justify-start text-2xl mt-5">
                        <a
                            data-aos="fade-right"
                            href="https://github.com/maruf010"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub className="transition hover:text-purple-400" />
                        </a>
                        <a
                            data-aos="fade-right"
                            href="https://www.linkedin.com/in/maruf010/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin className="transition hover:text-purple-400" />
                        </a>
                        <a
                            data-aos="fade-right"
                            href="https://x.com/maruf010MD"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaSquareXTwitter className="transition hover:text-purple-400" />
                        </a>
                    </div>
                </div>

                {/* Right Side (Photo) */}
                <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    className="mb-10 md:mb-0 md:flex-1 flex justify-center mt-10 md:mt-0"
                >
                    <img
                        src={img}
                        alt="Profile"
                        className="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full  border-4 border-purple-400 shadow-[0_0_30px_#a855f7]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
