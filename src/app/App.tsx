import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustSection } from './components/TrustSection.tsx';
import { MassageServices } from './components/MassageServices.tsx';
import { VoucherSection } from './components/VoucherSection.tsx';
import { Testimonial } from './components/Testimonial.tsx';
import { OpeningHours } from './components/OpeningHours.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileCallButton } from './components/MobileCallButton.tsx';

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