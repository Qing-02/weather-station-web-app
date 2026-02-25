'use client';

import { useState, useTransition } from 'react';
import { BrainCircuit, Loader2 } from 'lucide-react';
import { generateWeatherInsights } from '@/ai/flows/weather-insight-generator';
import type { WeatherData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

type AIInsightProps = {
  currentData: Omit<WeatherData, 'timestamp'> | null;
  historicalData: WeatherData[];
};

export function AIInsight({ currentData, historicalData }: AIInsightProps) {
  const [insight, setInsight] = useState('Click "Generate Insight" to get an AI-powered analysis of the latest weather data.');
  const [isPending, startTransition] = useTransition();

  const handleGenerateInsight = () => {
    startTransition(async () => {
      if (!currentData || historicalData.length === 0) {
        setInsight("Not enough data to generate insights. Please wait for more data to be collected.");
        return;
      }
      try {
        const recentHistory = historicalData.slice(-20);
        const result = await generateWeatherInsights({
          currentData,
          historicalData: recentHistory,
        });
        setInsight(result);
      } catch (error) {
        console.error("Error generating AI insight:", error);
        setInsight("An error occurred while generating the insight. Please try again.");
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              AI Weather Insight
            </CardTitle>
            <CardDescription className="mt-2">
              Get automated analysis of current and historical weather trends.
            </CardDescription>
          </div>
          <Button onClick={handleGenerateInsight} disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Insight'
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border bg-muted/30 p-4 min-h-[100px] flex items-center">
          {isPending ? (
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ) : (
            <p className="text-sm text-foreground">{insight}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
