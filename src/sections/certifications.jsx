import LightRays from "../ui/LightRays";
import truthMask from "../assets/truth.png"; 

const Certifications = () => {
    const maskImage = truthMask;

    const certificationsList = [
    {
        title: "Prompting IA en Ingeniería de Software",
        issuer: "Santander Open Academy",
        date: "Ene. 2026 - Mar. 2026",
        category: "Inteligencia Artificial e Ingeniería de Prompts",
        description: "Especialización en la formulación y optimización de prompts aplicados al ciclo de desarrollo de software y resolución de problemas de ingeniería."
    },
    {
        title: "Introducción a JAVA",
        issuer: "Accenture",
        date: "Jun. 2026",
        category: "Desarrollo de Software",
        description: "Fundamentos sólidos de programación orientada a objetos (POO), sintaxis Java y lógica de desarrollo para aplicaciones escalables."
    }
    ];

    return (
    <section 
        id="certifications" 
        className="relative w-full min-h-screen bg-[#2F4F4F] flex items-center justify-center py-20 px-6 lg:px-16 overflow-hidden"
    >

        <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('${maskImage}')` }}
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

        <div className="relative z-20 max-w-5xl w-full mx-auto">

        <div className="text-center mb-10 flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 mb-3 rounded-full border border-[#dbc251]/50 bg-black/50 flex items-center justify-center shadow-[0_0_15px_rgba(219,194,81,0.2)] overflow-hidden backdrop-blur-sm">
            <img 
                src={maskImage} 
                alt="Máscara de la Verdad" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain mix-blend-screen drop-shadow-[0_0_8px_rgba(219,194,81,0.5)]"
            />
            </div>

            <span className="font-marcellus text-[#dbc251] text-xs md:text-sm tracking-[0.3em] uppercase block mb-1">
            CONOCIMIENTO Y APRENDIZAJE CONTINUO
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#dbc251] drop-shadow-[0_0_12px_rgba(219,194,81,0.4)]">
            CERTIFICACIONES
            </h2>
            <div className="w-20 h-[2px] bg-[#dbc251] mx-auto mt-3 shadow-[0_0_8px_#dbc251]" />
        </div>

        <div className="bg-black/60 backdrop-blur-md border border-[#dbc251]/30 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(0,0,0,0.6)]">

            <p className="font-marcellus text-base md:text-lg text-[#fff3b0] leading-relaxed text-center mb-10 max-w-3xl mx-auto">
            Impulsado por la curiosidad constante y el deseo firme de superación profesional. Cada certificación representa un compromiso con el aprendizaje autodidacta y la adopción de nuevas tecnologías para ofrecer soluciones modernas y eficientes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {certificationsList.map((cert, index) => (
                <div 
                key={index}
                className="group relative p-8 bg-black/40 rounded-xl border border-[#dbc251]/20 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-300 ease-out hover:border-[#dbc251] hover:bg-[#dbc251]/10 hover:shadow-[0_0_20px_rgba(219,194,81,0.35)] hover:-translate-y-1"
                >
                <div className="w-full flex flex-col items-center">

                    <div className="w-14 h-14 mx-auto mb-4 bg-[#dbc251]/10 rounded-full border border-[#dbc251]/40 text-[#dbc251] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#dbc251]/20">
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
                        className="w-6 h-6" 
                        aria-hidden="true"
                    >
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                        <path d="M20 2v4"></path>
                        <path d="M22 4h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                    </div>

                    <div className="min-h-[56px] flex items-center justify-center mb-2">
                    <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#dbc251] group-hover:text-[#fff3b0] transition-colors duration-300 uppercase tracking-wide text-center">
                        {cert.title}
                    </h3>
                    </div>

                    <div className="flex items-center justify-center space-x-2 font-marcellus text-sm text-gray-300 mb-4 w-full text-center">
                    <span className="font-bold text-[#dbc251]">{cert.issuer}</span>
                    <span>•</span>
                    <span className="text-xs text-gray-400">{cert.date}</span>
                    </div>

                    <div className="flex-grow flex items-center justify-center min-h-[80px] mb-6">
                    <p className="font-almendra text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-center">
                        {cert.description}
                    </p>
                    </div>
                </div>

                <div className="w-full pt-4 border-t border-[#dbc251]/10 flex justify-center">
                    <span className="font-marcellus text-xs px-3 py-1 rounded-full bg-[#dbc251]/10 text-[#dbc251] border border-[#dbc251]/30 group-hover:border-[#dbc251]/60 transition-colors duration-300 text-center">
                    💎 {cert.category}
                    </span>
                </div>

                </div>
            ))}
            </div>

        </div>

        </div>
    </section>
    );
};

export default Certifications;