
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Mission } from '@/components/landing/mission';

export default function MissionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
