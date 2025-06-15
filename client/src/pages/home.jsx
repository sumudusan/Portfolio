import banner from "../assets/2.jpg"
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';


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
          </motion.div>
        </div>
    )
}