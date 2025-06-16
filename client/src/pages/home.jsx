import banner from "../assets/2.jpg"
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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

          {/*Text*/}
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
          </motion.div>
        </div>
    )
}