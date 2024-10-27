import video from "../assets/backHD.mp4";
import prx from "../assets/Paper_Rex_darkmode.png";
import bg2 from '../assets/bg2.mp4'

function Hero() {
    return (
        <div className="hero min-h-screen relative flex items-center justify-center overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-90"
                autoPlay
                loop
                muted
            >
                <source src={bg2} type="video/mp4" />
            </video>

            <div className="hero-overlay bg-opacity-0 absolute top-0 left-0 w-full h-full z-10"></div>

            <div className="hero-content text-neutral-content relative flex flex-col justify-center items-center w-full p-4 mt-20 fade-in">
            <img src={prx} alt="prx" className="w-full max-w-xs mb-6 w-90"  />

 
                <h1 className="mb-7 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold animate-pulse whitespace-nowrap text-center fade-in">
                    console.log(PORTOFOLIO)
                </h1>

                <p className="mb-5 text-center text-sm md:text-base w-full md:w-2/3 lg:w-1/2 fade-in text-white">
                    My name is Dzaky Athariq Ferreira. I'm a student at Purwadhika Digital School,
                    currently studying CSS and Tailwind for frontend. I hope you enjoy my portfolio. Thank You💖
                </p>
            </div>
        </div>
    );
}

export default Hero;
