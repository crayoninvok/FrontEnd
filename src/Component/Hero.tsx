import React from "react";
import prx from "../assets/Paper_Rex_darkmode.png";
import bgHero from "../assets/Wallpaper GIF.gif"

function Hero() {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault(); 
    };

    return (
        <div 
        className="hero min-h-screen relative flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${bgHero})`,
                backgroundSize: "100% 100%", 
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
            }}
        >
        

            <div className="hero-overlay bg-opacity-0 absolute top-0 left-0 w-full h-full z-10"></div>

            <div className="hero-content text-neutral-content relative flex flex-col justify-center items-center w-full p-4 mt-20 fade-in">
                <div onClick={handleClick} className="cursor-pointer">
                    <img src={prx} alt="prx" className="w-full max-w-xs mb-6" />
                </div>

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
