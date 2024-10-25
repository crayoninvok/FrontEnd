import wisuda2 from '../assets/wisuda2.jpeg';
import fsg from '../assets/fsg.jpg';
import apateu2 from '../assets/apateu2.gif';
import zaki3 from '../assets/zaki3.jpeg'

function About() {
    return (
      <div className="hero bg-base-200 min-h-screen flex flex-col items-center">
       
        <div 
          className="absolute top-16 left-0 right-0 mx-auto text-center h-[300px] text-gray-50" 
          style={{
            backgroundImage: `url(${apateu2})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center 35%', 
            backgroundRepeat: 'no-repeat' 
          }}
        >
          <p className="font-serif mt-[5rem] font-extrabold mr-[10px] text-5x1">A little bit about me</p>
          <p className="font-mono text-8xl mt-[10px] ml"> WHO AM I ?</p>
        </div>
  
        <div className="flex w-full h-screen">
          <div className="flex items-center justify-center w-1/3 bg-rose-400">
            <div className="card glass w-96 mt-[22rem] hover:scale-105 transition-transform duration-200 hover:text-blue-600">
                <figure>
                    <img src={wisuda2} alt="wisuda!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Campus Life</h2>
                    <p>Want to see ITS Campus Life?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><a href="https://www.youtube.com/watch?v=R3vMnUF8bWk">Click Here</a></button>
                    </div>
                </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-1/3 bg-rose-300 m">
            <p className="w-[70%] mx-auto mt-[18rem] text-center text-zinc-900">
                I am an independent person with background skill in Instrumentation Engineering. I studied at the Institute Technology Sepuluh Nopember in Surabaya. After I graduated in 2021, I started working as a marine radio navigation technician. I worked for 2 years until August 2024. Now, I'm studying to become a full-stack web developer at Purwadhika campus Bandung.
            </p>
              <div className="avatar justify-center mt-[3rem]">
                <div className="ring-offset-base-100 w-[170px] rounded-full ring ring-offset-2 ring-slate-500">
                <img src={zaki3} />
                </div>
              </div>
          </div>


          <div className="flex items-center justify-center w-1/3 bg-rose-400">
            <div className="card glass w-96 mt-[22rem] hover:scale-105 transition-transform duration-200 hover:text-blue-600">
                <figure>
                    <img src={fsg} alt="wisuda!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Furuno Employee</h2>
                    <p>Want to see how work in Furuno?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary hover:button"><a href="https://www.furuno.id/">Click Here</a></button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
