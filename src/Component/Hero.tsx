import video from "../assets/backHD.mp4"
import prx from "../assets/Paper_Rex_darkmode.png"

function Hero() {
    return (
      <div className="hero min-h-screen relative">
       
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source
            src= {video}
            type="video/mp4"
          />
        
        </video>
  
      
        <div className="hero-overlay bg-opacity-60 absolute top-0 left-0 w-full h-full z-10"></div>
        <div className="hero-content text-neutral-content text-center relative z-20">
          <div className="max-w-md">
            <img src={prx} alt="fotozaki" className=""/>
            <h1 className="mb-7 text-7xl font-bold mt-[4rem] animate-bounce w-[1500px] ml-[-500px]"> myFunc(PORTポートフォリオ)
            </h1>
            <p className="mb-5 text-center " >
              My name is Dzaky Athariq Ferreira. I'am a student at Purwadhika Digital School
              now im still studying abaout CSS and Tailwind for frontend. I hope you guys enjoy
              my portofolio. Thank You💖
            </p>
            <button className="btn btn-primary"><a href="https://github.com/crayoninvok/">Get Started</a></button>

          </div>
        </div>
      </div>
    );
  }

  export default Hero;