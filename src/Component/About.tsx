import apateu from '../assets/apateu2.gif';
import avatarZ from '../assets/fotozaki1.jpeg'
import wisuda1 from '../assets/wisuda1.jpg'
import fsg1 from '../assets/fsg.jpg'

function About() {
  return (
      <div className="flex-col w-full min-h-screen h-full bg-rose-500">
          <div className="w-full h-[30vh] flex flex-col text-center justify-center items-center"
            style={{
              backgroundImage: `url(${apateu})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center 30%', 
              backgroundRepeat: 'no-repeat' 
            }}>
              <p className="text-white mt-4 text-[13px] md:text-[20px] font-semibold font-open-sans">Get Know About Me</p>
              <p className="text-white mt-5 text-[30px] md:text-[70px] font-semibold font-open-sans">WHO AM I?</p> 
          </div>

      <div className='flex flex-col md:flex-row gap-5 justify-between items-center top-0 w-full px-3 md:px-3'>
      <a href="#" className="group relative block bg-black mt-10 h-60 w-[50%]">
                  <img
                    alt="gg"
                    src={avatarZ}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                    <p className="text-xl font-bold text-white sm:text-2xl">Dzaky's</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                      <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                      >
                
                      </div>
                    </div>
                  </div>
                </a>
                
            <div className='text-center font-mono mt-3'>
                <p>
                Hi, my name  Dzaky Athariq Ferreira. You can call me "Jak"Jek"Pew" or whatever you like to call me. I am an 
                independent person with background skill in Instrumentation Engineering. I studied at the Institute Technology Sepuluh Nopember in Surabaya. 
                After I graduated in 2021, I started working as a marine radio communication & navigation technician and my last posision in the company is VDR Engineer & Marine Radio Inspector. 
                I worked in there for 2 half years until August 2024. Now, I'm studying to become a full-stack web developer at Purwadhika campus Bandung.
                </p>

            </div>

      </div>

      <div className='flex flex-col items-center justify-center mt-[20px] bg-rose-500'>

        <p className="w-full text-center py-2">My Experience</p>

            <div className='flex space-x-1 animate-loop-scroll gap-4 mt-5'>
                <a href="#" className="block">
                      <img
                        alt="w"
                        src={wisuda1}
                        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                      />

                      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                        <strong className="font-medium">Institute Technology Sepuluh Nopember</strong>

                        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                        <p className="mt-0.5 opacity-50 sm:mt-0">Instrumentation Engineering</p>
                      </div>
                    </a>
                <a href="#" className="block">
                      <img
                        alt="w"
                        src={fsg1}
                        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                      />

                      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                        <strong className="font-medium">Furuno Electrict Indonesia</strong>

                        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                        <p className="mt-0.5 opacity-50 sm:mt-0">Radio Engineer</p>
                      </div>
                    </a>
            </div>
      </div>
    </div>


  );
}

export default About;
