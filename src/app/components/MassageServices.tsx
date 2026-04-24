import { MassageCard } from './MassageCard.tsx';

export function MassageServices() {
    const massages = [
        {
            title: 'Traditionelle Thaimassage',
            description: 'Kräftige und sanfte Bewegungen, Kreisen und Ausstreichen entlang der Meridiane. Eine ganzheitliche Behandlung für Körper und Geist.',
            prices: [
                { duration: '60 Minuten', price: '55 €' },
                { duration: '90 Minuten', price: '70 €' },
                { duration: '120 Minuten', price: '95 €' }
            ],
            imageUrl: 'https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?w=800&q=80'
        },
        {
            title: 'Thai-Öl-Massage',
            description: 'Thai-Massage mit ätherischen Ölen und sanften Streichungen entlang der Energiebahnen. Tiefenentspannung für den ganzen Körper.',
            prices: [
                { duration: '60 Minuten', price: '55 €' },
                { duration: '90 Minuten', price: '70 €' },
                { duration: '120 Minuten', price: '95 €' }
            ],
            imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
        },
        {
            title: 'Aroma-Öl-Massage',
            description: 'Behandlung mit warmen Ölen entlang der Energiezentren. Die ätherischen Öle wirken entspannend und harmonisierend.',
            prices: [
                { duration: '60 Minuten', price: '55 €' },
                { duration: '90 Minuten', price: '70 €' },
                { duration: '120 Minuten', price: '95 €' }
            ],
            imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80'
        },
        {
            title: 'Kräuterstempel-Massage',
            description: 'Warme Kräuterstempel und ätherische Öle entfalten ihre wohltuende Wirkung. Eine besonders intensive Tiefenentspannung.',
            prices: [
                { duration: '60 Minuten', price: '65 €' },
                { duration: '90 Minuten', price: '80 €' },
                { duration: '120 Minuten', price: '100 €' }
            ],
            imageUrl: 'https://images.unsplash.com/photo-1656570788546-25ec2aaed5f5?w=800&q=80'
        },
        {
            title: 'Hot-Stone-Massage',
            description: 'Massage mit erwärmten Lavasteinen für tiefe Entspannung. Die Wärme dringt tief ins Gewebe und löst Verspannungen.',
            prices: [
                { duration: '60 Minuten', price: '65 €' },
                { duration: '90 Minuten', price: '80 €' },
                { duration: '120 Minuten', price: '100 €' }
            ],
            imageUrl: 'https://images.unsplash.com/photo-1696841212541-449ca29397cc?w=800&q=80'
        },
        {
            title: 'Spezialbehandlung',
            description: 'Sanfte energetische Körperarbeit und wohltuende Spezialbehandlungen. Ohrkerzen-Behandlung und Shiatsu für besondere Bedürfnisse.',
            prices: [
                { duration: 'Ohrkerzen / Shiatsu', price: 'je 45 €' }
            ],
            imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80'
        },
        {
            title: 'Klassische Massage-Techniken',
            description: 'Entspannende Behandlungen für Rücken, Nacken, Füße und Wohlbefinden. Ideal für zwischendurch oder als Ergänzung.',
            prices: [
                { duration: 'Reflexzonen-Massage (30 Min)', price: '35 €' },
                { duration: 'Rückenmassage (30 Min)', price: '35 €' }
            ],
            imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80'
        }
    ];

    return (
        <section id="massagen" className="py-16 sm:py-24 bg-[#F8F6F3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#3D3428] mb-4">
                        Unsere Massagen
                    </h2>
                    <p className="text-lg text-[#5C5344]">
                        Entdecken Sie unsere vielfältigen Massageangebote für Entspannung und Wohlbefinden
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {massages.map((massage, index) => (
                        <MassageCard key={index} {...massage} />
                    ))}
                </div>
            </div>
        </section>
    );
}
