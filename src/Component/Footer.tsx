import gits from '../assets/github.svg'
import fb from '../assets/facebook.svg'
import mail from '../assets/mail.svg'
import steam from '../assets/steam.png'

function Footer(){
    return(
      <footer className="h-[10vh] justify-center text-center bg-rose-500">
        <hr className="border-t-2 border-black mb-4" />
        <div className='pt-[1vh]'>Job Connector Web Development Purwadhika Bandung Property on FrontEnd Projects.</div>
        <div className="h-[5vh] flex justify-center items-center gap-10">
          <a href="https://github.com/crayoninvok">
            <img src={gits} alt="git" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61562493073873&locale=id_ID">
            <img src={fb} alt="fb" />
          </a>
          <a href="mailto:dathariqf@gmail.com">
            <img src={mail} alt="mail" />
          </a>
          <a href="https://steamcommunity.com/profiles/76561198272808740/">
            <img src={steam} alt="steam" className='w-[31px]' />
          </a>
      </div>
      <div className="h-[2vh] w-full bg-rose-500">@2024 Copyright: Tailwind</div>
    </footer>
  );
}

export default Footer;