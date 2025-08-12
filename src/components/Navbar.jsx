import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Outside click handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-0 w-full bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-lg z-50">
            <div className="lg:max-w-7xl mx-auto px-4 md:px-8 lg:px-0 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <img className="h-8 w-8" src="mhlogo.png" alt="Logo" />
                        <span className="text-white font-bold text-lg">Portfolio</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-5 lg:space-x-8  text-white font-medium">
                    <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">About</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">Contact</Link></li>
                    <li className="">
                        <a
                            href="/Resume.pdf"
                            download
                            className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full font-medium hover:opacity-85 transition"
                        >
                            Get Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Fade Overlay */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 ${isOpen ? "opacity-50" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Mobile Menu (Right side slide) */}
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-64 bg-[#24243e] text-white transform transition-transform duration-300 ease-in-out shadow-lg z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-5 flex justify-end">
                    <button
                        className="text-3xl font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        ×
                    </button>
                </div>
                <ul className="flex flex-col items-start space-y-6 px-6 text-lg">
                    <li><Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
                    <li>
                        <a
                            href="/qqq.pdf"
                            download
                            onClick={() => setIsOpen(false)}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-2 rounded-full font-medium hover:opacity-90"
                        >
                            Get Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
