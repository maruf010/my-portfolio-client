import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaFigma } from "react-icons/fa";
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiPostman,
    SiVercel,
    SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


// Rotation keyframes
const rotationAnimation = `
@keyframes rotateClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
@keyframes rotateCounter {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
}
`;

const SkillCircle = ({ title, skills, direction = "clockwise" }) => {
    const radius = 180; // distance from center

    return (
        <div className="relative group w-[80vw] max-w-[420px] h-[80vw] max-h-[420px]">
            {/* Rotating container */}
            <div
                className={`absolute inset-0 ${direction === "clockwise" ? "animate-rotateClockwise" : "animate-rotateCounter"
                    }`}
                style={{
                    animation: `${direction === "clockwise" ? "rotateClockwise" : "rotateCounter"
                        } 30s linear infinite`,
                }}
            >
                {/* Connector lines */}
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

                {/* Skill icons */}
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

            {/* Center */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full
                    bg-[#111827] border border-purple-500 shadow-[0_0_30px_#a855f7]
                    text-white font-semibold text-base sm:text-lg md:text-xl z-10"
            >
                {title}
            </div>

            {/* Pause on hover */}
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

const SkillsRadial = () => {
    const skillsList = [
        { icon: <SiHtml5 /> },
        { icon: <SiCss3 /> },
        { icon: <SiTailwindcss /> },
        { icon: <SiJavascript /> },
        { icon: <FaReact /> },
        { icon: <FaNodeJs /> },
        { icon: <SiExpress /> },
        { icon: <SiMongodb /> },
        { icon: <SiFirebase /> },
    ];

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
        <section className="py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
            <style>{rotationAnimation}</style>

            <h2 className="text-4xl font-bold text-center text-white mb-16">
                My Tech Stack
            </h2>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-24">
                <SkillCircle title="Skills" skills={skillsList} direction="clockwise" />
                <SkillCircle title="Tools" skills={toolsList} direction="counter" />
            </div>
        </section>
    );
};

export default SkillsRadial;
