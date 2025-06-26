import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGraduationCap, FaCogs } from "react-icons/fa";
import AboutImg from "../assets/1.png";

export default function About() {
  return (
    <div className="bg-background text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <motion.img
          src={AboutImg}
          alt="About Me"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl shadow-2xl border-2 border-accent object-cover w-full max-h-[500px]"
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6 text-gray-300 leading-relaxed">
            Hi, I'm <span className="text-accent font-semibold">Sumudu Sandaruwan</span>, a passionate web developer who loves building responsive, modern websites and applications. I recently completed an internship where I worked with real MERN stack projects and gained hands-on experience with frontend and backend development.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <FaLaptopCode className="text-accent text-2xl" />
              <div>
                <h4 className="text-xl font-semibold">Full Stack Skills</h4>
                <p className="text-sm text-gray-400">
                  I work with <span className="text-white">React.js, Node.js, Express, MongoDB</span> and design beautiful interfaces using <span className="text-white">Tailwind CSS</span>. I also manage code with Git and GitHub.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaGraduationCap className="text-accent text-2xl" />
              <div>
                <h4 className="text-xl font-semibold">Continuous Learner</h4>
                <p className="text-sm text-gray-400">
                  I stay updated with new tools and frameworks, and enjoy learning by building real projects and solving coding challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaCogs className="text-accent text-2xl" />
              <div>
                <h4 className="text-xl font-semibold">Problem Solver</h4>
                <p className="text-sm text-gray-400">
                  Whether it’s debugging, designing, or deploying — I enjoy overcoming technical challenges and improving performance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
