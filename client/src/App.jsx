import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Services from "./pages/services";

export default function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <BrowserRouter>
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Navbar />
        </div>

        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services/>}/>
          </Routes>
        </div>
        <div>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}
