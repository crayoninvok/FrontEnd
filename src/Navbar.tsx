import { useState } from 'react';
import './Style.css';
import logo from './assets/zap.svg';
import { Link } from "react-router-dom";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); 



    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar bg-transparent px-5 md:px-10 flex justify-between items-center top-0 w-full z-10 fixed">
            <div className='flex-none'>
                <img src={logo} alt="logo" className="w-8 h-8" />
            </div>


            <ul className='hidden md:flex flex-1 justify-center gap-5 text-black'>
                <li className="btn btn-ghost text-lg md:text-xl">
                    <Link to="Home">Home</Link>
                </li>
                <li className="btn btn-ghost text-lg md:text-xl">
                    <Link to="About">About</Link>
                </li>
                <li className="btn btn-ghost text-lg md:text-xl">
                    <Link to="Contact">Contact</Link>
                </li>
            </ul>

 



            <div className="md:hidden flex flex-1 justify-end relative z-30">
                <button 
                    onClick={toggleMenu} 
                    className="cursor-pointer text-2xl px-2 py-1 text-black font-bold">
                    ☰
                </button>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <ul className="absolute right-0 top-full mt-1 text-black p-4 rounded shadow-lg flex flex-col gap-2 w-40 z-30 backdrop-blur-md">
                        <li className="btn btn-ghost text-lg">
                            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="btn btn-ghost text-lg">
                            <Link to="About" onClick={() => setMenuOpen(false)}>About</Link>
                        </li>
                        <li className="btn btn-ghost text-lg">
                            <Link to="Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Navbar;
