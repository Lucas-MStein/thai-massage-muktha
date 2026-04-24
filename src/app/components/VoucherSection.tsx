import { Gift, Phone } from 'lucide-react';

export function VoucherSection() {
    return (
        <section id="gutscheine" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-[#F8F6F3] to-[#EDE8E0] rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="p-8 sm:p-12 lg:p-16">
                            <div className="w-16 h-16 bg-[#B8956A] rounded-full flex items-center justify-center mb-6">
                                <Gift className="w-8 h-8 text-white" />
                            </div>

                            <h2 className="font-serif text-3xl sm:text-4xl text-[#3D3428] mb-4">
                                Wellness als Geschenk
                            </h2>

                            <p className="text-lg text-[#5C5344] mb-8 leading-relaxed">
                                Betrag frei wählbar. Ob Geburtstag, Hochzeitstag oder einfach als kleines Dankeschön –
                                ein Gutschein ist immer eine schöne Idee.
                            </p>

                            <div className="bg-white/70 rounded-xl p-6 mb-8">
                                <p className="text-[#3D3428] mb-2">
                                    Gutscheine können während unserer Öffnungszeiten im Studio erworben werden.
                                </p>
                                <p className="text-sm text-[#5C5344]">
                                    Gerne beraten wir Sie bei der Auswahl der passenden Massage.
                                </p>
                            </div>

                            <a
                                href="tel:07051962664"
                                className="bg-[#B8956A] text-white px-8 py-4 rounded-full hover:bg-[#A68559] transition-colors inline-flex items-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                Gutschein anfragen
                            </a>
                        </div>

                        <div className="h-full min-h-[400px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1549566726-e2628ffbbdd4?w=800&q=80"
                                alt="Wellness Gutschein"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
