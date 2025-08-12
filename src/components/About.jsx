import React from "react";
import img from "../assets/pic2.jpg"

const About = () => {
    return (
        <section id="about" className="py-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white m-0">
            <div className="max-w-6xl mx-auto px-6">
                <div  data-aos="fade-up" className="text-center mb-8">
                    <span className="text-3xl font-bold  bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                        About Me
                    </span>
                </div>
                <div className="md:flex items-center gap-10">
                    {/* Image */}
                    <img
                        data-aos="fade-right"
                        src={img}
                        alt="About Me"
                        className="w-72 h-72 object-cover rounded-lg shadow-lg mx-auto md:mx-0"
                    />
                    {/* Text */}
                    <div data-aos="fade-left" className="space-y-4 bg-white/5 backdrop-blur-md p-4 rounded-lg text-gray-300 mt-10 md:mt-0">
                        <p>
                            I’m a passionate Frontend developer who started my programming
                            journey in 2024. I specialize in creating responsive and
                            user-friendly web applications with modern tools like React and
                            Tailwind CSS.
                        </p>
                        <p>
                            I enjoy crafting clean and efficient designs, solving real-world
                            problems, and continuously learning new technologies. Also, I am learning about Next.js and TypeScript.
                        </p>
                        <p>
                            Outside of programming, I love playing Cricket, football, reading tech
                            blogs, and exploring new places.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
