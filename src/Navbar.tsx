import './Style.css';
import logo from './assets/zap.svg';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar bg-rose-500 px-5 md:px-10 flex justify-between items-center fixed top-0 w-full z-10">
            <div className='flex-none'>
                <img src={logo} alt="logo" className="w-8 h-8" />
            </div>
            <div className='hidden md:flex flex-1 justify-center gap-5'>
                <li className="btn btn-ghost text-lg md:text-xl">
                    <Link to="/">Home</Link>
                </li>
                <li className="btn btn-ghost text-lg md:text-xl">
                    <Link to="About">About</Link>
                </li>
                <li className="btn btn-ghost text-lg md:text-xl">
                    <Link to="Contact">Contact</Link>
                </li>
            </div>
            <label className="swap swap-flip text-3xl md:text-3xl">
                <input type="checkbox" />
                <div className="swap-on">🌞</div>
                <div className="swap-off">🌜</div>
            </label>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex flex-1 justify-end">
                <label htmlFor="menu-toggle" className="cursor-pointer text-3xl">
                    ☰
                </label>
                <input type="checkbox" id="menu-toggle" className="hidden" />
                <div className="absolute right-0 bg-rose-500 p-4 hidden" id="menu-dropdown">
                    <li className="btn btn-ghost text-lg">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="btn btn-ghost text-lg">
                        <Link to="About">About</Link>
                    </li>
                    <li className="btn btn-ghost text-lg">
                        <Link to="Contact">Contact</Link>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
