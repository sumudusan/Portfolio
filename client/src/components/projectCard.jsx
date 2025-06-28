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
      className="w-full max-w-md md:max-w-none bg-surface text-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl shadow-primary transition-all duration-300 flex flex-col"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-sm text-white mb-4 flex-grow">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:underline mt-auto"
        >
          View Project <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}
