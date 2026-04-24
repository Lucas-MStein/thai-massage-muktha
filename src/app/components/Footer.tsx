import { MapPin, Phone, Clock, Info } from 'lucide-react';

export function Footer() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer id="kontakt" className="bg-[#3D3428] text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="font-serif text-2xl mb-4 text-[#B8956A]">Thai Massage ANN MUKTHA</h3>
                        <p className="text-white/70 mb-4">
                            Seit 01.12.2020 im City Center Calw
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-[#B8956A]" />
                            Adresse
                        </h4>
                        <p className="text-white/80">
                            Stuttgarter Str. 14<br />
                            75365 Calw<br />
                            <span className="text-[#B8956A]">City Center Calw</span>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Phone className="w-5 h-5 text-[#B8956A]" />
                            Kontakt
                        </h4>
                        <a href="tel:07051962664" className="text-white/80 hover:text-white transition-colors block mb-2">
                            0 70 51 / 962 664
                        </a>
                        <p className="text-white/60 text-sm">
                            Terminvereinbarung telefonisch
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[#B8956A]" />
                            Öffnungszeiten
                        </h4>
                        <p className="text-white/80">
                            Mo – Fr: 8:00 – 19:00 Uhr<br />
                            Sa: Nach Vereinbarung
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <nav className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => scrollToSection('home')} className="text-white/60 hover:text-white transition-colors text-sm">
                                Home
                            </button>
                            <button onClick={() => scrollToSection('massagen')} className="text-white/60 hover:text-white transition-colors text-sm">
                                Massagen
                            </button>
                            <button onClick={() => scrollToSection('oeffnungszeiten')} className="text-white/60 hover:text-white transition-colors text-sm">
                                Öffnungszeiten
                            </button>
                            <button className="text-white/60 hover:text-white transition-colors text-sm">
                                Impressum
                            </button>
                        </nav>

                        <div className="flex items-start gap-2 text-white/60 text-sm">
                            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <p>Es werden keine Erotikmassagen angeboten.</p>
                        </div>
                    </div>

                    <div className="text-center mt-8 text-white/40 text-sm">
                        <p>&copy; {new Date().getFullYear()} Thai Massage ANN MUKTHA. Alle Rechte vorbehalten.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
