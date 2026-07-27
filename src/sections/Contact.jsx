import { useState } from "react";
import LightRays from "../ui/LightRays";
import naviImage from "../assets/navi.png";

const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
        return;
    }

    setShowAlert(true);

    setFormData({
        name: "",
        email: "",
        message: ""
    });
    };

    return (
    <section 
        id="contact" 
        className="relative w-full min-h-screen bg-[#2F4F4F] flex items-center justify-center py-20 px-6 lg:px-16 overflow-hidden"
    >

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
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-8 h-8 text-[#dbc251]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            </div>

            <span className="font-marcellus text-[#dbc251] text-xs md:text-sm tracking-[0.3em] uppercase block mb-1">
            ¿TIENES UN PROYECTO O CONSULTA?
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#dbc251] drop-shadow-[0_0_12px_rgba(219,194,81,0.4)]">
            CONTACTO
            </h2>
            <div className="w-20 h-[2px] bg-[#dbc251] mx-auto mt-3 shadow-[0_0_8px_#dbc251]" />
        </div>

        <div className="bg-black/60 backdrop-blur-md border border-[#dbc251]/30 rounded-2xl p-6 md:p-10 shadow-[0_0_35px_rgba(0,0,0,0.6)]">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            <div className="flex flex-col justify-between space-y-6">
                <div>
                <h3 className="font-cinzel text-2xl font-bold text-[#dbc251] mb-3">
                    ¡Ponte en contacto!
                </h3>
                <p className="font-almendra text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                    Estoy siempre abierto a escuchar nuevas propuestas, oportunidades laborales o colaborar en proyectos innovadores de desarrollo web e ingeniería.
                </p>
                </div>

                <div className="space-y-4">

                <a 
                    href="tel:8135319084"
                    className="group flex items-center space-x-4 p-4 bg-black/40 rounded-xl border border-[#dbc251]/20 hover:border-[#dbc251] hover:bg-[#dbc251]/10 transition-all duration-300 shadow-md"
                >
                    <div className="w-12 h-12 bg-[#dbc251]/10 rounded-full border border-[#dbc251]/40 flex items-center justify-center text-[#dbc251] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    </div>
                    <div>
                    <span className="font-marcellus text-xs text-[#dbc251] uppercase tracking-wider block">Llamada / WhatsApp</span>
                    <span className="font-cinzel text-lg font-bold text-gray-200 group-hover:text-white">8135319084</span>
                    </div>
                </a>

                <a 
                    href="https://www.linkedin.com/in/missael-manjarrez-tellez-ingeniero-de-software/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 bg-black/40 rounded-xl border border-[#dbc251]/20 hover:border-[#dbc251] hover:bg-[#dbc251]/10 transition-all duration-300 shadow-md"
                >
                    <div className="w-12 h-12 bg-[#dbc251]/10 rounded-full border border-[#dbc251]/40 flex items-center justify-center text-[#dbc251] group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    </div>
                    <div>
                    <span className="font-marcellus text-xs text-[#dbc251] uppercase tracking-wider block">Perfil Profesional</span>
                    <span className="font-cinzel text-base font-bold text-gray-200 group-hover:text-white">LinkedIn / Missael Manjarrez</span>
                    </div>
                </a>

                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                <label className="block font-marcellus text-sm text-[#dbc251] mb-1">Nombre Completo</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-black/50 border border-[#dbc251]/30 rounded-lg text-white font-almendra placeholder-gray-500 focus:outline-none focus:border-[#dbc251] focus:ring-1 focus:ring-[#dbc251] transition-all"
                />
                </div>

                <div>
                <label className="block font-marcellus text-sm text-[#dbc251] mb-1">Correo Electrónico</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu.email@ejemplo.com"
                    className="w-full px-4 py-3 bg-black/50 border border-[#dbc251]/30 rounded-lg text-white font-almendra placeholder-gray-500 focus:outline-none focus:border-[#dbc251] focus:ring-1 focus:ring-[#dbc251] transition-all"
                />
                </div>

                <div>
                <label className="block font-marcellus text-sm text-[#dbc251] mb-1">Mensaje</label>
                <textarea 
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-3 bg-black/50 border border-[#dbc251]/30 rounded-lg text-white font-almendra placeholder-gray-500 focus:outline-none focus:border-[#dbc251] focus:ring-1 focus:ring-[#dbc251] transition-all resize-none"
                />
                </div>

                <button 
                type="submit"
                className="w-full py-3.5 px-6 mt-2 bg-[#dbc251]/20 border border-[#dbc251] text-[#dbc251] font-cinzel font-bold text-base rounded-lg hover:bg-[#dbc251] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(219,194,81,0.2)] hover:shadow-[0_0_25px_rgba(219,194,81,0.6)] cursor-pointer"
                >
                Enviar Mensaje
                </button>
            </form>

            </div>

        </div>

        </div>

        {showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-sm w-full bg-[#1b2b2b] border-2 border-[#dbc251] rounded-2xl p-6 text-center shadow-[0_0_40px_rgba(219,194,81,0.5)]">

            <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#dbc251]/40 rounded-full blur-xl animate-pulse" />
                <img 
                src={naviImage} 
                alt="Navi la Hadita" 
                className="w-20 h-20 object-contain relative z-10 animate-bounce drop-shadow-[0_0_10px_#dbc251]"
                />
            </div>

            <h4 className="font-cinzel text-xl font-bold text-[#dbc251] mb-1">
                ¡HEY! LISTEN!
            </h4>
            <p className="font-almendra text-gray-200 text-base leading-relaxed mb-6">
                ¡Tu mensaje ha sido enviado con éxito! Responderé tan pronto como me sea posible.
            </p>

            <button
                onClick={() => setShowAlert(false)}
                className="px-6 py-2 bg-[#dbc251] text-black font-cinzel font-bold rounded-full hover:bg-[#fff3b0] transition-colors shadow-[0_0_15px_#dbc251] cursor-pointer"
            >
                Entendido
            </button>
            </div>
        </div>
        )}

    </section>
    );
};

export default Contact;