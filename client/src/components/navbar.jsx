import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar(){
 
    const [open , setOpen] = useState(false)
    const navLinks = ['Home' , 'About' , 'Projects' , 'Skills' , 'Contact'];

    return(
        <nav className="bg-surface fiexed top-0  w-full  border-b shadow-md ">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
           <Link to="/">
            <h1 className="text-text-main text-2xl font-bold cursor-pointer">Portfolio</h1>
           </Link>
            
            <ul className="hidden md:flex gap-6 text-text-main">
                {
                navLinks.map((link=>(
                    <li key={link}>
                        <Link>{link}</Link>
                    </li>
                )))
                }
            </ul>

            <div className="md:hidden text-2xl text-text-main" onClick={()=> setOpen(!open)}>
                {open ? '✖' : '☰'}
            </div>
          </div>
            
            {open && (
                <div className="md:hidden  text-text-main px-6 pb-4">
                {
                navLinks.map((link=>(
                    <Link key={link}
                        onClick={()=> setOpen(false)}
                        className="block py-2 text-lg border-b border-gray-100 hover:text-text-muted cursor-pointer"
                    >
                        {link}
                    </Link>
                )))
                }
            </div>
            )}
        </nav>
    )
}