import LightRays from "../ui/LightRays";

const About = () => {

    const dekuMaskUrl = "https://cdn.wikimg.net/en/zeldawiki/images/f/fe/MM3D_Deku_Mask_Render.png";
    
    const cardItems = [
    {
        title: "Full Stack Jr",
        desc: "React, Tailwind, HTML5, CSS, JavaScript, Java, SqlServer"
    },
    {
        title: "Ingeniería",
        desc: "Código limpio, estructura modular y control de versiones"
    },
    {
        title: "Filosofía",
        desc: "Aprendizaje continuo, adaptación y resolución de problemas"
    }
    ];

    return (
    <section 
        id="about" 
        className="relative w-full min-h-screen bg-[#2F4F4F] flex items-center justify-center py-20 px-6 lg:px-16 overflow-hidden"
    >

        <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url('${dekuMaskUrl}')` }}
        />

        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <LightRays
            raysOrigin="top-center"
            raysColor="#dbc251"
            raysSpeed={0.8}
            lightSpread={1.2}
            followMouse={true}
        />
        </div>

        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#2F4F4F] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2F4F4F] to-transparent pointer-events-none z-10" />

        <div className="relative z-20 max-w-4xl w-full mx-auto">

        <div className="text-center mb-8 flex flex-col items-center">

            <div className="w-16 h-16 md:w-20 md:h-20 mb-3 rounded-full border border-[#dbc251]/50 bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(219,194,81,0.2)]">
            <img 
                src={dekuMaskUrl} 
                alt="Máscara Deku" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_0_8px_rgba(219,194,81,0.5)]"
            />
            </div>

            <span className="font-marcellus text-[#dbc251] text-xs md:text-sm tracking-[0.3em] uppercase block mb-1">
            Conóceme Mejor
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#dbc251] drop-shadow-[0_0_12px_rgba(219,194,81,0.4)]">
            SOBRE MÍ
            </h2>
            <div className="w-20 h-[2px] bg-[#dbc251] mx-auto mt-3 shadow-[0_0_8px_#dbc251]" />
        </div>

        <div className="bg-black/60 backdrop-blur-md border border-[#dbc251]/30 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(0,0,0,0.6)]">
            <div className="space-y-6 text-gray-200">
            
            <p className="font-marcellus text-lg md:text-xl text-[#fff3b0] leading-relaxed text-center">
                ¡Hola!. Soy <span className="text-[#dbc251] font-bold">Missael Manjarrez</span>, Ingeniero de Software enfocado en el desarrollo web full stack y constructor de multiples soluciones digitales eficientes.
            </p>

            <p className="font-almendra text-base md:text-lg text-gray-300 leading-relaxed text-center">
                Me apasiona transformar problemas complejos en experiencias web intuitivas, atractivas y de alto rendimiento. Mi enfoque combina la precisión de la ingeniería de software con una cuidada atención al detalle estético e interactivo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#dbc251]/20">
                {cardItems.map((item, index) => (
                <div 
                    key={index}
                    className="group relative p-5 bg-black/40 rounded-xl border border-[#dbc251]/20 text-center cursor-pointer transition-all duration-300 ease-out hover:border-[#dbc251] hover:bg-[#dbc251]/10 hover:shadow-[0_0_20px_rgba(219,194,81,0.35)] hover:-translate-y-1"
                >

                    <div className="flex justify-center mb-3">
                    <div className="p-3 bg-[#dbc251]/10 rounded-full border border-[#dbc251]/40 text-[#dbc251] animate-pulse transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#dbc251]/20">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-sparkles w-6 h-6 md:w-8 md:h-8" 
                        aria-hidden="true"
                        >
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                        <path d="M20 2v4"></path>
                        <path d="M22 4h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                    </div>
                    </div>

                    <h3 className="font-cinzel text-[#dbc251] font-bold text-base mb-1 transition-colors duration-300 group-hover:text-[#fff3b0]">
                    {item.title}
                    </h3>
                    <p className="font-almendra text-xs text-gray-300 leading-snug group-hover:text-white transition-colors duration-300">
                    {item.desc}
                    </p>
                </div>
                ))}
            </div>

            </div>
        </div>

        </div>
    </section>
    );
};

export default About;