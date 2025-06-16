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
    )
}