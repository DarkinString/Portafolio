import { useState } from 'react';
import SplitText from "../ui/SplitText.jsx";
import Majora from "./Majora.jsx";

const Hero = () => {
    const [isMajoraOpen, setIsMajoraOpen] = useState(false);

    return (
    <section className="relative w-full min-h-screen bg-[#2F4F4F] flex items-center justify-center pt-24 pb-12 px-6 lg:px-16 overflow-hidden">
        

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,194,81,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        

        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

            <span className="font-marcellus text-[#dbc251] text-lg md:text-xl tracking-widest uppercase">
            ¡HEY, LISTEN!...
            </span>

            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#dbc251] drop-shadow-[0_0_15px_rgba(219,194,81,0.4)]">
            <SplitText 
                text="Missael Manjarrez"
                tag="span"
                delay={50}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
            />
            </h1>

            <p className="font-marcellus text-xl md:text-2xl text-gray-200">
            Ingeniero de Software y Desarrollador Web
            </p>

            <p className="font-almendra text-lg text-gray-300 max-w-xl leading-relaxed">
            Apasionado por la tecnología, el diseño interactivo y la construcción de experiencias digitales legendarias.
            </p>

            <div className="pt-4">
            <a 
                href="#about"
                className="font-cinzel inline-block px-8 py-3 bg-[#dbc251] text-[#2F4F4F] font-bold rounded-lg shadow-[0_0_15px_rgba(219,194,81,0.4)] hover:bg-[#fff3b0] hover:scale-105 transition-all duration-300"
            >
                CONÓCEME
            </a>
            </div>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center">
            <button
            onClick={() => setIsMajoraOpen(true)}
            className="relative group w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[450px] cursor-pointer focus:outline-none"
            title="¡Haz clic en la máscara para descubrir un secreto!"
            >

            <div className="absolute inset-0 bg-[#dbc251]/20 rounded-full blur-3xl group-hover:bg-[#dbc251]/40 transition-all duration-500" />
            
            <img 
                src="https://www.pngplay.com/wp-content/uploads/11/The-Legend-Of-Zelda-Majoras-Mask-PNG-HD-Quality.png" 
                alt="Majora's Mask - Clic para ver secreto" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:drop-shadow-[0_0_30px_rgba(219,194,81,0.8)]"
            />
            
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-almendra text-xs text-[#dbc251] bg-black/70 px-3 py-1 rounded-full border border-[#dbc251]/40 whitespace-nowrap z-20">
            
            </span>
            </button>
        </div>

        </div>

        <Majora isOpen={isMajoraOpen} onClose={() => setIsMajoraOpen(false)} />

    </section>
    );
};

export default Hero;