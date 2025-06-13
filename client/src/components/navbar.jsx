import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar(){
 
    const [open , setOpen] = useState(false)
    const navLinks = ['Home' , 'About' , 'Projects' , 'Skills' , 'Contact'];

    return(
        <nav className="bg-surface fiexed top-0  w-full  border-b shadow-md ">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
            <h1 className="text-text-main text-2xl font-bold">Portfolio</h1>
            <ul className="hidden md:flex gap-6 text-text-main">
                {
                navLinks.map((link=>(
                    <li key={link}>
                        <Link>{link}</Link>
                    </li>
                )))
                }
            </ul>
          </div>
            
        </nav>
    )
}