import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import { CgDetailsMore } from "react-icons/cg";


const ProjectCard = ({ project, reverse }) => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div
            className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Image Slider */}
            <div data-aos="fade-right" className="md:w-1/2 w-full overflow-hidden rounded-lg shadow-lg p-0 relative">
                <Slider {...sliderSettings}>
                    {project.images.map((img, idx) => (
                        <div key={idx} className="relative group hover:opacity-80">
                            <img
                                src={img}
                                alt={project.title}
                                className="w-full h-72 rounded-lg"
                            />
                            {/* Live Demo Button on hover */}
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300  font-semibold rounded-lg  text-purple-400 text-xl"
                            >
                                Live Demo
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Content */}
            <div data-aos="fade-left" className="md:w-1/2 w-full text-white flex flex-col">
                <h3 data-aos="fade-left" className="text-2xl font-bold mb-3">{project.title}</h3>
                <p data-aos="fade-left" className="bg-white/5 backdrop-blur-md p-4 rounded-lg text-gray-300 leading-relaxed flex-grow">
                    {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div data-aos="fade-left" className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium shadow"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* GitHub and Live Links large display */}
                <div className="hidden lg:flex gap-4 mt-5">
                    <a
                        data-aos="fade-up"
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
                    >
                        <FaGithub /> GitHub
                    </a>
                    <a
                        data-aos="fade-up"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-600 hover:bg-pink-700 rounded text-white font-semibold transition"
                    >
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                    <Link
                        data-aos="fade-up"
                        to={`projects/${project.id}`}
                        className=""
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold transition">
                            <CgDetailsMore />
                            View More
                        </div>
                    </Link>
                </div>
                {/* GitHub and Live Links small display */}
                <div className="flex lg:hidden justify-end gap-4 mt-6">
                    <a
                        data-aos="fade-up"
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center  md:px-3 py-1 lg:py-2 rounded text-white font-semibold transition"
                    >
                        <FaGithub size={25} />
                    </a>
                    <a
                        data-aos="fade-up"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center md:px-3 py-1 lg:py-2 rounded text-white font-semibold transition"
                    >
                        <FaExternalLinkAlt size={25} />
                    </a>
                    <Link
                        to={`projects/${project.id}`}>
                        <div data-aos="fade-up" className="inline-flex items-center md:px-3 py-1 lg:py-2 rounded text-white font-semibold transition">
                            <CgDetailsMore size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
