'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { DataCards } from '@/components/dashboard/data-cards';
import { HistoricalChart } from '@/components/dashboard/historical-chart';
import { HistoricalTable } from '@/components/dashboard/historical-table';
import { useWeatherData } from '@/hooks/use-weather-data';

export default function LiveDataPage() {
  const { currentData, historicalData } = useWeatherData();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section id="live-data" className="py-12 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <header className="text-center">
                <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Live Data Dashboard
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                  Real-time monitoring of environmental data.
                </p>
              </header>
              
              <section aria-labelledby="live-data-heading">
                <h3 id="live-data-heading" className="sr-only">Live Data Cards</h3>
                <DataCards data={currentData} />
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
      </main>
      <Footer />
    </div>
  );
}
