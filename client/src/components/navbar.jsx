import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ for page routing


export default function Navbar(){
 
    const [open , setOpen] = useState(false)
    const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
];

    return(
        <nav className=" bg-black/20 fiexed top-0  w-full  border-b shadow-md ">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white">
            <div>
             <Link to="/">
              <h1 className="text-text-main text-3xl font-bold cursor-pointer">Portfolio</h1>
             </Link>
            </div>
            
            
            <ul className="hidden md:flex gap-6 text-text-main">
                {
                navLinks.map(({ label, path })=>(
                    <li key={label}>
                        <Link to={path} className="transition-transform duration-300 transform hover:rotate-6 hover:shadow-2xs shadow-primary hover:text-primary">{label}</Link>
                    </li>
                ))}
            </ul>

            <div className="md:hidden text-2xl text-text-main" onClick={()=> setOpen(!open)}>
                {open ? '✖' : '☰'}
            </div>
          </div>
            
            {open && (
                <div className="md:hidden bg-background text-text-main px-6 pb-4">
                {
                navLinks.map(({ label, path })=>(
                    <Link key={label}
                        to={path}
                        onClick={()=> setOpen(false)}
                        className="block py-2 text-lg border-b border-gray-100 hover:text-primary text-white shadow-2xs hover:shadow-primary cursor-pointer"
                    >
                        {label}
                    </Link>
                ))}
            </div>
            )}
        </nav>
    )
}