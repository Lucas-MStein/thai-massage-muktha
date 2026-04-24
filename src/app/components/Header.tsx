import { Phone } from 'lucide-react';

export function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 z-50 bg-[#F8F6F3]/95 backdrop-blur-sm border-b border-[#E5DFD6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <h1 className="font-serif text-xl sm:text-2xl text-[#3D3428]">
                            Thai Massage<br className="sm:hidden" /> <span className="text-[#B8956A]">ANN MUKTHA</span>
                        </h1>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('home')} className="text-[#3D3428] hover:text-[#B8956A] transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('massagen')} className="text-[#3D3428] hover:text-[#B8956A] transition-colors">
                            Massagen
                        </button>
                        <button onClick={() => scrollToSection('gutscheine')} className="text-[#3D3428] hover:text-[#B8956A] transition-colors">
                            Gutscheine
                        </button>
                        <button onClick={() => scrollToSection('oeffnungszeiten')} className="text-[#3D3428] hover:text-[#B8956A] transition-colors">
                            Öffnungszeiten
                        </button>
                        <button onClick={() => scrollToSection('kontakt')} className="text-[#3D3428] hover:text-[#B8956A] transition-colors">
                            Kontakt
                        </button>
                    </nav>

                    <a
                        href="tel:07051962664"
                        className="bg-[#B8956A] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#A68559] transition-colors flex items-center gap-2 text-sm sm:text-base"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="hidden sm:inline">Termin vereinbaren</span>
                        <span className="sm:hidden">Anrufen</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
