import { useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaFigma } from "react-icons/fa";
import {
    SiTailwindcss,
    SiMongodb,
    SiJavascript,
    SiExpress,
    SiGit,
    SiPostman,
    SiVercel,
    SiNetlify,
    SiFirebase,
    SiNodedotjs
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const [pausedMarquee, setPausedMarquee] = useState(null);

    const frontendSkills = [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNetlify />, name: "Netlify" },
    ];

    const backendSkills = [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiVercel />, name: "Vercel" },
    ];

    const Marquee = ({ skills, id }) => {
        const loop = [...skills, ...skills];
        return (
            <div className="overflow-hidden py-4">
                <div className={`flex gap-6 min-w-max ${pausedMarquee === id ? "" : "animate-marquee"}`}>
                    {loop.map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center w-28 h-28 
                            bg-gradient-to-br from-purple-800/60 to-pink-700/60 
                            rounded-xl border border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.4)] 
                            text-white text-4xl transition-all duration-300 ease-in-out
                            hover:scale-110 hover:shadow-[0_0_50px_rgba(236,72,153,0.7)] hover:border-pink-400"
                            onMouseEnter={() => setPausedMarquee(id)}
                            onMouseLeave={() => setPausedMarquee(null)}
                        >
                            <div className="transition-colors duration-300 ease-in-out hover:text-pink-400">
                                {skill.icon}
                            </div>
                            <p className="text-sm mt-2">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const SkillCircle = ({ title, skills, direction = "clockwise" }) => {
        const radius = 180;

        return (
            <div className="relative group w-[80vw] max-w-[420px] h-[80vw] max-h-[420px]">
                <div
                    className={`absolute inset-0 ${direction === "clockwise" ? "animate-rotateClockwise" : "animate-rotateCounter"}`}
                    style={{
                        animation: `${direction === "clockwise" ? "rotateClockwise" : "rotateCounter"} 30s linear infinite`,
                    }}
                >
                    {skills.map((_, i) => (
                        <div
                            key={`line-${i}`}
                            className="absolute top-1/2 left-1/2 w-[1px] bg-white/10"
                            style={{
                                height: `${radius}px`,
                                transformOrigin: "top",
                                transform: `rotate(${(360 / skills.length) * i}deg)`,
                            }}
                        ></div>
                    ))}

                    {skills.map((skill, i) => {
                        const angle = (i * 2 * Math.PI) / skills.length;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <div
                                key={i}
                                className="absolute flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
                                bg-[#111827] rounded-full text-white text-3xl sm:text-4xl
                                border border-white/10 hover:border-purple-400 hover:shadow-[0_0_20px_#a855f7]
                                transition-all duration-300"
                                style={{
                                    top: `calc(50% + ${y}px - 32px)`,
                                    left: `calc(50% + ${x}px - 32px)`,
                                    transform: `rotate(${-((360 / skills.length) * i)}deg)`,
                                }}
                            >
                                {skill.icon}
                            </div>
                        );
                    })}
                </div>

                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full
                    bg-[#111827] border border-purple-500 shadow-[0_0_30px_#a855f7]
                    text-white font-semibold text-base sm:text-lg md:text-xl z-10"
                >
                    {title}
                </div>

                <style>
                    {`
                    .group:hover .animate-rotateClockwise,
                    .group:hover .animate-rotateCounter {
                        animation-play-state: paused;
                    }
                    `}
                </style>
            </div>
        );
    };

    const toolsList = [
        { icon: <VscVscode /> },
        { icon: <FaGithub /> },
        { icon: <FaGitAlt /> },
        { icon: <SiPostman /> },
        { icon: <SiVercel /> },
        { icon: <SiNetlify /> },
        { icon: <FaFigma /> },
    ];

    return (
        <section className="py-16  bg-gradient-to-b from-[#24243e] via-[#302b63] to-[#0f0c29] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 data-aos="fade-up" className="text-4xl font-bold text-center text-white mb-12">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                        My Tech Stack
                    </span>
                    
                </h2>

                <div data-aos="fade-up" className="grid lg:grid-cols-3 gap-10 items-center">
                    <Marquee skills={frontendSkills} id="frontend" />

                    <div data-aos="fade-up" className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-24 p-5 lg:p-0">
                        <SkillCircle title="Tools" skills={toolsList} direction="counter" />
                    </div>

                    <Marquee data-aos="fade-left" skills={backendSkills} id="backend" />
                </div>
            </div>

            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                @keyframes rotateClockwise {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes rotateCounter {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                `}
            </style>
        </section>
    );
};

export default Skills;
