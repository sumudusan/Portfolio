// src/components/ProjectCard.jsx
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white text-black rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          View Project <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}
