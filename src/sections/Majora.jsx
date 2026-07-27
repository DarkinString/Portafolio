import { X, Sparkles } from 'lucide-react';

const Majora = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">

        <div className="relative w-full max-w-lg bg-[#2F4F4F] border-2 border-[#dbc251] rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(219,194,81,0.3)] text-center transition-all transform scale-100">

        <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#dbc251] hover:text-white transition-colors p-1 rounded-full border border-[#dbc251]/30 hover:border-[#dbc251]"
        >
            <X className="w-6 h-6" />
        </button>

        <div className="flex justify-center mb-4">
            <div className="p-3 bg-[#dbc251]/10 rounded-full border border-[#dbc251]/40 text-[#dbc251] animate-pulse">
            <Sparkles className="w-8 h-8" />
            </div>
        </div>

        <span className="font-marcellus text-xs tracking-[0.25em] text-[#dbc251] uppercase">
            Dato Curioso
        </span>
        <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[#dbc251] mt-1 mb-4 drop-shadow-[0_0_10px_rgba(219,194,81,0.5)]">
            The Legend of Zelda: Majora's Mask
        </h2>

        <div className="space-y-4 text-gray-200 font-almendra text-lg leading-relaxed text-left bg-black/30 p-4 rounded-xl border border-[#dbc251]/20">
            <p>
            🎮 <strong className="text-[#dbc251]">¿Sabías que el juego se desarrolló en solo 14 meses?</strong>
            </p>
            <p>
            Eiji Aonuma no quería diseñar la versión <em className="text-[#fff3b0]">"Master Quest"</em> de Ocarina of Time, así que Shigeru Miyamoto le hizo una apuesta: si lograba crear una secuela completa en solo un año, no tendría que hacer el rediseño.
            </p>
            <p>
            Para cumplir la fecha límite, reutilizaron los modelos de <em>Ocarina of Time</em> y crearon la icónica mecánica del bucle temporal de <strong>3 días</strong>.
            </p>
        </div>

        <div className="mt-6">
            <button
            onClick={onClose}
            className="font-cinzel px-8 py-2.5 bg-[#dbc251] text-[#2F4F4F] font-bold rounded-lg shadow-[0_0_15px_rgba(219,194,81,0.4)] hover:bg-[#fff3b0] hover:scale-105 transition-all duration-300"
            >
            Entendido
            </button>
        </div>

        </div>
    </div>
    );
};

export default Majora;