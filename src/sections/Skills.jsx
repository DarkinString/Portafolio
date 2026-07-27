import LightRays from "../ui/LightRays";
import goronMask from "../assets/goron-mask.png";

const Skills = () => {
    const mainImage = goronMask;
    const skillsList = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    ];

    const carouselItems = [...skillsList, ...skillsList];

    return (
    <section 
        id="skills" 
        className="relative w-full min-h-screen bg-[#2F4F4F] flex items-center justify-center py-20 px-6 lg:px-16 overflow-hidden"
    >

        <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('${mainImage}')` }}
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
                src={mainImage} 
                alt="Máscara Goron" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain mix-blend-screen drop-shadow-[0_0_8px_rgba(219,194,81,0.5)]"
            />
            </div>

            <span className="font-marcellus text-[#dbc251] text-xs md:text-sm tracking-[0.3em] uppercase block mb-1">
            HERRAMIENTAS & TECNOLOGÍAS
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#dbc251] drop-shadow-[0_0_12px_rgba(219,194,81,0.4)]">
            HABILIDADES
            </h2>
            <div className="w-20 h-[2px] bg-[#dbc251] mx-auto mt-3 shadow-[0_0_8px_#dbc251]" />
        </div>

        <div className="bg-black/60 backdrop-blur-md border border-[#dbc251]/30 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(0,0,0,0.6)]">
            <p className="font-marcellus text-base md:text-lg text-[#fff3b0] leading-relaxed text-center mb-8">
            Conocimiento práctico de lenguajes, frameworks y tecnologías clave para la creación de software robusto, escalable y moderno.
            </p>

            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max space-x-6 animate-marquee hover:[animation-play-state:paused] py-4">
                {carouselItems.map((skill, index) => (
                <div
                    key={index}
                    className="group flex flex-col items-center justify-center min-w-[120px] md:min-w-[140px] p-4 bg-black/40 rounded-xl border border-[#dbc251]/20 cursor-pointer transition-all duration-300 ease-out hover:border-[#dbc251] hover:bg-[#dbc251]/15 hover:shadow-[0_0_20px_rgba(219,194,81,0.4)] hover:-translate-y-2"
                >
                    <div className="w-12 h-12 md:w-14 md:h-14 mb-3 flex items-center justify-center">
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(219,194,81,0.3)]"
                    />
                    </div>
                    <span className="font-cinzel text-xs md:text-sm text-gray-300 group-hover:text-[#dbc251] font-semibold transition-colors duration-300 text-center">
                    {skill.name}
                    </span>
                </div>
                ))}
            </div>
            </div>

        </div>

        </div>
    </section>
    );
};

export default Skills;