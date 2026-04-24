import { Clock } from 'lucide-react';

interface MassageCardProps {
    title: string;
    description: string;
    prices: Array<{ duration: string; price: string }>;
    imageUrl: string;
}

export function MassageCard({ title, description, prices, imageUrl }: MassageCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#E5DFD6]">
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-6">
                <h3 className="font-serif text-2xl text-[#3D3428] mb-3">{title}</h3>
                <p className="text-[#5C5344] mb-6 leading-relaxed">{description}</p>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#5C5344] mb-3">
                        <Clock className="w-4 h-4" />
                        <span>Ganzkörpermassage</span>
                    </div>

                    {prices.map((price, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-t border-[#E5DFD6]">
                            <span className="text-[#5C5344]">{price.duration}</span>
                            <span className="text-[#3D3428] font-medium text-lg">{price.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
