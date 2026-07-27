import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Herrramientas', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Certificaciones', href: '#certifications' },
    { name: 'Contacto', href: '#contact' },
    ];

  // Función para desplazamiento suave considerando el alto de la barra fija
    const handleScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
        const navHeight = 80; // Altura de la Navbar
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
        });
    }
    setIsMenuOpen(false);
    };

    return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2F4F4F]/90 backdrop-blur-md border-b border-[#dbc251]/30">
        <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 w-full">
        
            <div className="flex items-center">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center gap-3 group">
                <img 
                src="https://img.icons8.com/color/1200/triforce.png" 
                alt="Logo Trifuerza" 
                className="h-10 w-auto object-contain mix-blend-multiply transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(219,194,81,0.8)]" 
                />
                <span className="font-cinzel font-bold text-xl md:text-2xl tracking-widest text-[#dbc251] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(219,194,81,0.6)]">
                
                </span>
            </a>
            </div>

            <div className="hidden md:block">
            <div className="flex items-center space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="font-marcellus relative py-2 text-base md:text-lg text-[#dbc251] transition-all duration-300 
                            hover:text-[#fff3b0] 
                            hover:drop-shadow-[0_10px_10px_rgba(219,194,81,0.8)]
                            after:content-[''] after:absolute after:bottom-0 after:left-0 
                            after:w-0 after:h-[2px] after:bg-[#dbc251] 
                            after:shadow-[0_0_10px_#dbc251]
                            after:transition-all after:duration-300 hover:after:w-full"
                >
                    {link.name}
                </a>
                ))}
            </div>
            </div>

            <div className="flex md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="p-2 text-[#dbc251] hover:text-white focus:outline-none"
            >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
            </div>
        </div>
        </div>

        {isMenuOpen && (
        <div className="md:hidden bg-[#2F4F4F] border-t border-[#dbc251]/20 w-full">
            <div className="px-6 pt-3 pb-6 space-y-4">
            {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-almendra block text-xl text-[#dbc251] hover:text-white transition-colors duration-200"
                >
                {link.name}
                </a>
            ))}
            </div>
        </div>
        )}
    </header>
    );
};

export default Navbar;