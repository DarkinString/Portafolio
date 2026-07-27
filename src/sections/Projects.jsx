import LightRays from "../ui/LightRays";
import fieraMask from "../assets/fieradeidad.png"; 

const Projects = () => {
    const maskImage = fieraMask;

    const projectsList = [
    {
        title: "El Sitio Del Blog",
        repoName: "DIEGOELIASLOPEZ/AD-07-LAB-ElSitio-DelBlog",
        description: "Plataforma web colaborativa enfocada en el desarrollo de un sistema de blog funcional con gestión de publicaciones.",
        url: "https://github.com/DIEGOELIASLOPEZ/AD-07-LAB-ElSitio-DelBlog",
        techs: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Hackathon GJFS",
        repoName: "AriVeraI/Hackathon-1-GJFS",
        description: "Proyecto desarrollado durante una hackathon con un enfoque interactivo e innovador en resolución de retos acelerados.",
        url: "https://github.com/AriVeraI/Hackathon-1-GJFS",
        techs: ["HTML,CSS,JS", "Web Dev", "Teamwork"]
    },
    {
        title: "MochiMexa",
        repoName: "taniacsm/MochiMexa",
        description: "Desarrollo frontend e integración de interfaz intuitiva enfocado en la experiencia de usuario y comercio/presentación.",
        url: "https://github.com/taniacsm/MochiMexa",
        techs: ["HTML, CSS, JS, Bootstrap", "Java", "SQL server"]
    },
    {
        title: "Login System C#",
        repoName: "DarkinString/LoginSystem-CS",
        description: "Sistema de autenticación y control de accesos desarrollado en C# con validación de credenciales y seguridad.",
        url: "https://github.com/DarkinString/LoginSystem-CS",
        techs: ["C#", ".NET", "Security"]
    },
    {
        title: "Laboratorio 14",
        repoName: "DarkinString/Lab-14",
        description: "Implementación práctica de conceptos de ingeniería de software, estructura modular y lógica de desarrollo.",
        url: "https://github.com/DarkinString/Lab-14",
        techs: ["Ingeniería de Software", "Algorithms" ,"JavaScript"]
    }
    ];

    return (
    <section 
        id="projects" 
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
                alt="Máscara Zora" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain mix-blend-screen drop-shadow-[0_0_8px_rgba(219,194,81,0.5)]"
            />
            </div>

            <span className="font-marcellus text-[#dbc251] text-xs md:text-sm tracking-[0.3em] uppercase block mb-1">
            PORTAFOLIO & REPOSITORIOS
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#dbc251] drop-shadow-[0_0_12px_rgba(219,194,81,0.4)]">
            PROYECTOS
            </h2>
            <div className="w-20 h-[2px] bg-[#dbc251] mx-auto mt-3 shadow-[0_0_8px_#dbc251]" />
        </div>

        <div className="bg-black/60 backdrop-blur-md border border-[#dbc251]/30 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(0,0,0,0.6)]">

            <p className="font-marcellus text-base md:text-lg text-[#fff3b0] leading-relaxed text-center mb-8">
            Selección de proyectos y desarrollos destacados. Haz clic en cualquiera de ellos para explorar su repositorio oficial en GitHub.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsList.map((project, index) => (
                <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 bg-black/40 rounded-xl border border-[#dbc251]/20 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out hover:border-[#dbc251] hover:bg-[#dbc251]/10 hover:shadow-[0_0_20px_rgba(219,194,81,0.35)] hover:-translate-y-1"
                >
                <div>

                    <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">

                        <div className="p-2 bg-[#dbc251]/10 rounded-full border border-[#dbc251]/40 text-[#dbc251] group-hover:bg-[#dbc251]/20 transition-all duration-300">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="w-5 h-5"
                        >
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                            <path d="M20 2v4"></path>
                            <path d="M22 4h-4"></path>
                            <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                        </div>
                        <h3 className="font-cinzel text-[#dbc251] font-bold text-lg group-hover:text-[#fff3b0] transition-colors duration-300">
                        {project.title}
                        </h3>
                    </div>

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-5 h-5 text-gray-400 group-hover:text-[#dbc251] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    </div>

                    <span className="font-mono text-xs text-[#dbc251]/70 block mb-3 break-all">
                    {project.repoName}
                    </span>

                    <p className="font-almendra text-sm text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                    {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#dbc251]/10">
                    {project.techs.map((tech, tIndex) => (
                    <span 
                        key={tIndex} 
                        className="font-marcellus text-[10px] px-2.5 py-1 rounded-full bg-[#dbc251]/10 text-[#dbc251] border border-[#dbc251]/20 group-hover:border-[#dbc251]/50 transition-colors duration-300"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </a>
            ))}
            </div>

        </div>

        </div>
    </section>
    );
};

export default Projects;