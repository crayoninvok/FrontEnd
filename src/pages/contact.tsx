import "../components/contact.css"
import foto from "../assets/orang.png"
import fb from "../assets/facebook.svg"
import tw from "../assets/twitter.svg"
import ig from "../assets/instagram.svg"

function Contactpage(){
    return(
    <div id="container2">
        <div className="box1">
            <h1 className="aboutme">ABOUT ME</h1>
            <p className="lorem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est quaerat eveniet laboriosam at sunt quam. Aspernatur in, odio tempore eveniet, doloremque et necessitatibus quibusdam deleniti est molestiae consequatur accusantium.</p>
        </div> 
        <div className="box2">
            <h1 className="profilh1">PROFILE</h1>
            <p className="paragraf1">I'am a fast learner javascript program</p>
            <img src={foto} alt="orang" className="fototengah"/>
        </div>
        <div className="box3">
            <h1 className="detailsh1">Details</h1>
            <h2 className="kontakname">Name</h2>
            <p className="Dzaky">Dzaky Athariq Ferreira</p>
            <h2 className="kontakage">Age</h2>
            <p className="umur">25</p>
            <h2 className="kontakloc">Location</h2>
            <p className="lokasi">Muaratakus Raya Street</p>
        <div className="logoicons">
            <img src={fb} alt="pesbuk"/>
            <img src={tw} alt="twitter"/>
            <img src={ig} alt="instagram"/>
        </div>
        </div>
    </div>
    )
}

export default Contactpage