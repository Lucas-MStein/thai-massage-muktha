import { Phone, MapPin, Clock, Gift } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback.tsx';

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-[600px] sm:min-h-[700px] flex items-center">
            <div className="absolute inset-0 overflow-hidden">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1745327883348-8d78cb4661b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                    alt="Wellness Spa Ambiente"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#3D3428]/85 via-[#3D3428]/70 to-[#3D3428]/50"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                <div className="max-w-2xl">
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                        Traditionelle Thai-Massage in Calw
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                        Entspannung, Wohlbefinden und traditionelle Massagekunst im City Center Calw.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a
                            href="tel:07051962664"
                            className="bg-[#B8956A] text-white px-8 py-4 rounded-full hover:bg-[#A68559] transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Jetzt anrufen
                        </a>
                        <button
                            onClick={() => scrollToSection('massagen')}
                            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
                        >
                            Massagen ansehen
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4" />
                            City Center Calw
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                            <Gift className="w-4 h-4" />
                            Gutscheine erhältlich
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4" />
                            Mo–Fr 8–19 Uhr
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
