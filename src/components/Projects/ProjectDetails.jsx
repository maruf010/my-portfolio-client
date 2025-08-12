import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Loading from "../Loading/Loading";

const ProjectDetails = () => {
    const { id } = useParams();
    const projectId = Number(id);
    const [project, setProject] = useState(null);

    // For syncing sliders
    const [mainSlider, setMainSlider] = useState(null);
    const [thumbSlider, setThumbSlider] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => {
                const proj = data.find((p) => p.id === projectId);
                setProject(proj);
            })
            .catch(console.error);
    }, [projectId]);

    if (!project) return <Loading />;

    const mainSettings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        asNavFor: thumbSlider
    };

    const thumbSettings = {
        slidesToShow: Math.min(project.images.length, 5),
        slidesToScroll: 1,
        asNavFor: mainSlider,
        focusOnSelect: true,
        centerMode: true,
        swipeToSlide: true,
        arrows: false
    };

    const gradientHeading =
        "bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text";

    return (
        <section className="bg-gradient-to-b from-[#17143a] via-[#302b63] to-[#24243e]">
            <div className="max-w-4xl mx-auto p-6 text-white min-h-screen">
                <Link
                    to="/"
                    className="inline-block mb-8 text-purple-400 hover:text-purple-600 transition"
                >
                    &larr; Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

                {/* Main Slider */}
                <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                    <Slider {...mainSettings} ref={(slider) => setMainSlider(slider)}>
                        {project.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${project.title} screenshot ${idx + 1}`}
                                className="w-full h-80 md:h-96 "
                            />
                        ))}
                    </Slider>
                </div>

                {/* Thumbnail Slider */}
                <div className="mb-8">
                    <Slider {...thumbSettings} ref={(slider) => setThumbSlider(slider)}>
                        {project.images.map((img, idx) => (
                            <div key={idx} className="px-1">
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="h-20 w-50 object-cover rounded cursor-pointer border-2 border-transparent hover:border-pink-500 transition"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Description */}
                <p className="mb-6 bg-white/10 p-6 rounded-lg leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <h2 className={`text-2xl font-bold mb-3 ${gradientHeading}`}>
                    Main Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.techStack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Live Project Link */}
                <h2 className={`text-2xl font-bold mb-3 ${gradientHeading}`}>
                    Live Project
                </h2>
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded text-white font-semibold mb-8 transition"
                >
                    <FaExternalLinkAlt />
                    Visit Live
                </a>

                {/* GitHub Client Repo */}
                <h2 className={`text-2xl font-bold mb-3 ${gradientHeading}`}>
                    GitHub Repository (Client)
                </h2>
                <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold mb-8 transition"
                >
                    <FaGithub />
                    View on GitHub
                </a>

                {/* Challenges Faced */}
                <h2 className={`text-2xl font-bold mb-3 ${gradientHeading}`}>
                    Challenges Faced
                </h2>
                <p className="mb-8">{project.challenges}</p>

                {/* Potential Improvements */}
                <h2 className={`text-2xl font-bold mb-3 ${gradientHeading}`}>
                    Potential Improvements & Future Plans
                </h2>
                <p>{project.improvements}</p>
            </div>
        </section>
    );
};

export default ProjectDetails;
