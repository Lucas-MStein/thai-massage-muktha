import { Clock, Phone } from 'lucide-react';

export function OpeningHours() {
    return (
        <section id="oeffnungszeiten" className="py-16 sm:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#3D3428] mb-4">
                        Öffnungszeiten
                    </h2>
                    <p className="text-lg text-[#5C5344]">
                        Besuchen Sie uns – wir freuen uns auf Sie
                    </p>
                </div>

                <div className="bg-[#F8F6F3] rounded-2xl p-8 sm:p-12">
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-[#B8956A] rounded-full flex items-center justify-center">
                            <Clock className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center py-3 border-b border-[#E5DFD6]">
                            <span className="text-[#3D3428]">Montag – Freitag</span>
                            <span className="text-[#3D3428]">8:00 – 19:00 Uhr</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                            <span className="text-[#3D3428]">Samstag</span>
                            <span className="text-[#5C5344]">Termin nach Vereinbarung</span>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-[#5C5344] mb-6">
                            Termine bitte telefonisch vereinbaren
                        </p>
                        <a
                            href="tel:07051962664"
                            className="bg-[#B8956A] text-white px-8 py-4 rounded-full hover:bg-[#A68559] transition-colors inline-flex items-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Jetzt Termin vereinbaren
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
