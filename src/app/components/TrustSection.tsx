import { Sparkles, Heart, User } from 'lucide-react';

export function TrustSection() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#3D3428] mb-6">
                        Willkommen bei Thai Massage ANN MUKTHA
                    </h2>
                    <p className="text-lg text-[#5C5344] leading-relaxed">
                        Wir verwöhnen Sie mit einem über 1000 Jahre alten Massage- und Entspannungssystem.
                        Erleben Sie traditionelle Thai-Massagekunst in ruhiger, professioneller Atmosphäre.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#F8F6F3] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-8 h-8 text-[#B8956A]" />
                        </div>
                        <h3 className="text-xl text-[#3D3428] mb-2">Traditionelle Techniken</h3>
                        <p className="text-[#5C5344]">
                            Über Jahrhunderte bewährte Massagemethoden aus Thailand
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#F8F6F3] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-[#B8956A]" />
                        </div>
                        <h3 className="text-xl text-[#3D3428] mb-2">Entspannende Atmosphäre</h3>
                        <p className="text-[#5C5344]">
                            Ruhige, professionelle Umgebung für Ihr Wohlbefinden
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#F8F6F3] rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="w-8 h-8 text-[#B8956A]" />
                        </div>
                        <h3 className="text-xl text-[#3D3428] mb-2">Individuelle Behandlungen</h3>
                        <p className="text-[#5C5344]">
                            Auf Ihre persönlichen Bedürfnisse abgestimmte Massagen
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
