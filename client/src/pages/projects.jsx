// src/pages/Projects.jsx
import { motion } from "framer-motion";
import ProjectCard from "../components/projectCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-background  py-16 px-6 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h1>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
}
