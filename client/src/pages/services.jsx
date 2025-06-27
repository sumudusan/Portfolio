// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaCode, FaServer, FaPaintBrush } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceCard from "../components/serviceCard";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Build responsive, dynamic interfaces with React and Tailwind CSS. Smooth animations with Framer Motion.",
      icon: (
        <div className="text-5xl text-primary-light hover:scale-110 duration-300 animate-bounce">
          <FaCode />
        </div>
      ),
    },
    {
      title: "Backend Development",
      desc: "Develop robust APIs using Node.js, Express, and MongoDB for fast and scalable applications.",
      icon: (
        <div className="text-5xl text-green-400 hover:rotate-6 duration-300 animate-pulse">
          <FaServer />
        </div>
      ),
    },
    {
      title: "UI/UX Design",
      desc: "Craft intuitive user experiences with clean, accessible designs inspired by modern trends.",
      icon: (
        <div className="text-5xl text-pink-400 hover:scale-110 hover:-rotate-6 duration-300 animate-spin-slow">
          <FaPaintBrush />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-background py-16 px-4 sm:px-6 md:px-10 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        My Services
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <SwiperComponent
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                delay={index * 0.2}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/contact"
          className="inline-block bg-accent text-background font-medium px-6 py-3 rounded-full hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-primary"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
