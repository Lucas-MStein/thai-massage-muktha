import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { MassageServices } from './components/MassageServices';
import { VoucherSection } from './components/VoucherSection';
import { Testimonial } from './components/Testimonial';
import { OpeningHours } from './components/OpeningHours';
import { Footer } from './components/Footer';
import { MobileCallButton } from './components/MobileCallButton';

export default function App() {
  return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <TrustSection />
          <MassageServices />
          <VoucherSection />
          <Testimonial />
          <OpeningHours />
        </main>
        <Footer />
        <MobileCallButton />
      </div>
  );
}