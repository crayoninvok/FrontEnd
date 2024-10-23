import "./navbar.css"
import { Link } from 'react-router-dom'
import logoNav from '../assets/github.svg'
import user from '../assets/user.svg'

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
            <p><img src={user} alt="user" className="userbutton"/> Halo {props.name}, kembali lagi</p>
        </div>
    )
}

export default Navbar