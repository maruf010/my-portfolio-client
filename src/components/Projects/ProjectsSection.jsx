import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then(setProjects)
            .catch(console.error);
    }, []);

    return (
        <section
            id="projects"
            className="py-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen"
        >
            <div className="max-w-6xl mx-auto px-4 text-white ">
                <h2 data-aos="fade-up" className="text-center text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                        Recent Work Projects
                    </span>
                </h2>
                <p data-aos="fade-up" className="text-center text-gray-400 mb-12">
                    A collection of projects I've worked on.
                </p>

                <div className="flex flex-col gap-20">
                    {projects.map((proj, idx) => (
                        <div key={proj.id}>
                            <ProjectCard project={proj} reverse={idx % 2 !== 0} />
                            {/* Details Link */}
                            {/* <div data-aos="fade-up" className="text-center mt-6">
                                <Link
                                    to={`projects/${proj.id}`}
                                    className="inline-block px-6 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition"
                                >
                                    View More
                                </Link>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
