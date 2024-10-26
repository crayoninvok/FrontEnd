import './Style.css';
import logo from './assets/zap.svg';
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div className="navbar bg-rose-500 px-10 flex justify-center fixed top-0 w-full z-10">
        <div className='flex-none'><img src={logo} alt="logo" style={{ width: '35px', height: '35px'}}/>
            </div>
            <div className='flex-1 flex justify-center gap-5 mr-[-100px]'>
            <li className="btn btn-ghost text-xl" ><Link to="/">Home</Link></li>
            <li className="btn btn-ghost text-xl"><Link to="About">About</Link></li>
            <li className="btn btn-ghost text-xl"><Link to="Contact">Contact</Link></li>
            </div>

                <label className="swap swap-flip text-9xl">
                    <input type="checkbox"/>
                    <div className="swap-on text-4xl">(●'◡'●)</div>
                    <div className="swap-off text-4xl">╰(*°▽°*)╯</div>
                </label>
        </div>
    
    )
}

export default Navbar



