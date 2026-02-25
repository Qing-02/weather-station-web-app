
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProblemStatement } from '@/components/landing/problem-statement';

export default function ProblemStatementPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProblemStatement />
      </main>
      <Footer />
    </div>
  );
}
