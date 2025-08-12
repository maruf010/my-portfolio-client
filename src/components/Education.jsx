import React from "react";

const Education = () => {
    return (
        <section id="education" className="py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Education</h2>
                <div className="border-l-4 border-purple-500 pl-6 space-y-8">
                    <div data-aos="fade-left">
                        <h3 className="text-xl font-semibold">B.Sc in Computer Science & Engineering (Running)</h3>
                        <p className="text-gray-400">Bangladesh University of Business and Technology — Start at January 2025</p>
                    </div>
                    <div data-aos="fade-left">
                        <h3 className="text-xl font-semibold">Diploma in Computer Technology (Completed)</h3>
                        <p className="text-gray-400">Rajshahi Polytechnic Institute — 2019 - 2023</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
