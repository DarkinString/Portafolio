import heroMask from "../../assets/hero.png"; 

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
    { name: "Inicio", href: "#Home" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Herramientas", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Certificaciones", href: "#certifications" },
    { name: "Contacto", href: "#contact" },
    ];

    return (
    <footer className="w-full bg-[#1b2b2b] border-t border-[#dbc251]/20 py-8 px-6 text-gray-400 text-sm font-almendra relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center space-x-3">
            <a href="#hero" className="group flex items-center space-x-2">
            <img 
                src={heroMask} 
                alt="Máscara de Majora" 
                className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_6px_#dbc251]"
            />
            </a>
            <span className="font-marcellus text-gray-400 text-xs md:text-sm">
            © {currentYear} Missael Manjarrez. Todos los derechos reservados.
            </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-marcellus text-xs md:text-sm">
            {navLinks.map((link) => (
            <a
                key={link.name}
                href={link.href}
                className="hover:text-[#dbc251] transition-colors duration-200"
            >
                {link.name}
            </a>
            ))}
        </nav>

        <div className="flex items-center space-x-5 text-gray-300">

            <a
            href="https://www.linkedin.com/in/missael-manjarrez-tellez-ingeniero-de-software/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#dbc251] transition-colors duration-200"
            >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            </a>

            <a
            href="https://github.com/DarkinString"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#dbc251] transition-colors duration-200"
            >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
            </a>

        </div>

        </div>
    </footer>
    );
};

export default Footer;