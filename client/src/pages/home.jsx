import banner from "../assets/2.jpg";
import AboutImg from "../assets/1.png";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
  FaPaintBrush,
  FaServer,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ProjectCard from "../components/projectCard";
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const projectsRef = useRef(null);
  const isInViews = useInView(projectsRef, { once: true, margin: "-100px" });

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }finally {
      setLoading(false); // Hide spinner
    }
    };

    fetchProjects();
  }, []);

  

  const services = [
    {
      title: "Frontend Development",
      desc: "Responsive web apps using React, Tailwind CSS & animations.",
      icon: (
        <div className="text-5xl text-primary-light transition-transform hover:scale-125 duration-300 animate-bounce">
          <FaCode />
        </div>
      ),
    },
    {
      title: "Backend Development",
      desc: "Node.js, Express, and MongoDB REST APIs for web apps.",
      icon: (
        <div className="text-5xl text-green-400 transition-transform hover:rotate-6 duration-300 animate-pulse">
          <FaServer />
        </div>
      ),
    },
    {
      title: "UI/UX Design",
      desc: "Modern layouts and clean design inspired by Figma.",
      icon: (
        <div className="text-5xl text-pink-400 transition-transform hover:scale-110 hover:-rotate-12 duration-300 animate-spin-slow">
          <FaPaintBrush />
        </div>
      ),
    },
  ];


  return (
    <div className="w-full text-white bg-background">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen">
        <div className="min-h-screen relative bg-surface z-10 flex flex-col md:flex-row gap-8 px-6 justify-center md:pt-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center md:text-left max-w-xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl py-2">Hello, It's me</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2">Sumudu Sandaruwan</h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl py-2">
              I'm a <span className="text-accent">
                <TypeAnimation
                  sequence={[" Web Developer", 2000, " Software Developer", 2000]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <div className="flex justify-center md:justify-start gap-6 text-2xl md:text-3xl mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-blue-500 transition" /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-gray-400 transition" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-400 transition" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-400 transition" /></a>
            </div>
            <div className="mt-8">
              <Link to="/about" className="inline-block bg-accent text-background px-6 py-3 rounded-lg hover:bg-primary hover:text-black transition font-medium shadow-2xl hover:shadow-primary">
                More About Me
              </Link>
            </div>
          </motion.div>
          <div className="flex justify-center">
            <img src={AboutImg} alt="profile" className="w-64 h-64 md:h-[70vh] md:w-auto rounded-full object-cover shadow-2xl border-4 border-white shadow-primary" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 p-6 md:p-10 rounded-xl items-center gap-6">
        <img src={AboutImg} alt="About" className="w-full h-64 md:h-[70vh] object-cover border-accent border-2 rounded-xl" />
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 70 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="bg-surface text-white rounded-xl py-8 px-4 md:px-8"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-center md:text-left">
            I'm <span className="text-accent font-medium">Sumudu Sandaruwan</span>, a web developer passionate about building responsive and functional websites. I’ve recently completed an internship where I worked with real MERN stack projects and practiced full stack development. I enjoy learning new technologies, solving problems, and creating user-friendly web experiences.
          </p>
        </motion.div>
      </div>
{/*-----------------------------------------------------------------------------------------*/}
      {/* Services Section */}
<div className="bg-background py-16 px-6 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Services
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <SwiperComponent
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-surface text-white rounded-xl p-6 hover:shadow-primary transition duration-300 flex flex-col items-center text-center border shadow-2xl border-accent"
                >
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                  <p className="text-sm">{service.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-block bg-accent text-background font-medium px-6 py-3 rounded-full hover:bg-primary shadow-2xl hover:shadow-primary transition duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>

{/*----------------------------------------------------------------------------------------- */}
{/* Projects Section */}
<div className="bg-background py-20 px-6 text-white">
  <motion.h1
    ref={projectsRef}
    initial={{ opacity: 0, y: 70 }}
    animate={isInViews ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1.2 }}
    className="text-4xl font-bold text-center mb-12"
  >
    Recent Projects
  </motion.h1>

  <div className="max-w-6xl mx-auto relative">
     {loading ? (
    <div className="flex justify-center items-center py-10">
      <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
    ) :(<Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: ".custom-swiper-pagination", // custom pagination container selector
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects.map((project) => (
            <SwiperSlide key={project.projectId}>
              <ProjectCard project={project} />
            </SwiperSlide>
      ))}
    </Swiper>
    )}

    {/* Custom Pagination Dots */}
    <div className="custom-swiper-pagination mt-10 flex justify-center gap-3" />

    {/* CTA Button */}
    <div className="text-center mt-12">
      <Link
        to="/projects"
        className="inline-block bg-accent text-background font-semibold px-6 py-3 rounded-full hover:bg-primary shadow-2xl hover:shadow-primary transition-all duration-300"
      >
        See All Projects
      </Link>
    </div>
  </div>
</div>

{/*--------------------------------------------------------------------------------------------- */}

      {/* Contact Section */}
      <div className="py-16 px-4 md:px-6 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 bg-surface rounded-xl shadow-lg overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 p-6 flex flex-col justify-center items-center"
          >
            <img className="w-40 h-40 rounded-2xl bg-white" />
            <p className="my-4 text-center">I’m open to freelance work, collaborations, or just having a chat!</p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2"><FaMapMarkerAlt /><span>Colombo, Sri Lanka</span></div>
              <div className="flex items-center gap-2"><FaEnvelope /><span>sumudu@email.com</span></div>
              <div className="flex items-center gap-2"><FaPhoneAlt /><span>+94 77 123 4567</span></div>
            </div>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-blue-500" /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-gray-400" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-400" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-400" /></a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted! (Integrate with EmailJS or backend)");
            }}
            className="w-full lg:w-2/3 p-6 space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-bold">Let's Discuss Your Project</h2>
            <div className="space-y-1">
              <label className="block font-semibold">Full Name</label>
              <input type="text" required placeholder="John Doe" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light" />
            </div>
            <div className="space-y-1">
              <label className="block font-semibold">Email Address</label>
              <input type="email" required placeholder="you@example.com" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light" />
            </div>
            <div className="space-y-1">
              <label className="block font-semibold">Message</label>
              <textarea rows="5" required placeholder="Type your message here..." className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light"></textarea>
            </div>
            <button type="submit" className="w-full py-3 rounded-3xl bg-accent text-background hover:bg-primary shadow-2xl hover:shadow-primary transition">
              Submit Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
