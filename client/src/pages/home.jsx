import AboutImg from "../assets/1.png";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home(){

    return(
        <div className=" w-full min-h-screen text-white">
            {/*banner image*/}
          <div className="relative  ">
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


