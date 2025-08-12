import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch(`${import.meta.env.VITE_baseurl}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (data.success) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message");
            }
        } catch (err) {
            console.error(err);
            setStatus("❌ Something went wrong");
        }
    };
    return (
        <section
            id="contact"
            className="py-16 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                        Contact Me
                    </span>
                </h2>
                <p data-aos="fade-up" className="text-center text-gray-300 max-w-xl mx-auto mb-10">
                    I’m always open to discussing new projects, creative ideas, or
                    opportunities to be part of your visions. Feel free to reach out
                    through any of the methods below.
                </p>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
                    <div data-aos="fade-up" className="bg-white/10 p-6 rounded-lg shadow-lg">
                        <FaEnvelope className="text-purple-400 text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=mhbijoy013@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300 hover:text-purple-400"
                        >
                            mhbijoy013@gmail.com
                        </a>

                    </div>

                    <div data-aos="fade-up" className="bg-white/10 p-6 rounded-lg shadow-lg">
                        <FaPhoneAlt className="text-purple-400 text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <a
                            href="tel:+880123456789"
                            className="text-gray-300 hover:text-purple-400"
                        >
                            +8801713847702
                        </a>
                    </div>

                    <div data-aos="fade-up" className="bg-white/10 p-6 rounded-lg shadow-lg">
                        <FaWhatsapp className="text-purple-400 text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                        <a
                            href="https://wa.me/8801713847702"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300 hover:text-purple-400"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-8 max-w-3xl mx-auto">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input
                            data-aos="fade-up"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-white/10 border border-gray-500 focus:outline-none focus:border-purple-400"
                            required
                        />
                        <input
                            data-aos="fade-up"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-white/10 border border-gray-500 focus:outline-none focus:border-purple-400"
                            required
                        />
                        <textarea
                            data-aos="fade-up"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            className="w-full p-3 rounded-lg bg-white/10 border border-gray-500 focus:outline-none focus:border-purple-400"
                            required
                        ></textarea>
                        <div data-aos="fade-up" className="flex justify-end">
                            <button

                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full font-medium hover:opacity-90 ">
                                {status ? <p className=" text-center">{status}</p> : "Send Message"}
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </section>
    );
};

export default Contact;
