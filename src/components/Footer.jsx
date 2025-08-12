import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
                </p>
                <div className="mt-3 space-x-4">
                    <a  className="hover:text-white">Privacy Policy</a>
                    <a  className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
