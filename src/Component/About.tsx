import apateu from '../assets/apateu2.gif';
import avatarZ from '../assets/fotozaki1.jpeg';
import wisuda1 from '../assets/wisuda1.jpg';
import fsg1 from '../assets/fsg.jpg';
import fotojalan1 from '../assets/fotojalan1.jpeg';
import fotojalan2 from '../assets/fotojalan2.jpeg';
import fotojalan3 from '../assets/fotojalan3.jpeg';
import fotojalan4 from '../assets/fotojalan4.jpeg';
import fotojalan5 from '../assets/fotojalan5.jpeg';

function About() {
  return (
    <div className="flex-col w-full min-h-screen relative h-full bg-rose-500">
      <div className="w-full h-[30vh] flex flex-col text-center justify-center items-center fade-in"
        style={{
          backgroundImage: `url(${apateu})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center 30%', 
          backgroundRepeat: 'no-repeat'
        }}>
        <p className="text-white mt-5 text-[13px] md:text-[20px] font-semibold font-open-sans animate-slide-in-left">Get to Know About Me</p>
        <p className="text-white mt-5 text-[30px] md:text-[70px] font-semibold font-open-sans animate-slide-in-right">WHO AM I?</p> 
      </div>

      <div className='flex flex-col md:flex-row gap-5 justify-between items-center top-0 w-full px-3 md:px-3 animate-slide-in-bottom'>
        <a href="#" className="group relative block bg-black mt-10 h-70 w-[50%]">
          <img
            alt="Dzaky Athariq F."
            src={avatarZ}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>
            <p className="text-xl font-bold text-white sm:text-2xl">Dzaky's</p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
         
              </div>
            </div>
          </div>
        </a>
                
        <div className='text-center font-days mt-3 text-white '>
          <p>
            Hi, my name is Dzaky Athariq Ferreira. You can call me "Jak", "Jek", "Pew" or whatever you like to call me.
            I am an independent person with a background in Instrumentation Engineering, studied at the Institute Technology Sepuluh Nopember in Surabaya.
            After graduating in 2021, I started working as a marine radio communication & navigation technician, and my last position was VDR Engineer & Marine Radio Inspector.
            I worked there for 2.5 years until August 2024. Now, I'm studying to become a full-stack web developer at Purwadhika campus Bandung.
          </p>
          <br />
          <hr className='mx-10'/>
        </div>
      </div>

      <p className='w-full text-center py-2 text-[20px] md:text-[40px] text-white font-days animate-slide-in-bottom'>This is my Life Album </p>

      <div className="overflow-hidden whitespace-nowrap animate-slide-in-bottom">
        <div className="flex animate-loop-scroll gap-4">
          {[
            { src: wisuda1, title: "", desc: "Graduation Day" },
            { src: fsg1, title: "", desc: "VDR Certification" },
            { src: fotojalan1, title: "", desc: "VDR APT" },
            { src: fotojalan3, title: "", desc: "Class Audit" },
            { src: fotojalan2, title: "", desc: "Life at sea" },
            { src: fotojalan4, title: "", desc: "VDR Maintenance" },
            { src: fotojalan5, title: "", desc: "Fullstack WebDev Program" },
          ].concat([
            { src: wisuda1, title: "", desc: "Graduation Day" },
            { src: fsg1, title: "", desc: "VDR Certification" },
            { src: fotojalan1, title: "", desc: "VDR APT" },
            { src: fotojalan3, title: "", desc: "Class Audit" },
            { src: fotojalan2, title: "", desc: "Life at sea" },
            { src: fotojalan4, title: "", desc: "VDR Maintenance" },
            { src: fotojalan5, title: "", desc: "Fullstack WebDev Program" },
          ]).map((item, index) => (
            <a href="#" key={index} className="block w-40 sm:w-48 md:w-56">
              <img
                alt={item.title}
                src={item.src}
                className="h-40 w-40 md:h-56 md:w-56 rounded-bl-3xl rounded-tr-3xl object-cover" 
              />
              <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong className="font-bold">{item.title}</strong>
                <p className="mt-0.5 opacity-90 sm:mt-0">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

