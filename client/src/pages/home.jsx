import banner from "../assets/2.jpg";
import AboutImg from "../assets/1.png";
import { motion , useInView } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaCode, FaPaintBrush, FaServer, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ProjectCard from "../components/projectCard";
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation , Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import 'swiper/css/pagination';

export default function Home() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const projectsRef = useRef(null);
  const isInViews = useInView(projectsRef, { once: true, margin: "-100px" })

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
    title: "Portfolio Website",
    description:
      "Responsive portfolio site built with React, Tailwind CSS, and Framer Motion. Features hero, about, and project sections.",
    image: "/projects/portfolio.png",
    link: "https://your-live-demo-url.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Responsive portfolio site built with React, Tailwind CSS, and Framer Motion. Features hero, about, and project sections.",
    image: "/projects/portfolio.png",
    link: "https://your-live-demo-url.com",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Responsive portfolio site built with React, Tailwind CSS, and Framer Motion. Features hero, about, and project sections.",
    image: "/projects/portfolio.png",
    link: "https://your-live-demo-url.com",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Responsive portfolio site built with React, Tailwind CSS, and Framer Motion. Features hero, about, and project sections.",
    image: "/projects/portfolio.png",
    link: "https://your-live-demo-url.com",
  },
];

  return (
    <div className="w-full text-white bg-background">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen">
        {/*<img
          src={banner}
          alt="banner"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />*/}
  

        <div className="min-h-screen relative bg-surface z-10 flex flex-col md:flex-row  gap-8 px-6  justify-center md:pt-24">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center md:text-left max-w-xl pl-10"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl py-2">Hello, It's me</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2">Sumudu Sandaruwan</h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl py-2">
              I'm a {" "}
              <span className="text-accent">
                <TypeAnimation
                  sequence={[" Web Developer", 2000, " Software Developer", 2000]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                />
              </span>
            </h1>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 text-2xl md:text-3xl mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-blue-500 transition duration-300" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-400 transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-400 transition duration-300" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block bg-accent text-background px-6 py-3 rounded-lg hover:bg-primary hover:text-black transition duration-300 font-medium hover:shadow-2xl shadow-primary"
              >
                More About Me
              </Link>
            </div>
          </motion.div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end pr-5">
            <img
              src={AboutImg}
              alt="profile"
              className=" md:h-[70vh] md:w-auto rounded-full object-cover shadow-2xl border-4 border-white shadow-primary"
            />
          </div>
        </div>
      </div>

{/*----------------------------------------------------------------------------------------- */}
      {/* About Section */}
      <div className="grid md:grid-cols-2 p-10 rounded-xl md:h-screen items-center">
        <img
          src={AboutImg}
          alt="About image"
          className="md:h-[70vh] md:w-90 object-cover h-[60vh] mx-12 border-accent border-1"
        />

        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 70 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-white flex flex-col justify-center items-center md:h-110 bg-surface py-12 px-6 md:px-16 rounded-xl"
        >
          <h1 className="text-3xl font-semibold mb-5">About Me</h1>
          <p className="text-lg max-w-[600px] text-center">
            This week covered the company introduction and the basics of HTML structure. I learned about essential tags like headings, paragraphs, links, and images. Hands-on practice involved creating simple webpages that followed semantic guidelines. I also practiced styling using Tailwind CSS and worked on responsiveness.
          </p>
        </motion.div>
      </div>
{/*---------------------------------------------------------------------------------------- */}
        {/* My Services Section */}
<div className="bg-background py-16 px-6 text-white md:h-screen">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="text-4xl font-bold text-center mb-12"
  >
    My Services
  </motion.h2>

  <div className="max-w-4xl mx-auto ">
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
      {[
        {
          title: "Frontend Development",
          desc: "Responsive web apps using React, Tailwind CSS & animations.",
          icon: (
            <div className="text-5xl text-primary-light transition-transform hover:scale-125 duration-300 animate-bounce ">
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
      ].map((service, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-surface text-white rounded-xl p-6 hover:shadow-primary transition duration-300 flex flex-col items-center text-center border-1 shadow-2xl border-accent"
          >
            {service.icon}
            <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
            <p className="text-sm">{service.desc}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </SwiperComponent>
  </div>

  {/* CTA Button */}
  <div className="text-center mt-12">
    <Link
      to="/contact"
      className="inline-block bg-accent text-background font-medium px-6 py-3 rounded-full hover:bg-primary shadow-2xl hover:shadow-primary  transition duration-300"
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
    <Swiper
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
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>

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


{/*--------------------------------------------------------------------------------------- */}
<div className="min-h-screen bg-background text-white py-15 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full flex gap-10 bg-surface text-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=" w-1/3  p-8 md:px-12 md:py-8 flex flex-col justify-center items-center"
        >
          <img
           className="w-40 h-40 rounded-2xl"
          />
          
          <p className="mb-6 text-center">I’m open to freelance work, collaborations, or just having a chat!</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl" />
              <span>Colombo, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl" />
              <span>sumudu@email.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl" />
              <span>+94 77 123 4567</span>
            </div>
            {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-6 text-2xl md:text-3xl mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="hover:text-blue-500 transition duration-300" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-gray-400 transition duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-blue-400 transition duration-300" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-pink-400 transition duration-300" />
                </a>
              </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message submitted! (You can integrate with EmailJS or backend)");
          }}
          className="p-8 w-2/3 md:p-12 space-y-6"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Let's Discuss Your Project</h2>

          <div className="space-y-1">
            <label className="block font-semibold">Full Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-semibold">Email Address</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-semibold">Message</label>
            <textarea
              rows="5"
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-light outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-accent text-background w-full py-3 rounded-3xl hover:bg-primary shadow-2xl hover:shadow-primary  transition duration-300"
          >
            Submit Message
          </button>
        </motion.form>
      </div>
    </div>


    </div>
  );
}
