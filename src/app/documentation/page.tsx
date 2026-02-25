
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Documentation } from '@/components/landing/documentation';
import { SystemArchitecture } from '@/components/landing/system-architecture';

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SystemArchitecture />
        <Documentation />
      </main>
      <Footer />
    </div>
  );
}
