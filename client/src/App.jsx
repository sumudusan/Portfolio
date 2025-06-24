import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Projects from "./pages/projects";

export default function App(){

  return(
    
    
     <div>
      <BrowserRouter>
      <div
              className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out"
              }`}
            >
              <Navbar />
            </div>
      <div className="">    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      </div>  
      </BrowserRouter>
    </div>
    
  )
}