import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/messages", formData);
      toast.success(" Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(" Failed to send message.");
    }
  };

  return (
    <div className="py-16 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto text-white flex flex-col lg:flex-row gap-6 bg-surface rounded-xl shadow-lg overflow-hidden">
        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/3 p-6 flex flex-col justify-center items-center"
        >
          <img className="w-40 h-40 rounded-2xl bg-white" />
          <p className="my-4 text-center">
            I’m open to freelance work, collaborations, or just having a chat!
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>Colombo, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>sumudu@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+94 77 123 4567</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-400" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="w-full lg:w-2/3 p-6 space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold">Let's Discuss Your Project</h2>

          <div className="space-y-1">
            <label className="block font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light text-black"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light text-black"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-3xl bg-accent text-background hover:bg-primary shadow-2xl hover:shadow-primary transition"
          >
            Submit Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
