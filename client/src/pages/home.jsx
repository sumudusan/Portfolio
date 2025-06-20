import AboutImg from "../assets/1.png";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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
            <img 
             src={banner}
             alt="banner image"
             className="w-full object-cover"
            />
          </div>

        {/* Hero Content */}
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-1 md:grid-cols-2 items-center px-8">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="flex-row top-40 absolute pl-10 font-bold">
            <h1 className="text-3xl py-2">Hello, It's me</h1>
            <h1 className="text-5xl py-2">Sumudu Sandaruwan</h1>
             <h1 className="text-3xl py-2 ">I'm a
                <span className="text-primary-light">
                <TypeAnimation
                  sequence={[
                    " Web Developer", 2000,
                    " Software Developer", 2000
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                />
                </span>
              </h1>

            {/* Social Media Icons */}
            <div className="flex gap-6 text-3xl mt-6">
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

            {/* More About Me Link */}
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300 font-medium"
              >
                More About Me
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <div className="flex justify-center z-10">
            <img
              src={AboutImg}
              alt="profile"
              className="h-[70vh] w-auto rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

{/*----------------------------------------------------------------------------------------- */}
      {/* About Section */}
      <div className="grid md:grid-cols-2">
        <img
          src={AboutImg}
          alt="About image"
          className="w-full object-cover h-[60vh] md:h-screen"
        />

        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 70 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-black flex flex-col justify-center items-center bg-white py-12 px-6 md:px-16"
        >
          <h1 className="text-3xl font-semibold mb-5">About Me</h1>
          <p className="text-lg max-w-[600px] text-center">
            This week covered the company introduction and the basics of HTML structure. I learned about essential tags like headings, paragraphs, links, and images. Hands-on practice involved creating simple webpages that followed semantic guidelines. I also practiced styling using Tailwind CSS and worked on responsiveness.
          </p>
        </motion.div>
      </div>
{/*---------------------------------------------------------------------------------------- */}
        {/* My Services Section */}
<div className="bg-[#0f172a] py-16 px-6 text-white">
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
      {[
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
      ].map((service, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white text-black rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
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
      className="inline-block bg-primary-light text-white font-medium px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
    >
      Hire Me
    </Link>
  </div>
</div>


{/*----------------------------------------------------------------------------------------- */}
         {/* Projects Section */}
<div className="min-h-screen bg-[#0f172a] py-16 px-6 text-white relative">
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
    {/* Custom navigation buttons */}
    <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/10 hover:bg-white/20 p-2 rounded-full hidden md:flex">
      <ArrowLeftIcon className="w-6 h-6 text-white" />
    </div>
    <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/10 hover:bg-white/20 p-2 rounded-full hidden md:flex">
      <ArrowRightIcon className="w-6 h-6 text-white" />
    </div>

    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        clickable: true,

      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation, Pagination]}
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
    <div className="swiper-pagination mt-6 flex justify-center gap-3" />

    {/* See All Projects Button */}
    <div className="text-center mt-12">
      <Link
        to="/projects"
        className="inline-block bg-white text-[#0f172a] font-semibold px-6 py-3 rounded-full hover:bg-primary-light hover:text-white transition-all duration-300"
      >
        See All Projects
      </Link>
    </div>
  </div>
</div>

{/*--------------------------------------------------------------------------------------- */}
<div className="min-h-screen bg-[#0f172a] text-white py-15 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full flex gap-10 bg-white text-black rounded-xl shadow-lg overflow-hidden">
        
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
          <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Let's Discuss Your Project</h2>

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
            className="bg-primary-light text-white px-6 py-3 rounded-md hover:bg-[#0f172a] transition duration-300"
          >
            Submit Message
          </button>
        </motion.form>
      </div>
    </div>


    </div>
  );
}
