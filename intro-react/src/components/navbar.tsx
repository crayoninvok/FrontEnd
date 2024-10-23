import "./navbar.css"
import { Link } from 'react-router-dom'
import logoNav from '../assets/github.svg'

interface IProps{
    name: string
}

function Navbar(props:IProps){
    return (
        <div className="navbar">
            <img src={logoNav} alt="logoNav" className="logoNav" />
                <div id="tombol">
                    <Link to={'/'} className="home">Home</Link>
                    <Link to={'About'} className="about">About</Link>
                    <Link to={'Contact'} className="contact">Contact</Link>
                </div>
            <p> Halo {props.name}, kembali lagi</p>
        </div>
    )
}

export default Navbar