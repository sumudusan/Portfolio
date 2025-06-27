// src/components/ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="bg-surface text-white rounded-xl p-6 hover:shadow-primary transition duration-300 flex flex-col items-center text-center border-1 shadow-2xl border-accent"
    >
      {icon}
      <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-sm">{desc}</p>
    </motion.div>
  );
}
