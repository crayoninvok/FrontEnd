import gits from '../assets/github.svg';
import fb from '../assets/facebook.svg';
import mail from '../assets/mail.svg';
import steam from '../assets/steam.png';

function Footer() {
    return (
        <footer className="flex flex-col items-center bg-white py-4 border-t-2 border-black w-full ">
            <div className='text-sm md:text-base lg:text-lg text-center mb-2'>
                Job Connector Web Development Purwadhika Bandung Property on FrontEnd Projects.
            </div>
            <div className="flex justify-center items-center gap-5 md:gap-10 mb-2">
                <a href="https://github.com/crayoninvok">
                    <img src={gits} alt="git" className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61562493073873&locale=id_ID">
                    <img src={fb} alt="fb" className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a href="mailto:dathariqf@gmail.com">
                    <img src={mail} alt="mail" className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a href="https://steamcommunity.com/profiles/76561198272808740/">
                    <img src={steam} alt="steam" className="w-6 h-6 md:w-8 md:h-8" />
                </a>
            </div>
            <div className="text-xs md:text-sm lg:text-base w-full bg-white text-center py-2">
                @2024 Copyright: Tailwind
            </div>
        </footer>
    );
}

export default Footer;
