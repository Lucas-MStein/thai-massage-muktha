import { Quote } from 'lucide-react';

export function Testimonial() {
    return (
        <section className="py-16 sm:py-24 bg-[#F8F6F3]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-[#E5DFD6]">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-[#B8956A]/10 rounded-full flex items-center justify-center">
                            <Quote className="w-8 h-8 text-[#B8956A]" />
                        </div>
                    </div>

                    <blockquote className="text-center">
                        <p className="text-xl sm:text-2xl text-[#3D3428] mb-6 leading-relaxed italic">
                            „Sehr herzliche Belegschaft, die ihr Handwerk versteht und dem Begriff Entspannung
                            eine ganz neue Bedeutung verleiht."
                        </p>
                        <footer className="text-[#5C5344]">
                            <cite className="not-italic">— Daniel S.</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
