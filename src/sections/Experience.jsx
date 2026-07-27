import LightRays from "../ui/LightRays";
import zoraMask from "../assets/zora.png"; // Importación directa de la imagen desde assets

const Experience = () => {
    const maskImage = zoraMask;

    const experiences = [
    {
        role: "Desarrollador Full stack Jr",
        project: "Desarrollo de una E-commerce",
        company: "MochiMexa",
        period: "Julio 2026",
        achievements: [
        "Colaboré en la construcción de una plataforma integral aplicando metodología SCRUM para la gestión de flujos de trabajo y control de versiones con Git/GitHub.",
        "Desarrollé controladores REST para la gestión de operaciones CRUD (Create, Read, Update, Delete), asegurando la interacción dinámica entre el servidor y la base de datos MySQL.",
        "Construí interfaces responsivas con HTML5, CSS3, JavaScript y Bootstrap 5, integrando validación de formularios, consumo de APIs vía fetch y autenticación de usuarios."
        ],
        tags: ["SCRUM", "Git/GitHub", "REST APIs", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap 5"]
    },
    {
        role: "Ejecutivo de atención a clientes",
        company: "Banorte",
        period: "Junio 2025 - Diciembre 2025",
        achievements: [
        "Gestioné consultas de cuentas, aclaraciones financieras y requerimientos de usuarios, brindando atención conforme a normativas bancarias.",
        "Resolví incidencias mediante el uso de sistemas internos, reduciendo los tiempos de respuesta y mejorando la experiencia del cliente.",
        "Garanticé el manejo confidencial de la información y el cumplimiento de los estándares de servicio establecidos por la institución."
        ],
        tags: ["Atención al Cliente", "Gestión Financiera", "Resolución de Incidencias", "Normativa Bancaria"]
    },
    {
        role: "Mercadotecnia empresarial y de transformación",
        company: "Comercializadora Sodimac HC S.A de C.V.",
        period: "2021 - 2022",
        achievements: [
        "Actualicé programas de propaganda y ofertas para el área de Retail, asegurando la vigencia de precios y promociones.",
        "Analicé información comercial mediante Excel avanzado para apoyar la gestión y seguimiento de datos de ventas.",
        "Elaboré planos y material visual en AutoCAD para optimizar la organización y presentación del piso de venta."
        ],
        tags: ["Excel Avanzado", "AutoCAD", "Análisis de Datos", "Retail & Marketing"]
    }
    ];

    return (
    <section 
        id="experience" 
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
            Trayectoria Profesional
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#dbc251] drop-shadow-[0_0_12px_rgba(219,194,81,0.4)]">
            EXPERIENCIA LABORAL
            </h2>
            <div className="w-20 h-[2px] bg-[#dbc251] mx-auto mt-3 shadow-[0_0_8px_#dbc251]" />
        </div>

        <div className="bg-black/60 backdrop-blur-md border border-[#dbc251]/30 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(0,0,0,0.6)]">

            <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
                <div 
                key={index}
                className="group relative p-6 bg-black/40 rounded-xl border border-[#dbc251]/20 cursor-pointer transition-all duration-300 ease-out hover:border-[#dbc251] hover:bg-[#dbc251]/10 hover:shadow-[0_0_20px_rgba(219,194,81,0.35)] hover:-translate-y-1"
                >

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-[#dbc251]/20 pb-4">
                    <div className="flex items-start space-x-3 mb-2 md:mb-0">

                    <div className="p-2.5 bg-[#dbc251]/10 rounded-full border border-[#dbc251]/40 text-[#dbc251] animate-pulse transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#dbc251]/20 shrink-0 mt-0.5">
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
                        className="lucide lucide-sparkles w-5 h-5" 
                        aria-hidden="true"
                        >
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                        <path d="M20 2v4"></path>
                        <path d="M22 4h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                    </div>

                    <div>
                        <h3 className="font-cinzel text-lg md:text-xl text-[#dbc251] font-bold group-hover:text-[#fff3b0] transition-colors duration-300">
                        {exp.role} {exp.project && <span className="text-gray-300 text-base font-normal">| {exp.project}</span>}
                        </h3>
                        <p className="font-marcellus text-sm text-gray-300">
                        {exp.company}
                        </p>
                    </div>
                    </div>

                    <span className="font-marcellus text-xs md:text-sm text-[#dbc251] bg-[#dbc251]/10 px-3 py-1 rounded-full border border-[#dbc251]/30 self-start md:self-auto">
                    {exp.period}
                    </span>
                </div>

                <ul className="space-y-2 mb-4 font-almendra text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300 pl-2">
                    {exp.achievements.map((item, aIndex) => (
                    <li key={aIndex} className="flex items-start space-x-2">
                        <span className="text-[#dbc251] font-bold mt-1">▸</span>
                        <span className="leading-relaxed">{item}</span>
                    </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#dbc251]/10">
                    {exp.tags.map((tag, tIndex) => (
                    <span 
                        key={tIndex} 
                        className="font-marcellus text-[11px] px-2.5 py-1 rounded-full bg-[#dbc251]/10 text-[#dbc251] border border-[#dbc251]/20 group-hover:border-[#dbc251]/50 group-hover:bg-[#dbc251]/20 transition-all duration-300"
                    >
                        {tag}
                    </span>
                    ))}
                </div>

                </div>
            ))}
            </div>

        </div>

        </div>
    </section>
    );
};

export default Experience;