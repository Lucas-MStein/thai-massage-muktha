import { Phone } from 'lucide-react';

export function MobileCallButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
            <a
                href="tel:07051962664"
                className="bg-[#B8956A] text-white w-14 h-14 rounded-full shadow-lg hover:bg-[#A68559] transition-all flex items-center justify-center hover:scale-110"
                aria-label="Anrufen"
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    );
}
