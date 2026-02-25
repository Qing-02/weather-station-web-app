
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Overview } from '@/components/landing/overview';

export default function OverviewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Overview />
      </main>
      <Footer />
    </div>
  );
}
