import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-15 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full flex gap-10 bg-white text-black rounded-xl shadow-lg overflow-hidden">
        
        {/* Left Side - Contact Info */}
        <motion.div
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
  );
}
