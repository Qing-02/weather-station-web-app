'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { DataCards } from '@/components/dashboard/data-cards';
import { HistoricalChart } from '@/components/dashboard/historical-chart';
import { HistoricalTable } from '@/components/dashboard/historical-table';
import { AIInsight } from '@/components/dashboard/ai-insight';
import { useWeatherData } from '@/hooks/use-weather-data';

import { Hero } from '@/components/landing/hero';
import { Overview } from '@/components/landing/overview';
import { Mission } from '@/components/landing/mission';
import { ProblemStatement } from '@/components/landing/problem-statement';
import { SystemArchitecture } from '@/components/landing/system-architecture';
import { Documentation } from '@/components/landing/documentation';
import { Contact } from '@/components/landing/contact';

export default function Home() {
  const { currentData, historicalData } = useWeatherData();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SystemArchitecture />
        <Overview />
        <Mission />
        <ProblemStatement />

        <section id="live-data" className="py-12 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <header className="text-center">
                <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Live Data Dashboard
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                  Real-time monitoring and AI-powered analysis of environmental data.
                </p>
              </header>
              
              <section aria-labelledby="live-data-heading">
                <h3 id="live-data-heading" className="sr-only">Live Data Cards</h3>
                <DataCards data={currentData} />
              </section>

              <section aria-labelledby="ai-insight-heading">
                  <h3 id="ai-insight-heading" className="sr-only">AI Weather Insight</h3>
                <AIInsight
                  currentData={currentData}
                  historicalData={historicalData}
                />
              </section>
              
              <section aria-labelledby="charts-heading">
                  <h3 id="charts-heading" className="sr-only">Historical Charts</h3>
                <HistoricalChart data={historicalData} />
              </section>

              <section aria-labelledby="history-heading">
                <h3 id="history-heading" className="sr-only">Historical Data Table</h3>
                <HistoricalTable data={historicalData} />
              </section>
            </div>
          </div>
        </section>
        
        <Documentation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
