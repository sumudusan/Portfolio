// src/pages/Projects.jsx
import { motion } from "framer-motion";
import ProjectCard from "../components/projectCard";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Responsive portfolio site built with React, Tailwind CSS, and Framer Motion. Features hero, about, and project sections.",
    image: "/projects/portfolio.png",
    link: "https://your-live-demo-url.com",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "Full-stack MERN app with product pages, user auth, cart, and Stripe payments.",
    image: "/projects/ecommerce.png",
    link: "https://your-ecommerce-url.com",
  },
  {
    id: 3,
    title: "E-Commerce App",
    description:
      "Full-stack MERN app with product pages, user auth, cart, and Stripe payments.",
    image: "/projects/ecommerce.png",
    link: "https://your-ecommerce-url.com",
  },
  // Add more projects here
];

export default function Projects() {
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
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
