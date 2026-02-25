'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { DataCards } from '@/components/dashboard/data-cards';
import { HistoricalChart } from '@/components/dashboard/historical-chart';
import { HistoricalTable } from '@/components/dashboard/historical-table';
import { AIInsight } from '@/components/dashboard/ai-insight';
import { useWeatherData } from '@/hooks/use-weather-data';

export default function Home() {
  const { currentData, historicalData } = useWeatherData();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <header className="text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                WeatherSense Dashboard
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Real-time monitoring and AI-powered analysis of environmental data.
              </p>
            </header>
            
            <section id="live-data" aria-labelledby="live-data-heading">
              <h2 id="live-data-heading" className="sr-only">Live Data</h2>
              <DataCards data={currentData} />
            </section>

            <section id="ai-insight" aria-labelledby="ai-insight-heading">
               <h2 id="ai-insight-heading" className="sr-only">AI Weather Insight</h2>
              <AIInsight
                currentData={currentData}
                historicalData={historicalData}
              />
            </section>
            
            <section id="charts" aria-labelledby="charts-heading">
               <h2 id="charts-heading" className="sr-only">Historical Charts</h2>
              <HistoricalChart data={historicalData} />
            </section>

            <section id="history" aria-labelledby="history-heading">
              <h2 id="history-heading" className="sr-only">Historical Data Table</h2>
              <HistoricalTable data={historicalData} />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
