'use client';

import type { Icon as LucideIcon } from 'lucide-react';
import { Thermometer, Droplets, Wind, Compass, CloudRain, Gauge, ArrowUpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import type { WeatherData } from '@/lib/types';

type WeatherMetric = keyof Omit<WeatherData, 'timestamp'>;

interface CardConfig {
  label: string;
  valueKey: WeatherMetric;
  unit: string;
  Icon: LucideIcon;
}

const cardConfig: CardConfig[] = [
  { label: 'Temperature', valueKey: 'temperature_c', unit: '°C', Icon: Thermometer },
  { label: 'Humidity', valueKey: 'humidity_percent', unit: '%', Icon: Droplets },
  { label: 'Wind Speed', valueKey: 'wind_speed', unit: 'm/s', Icon: Wind },
  { label: 'Wind Direction', valueKey: 'wind_direction', unit: '°', Icon: Compass },
  { label: 'Rainfall', valueKey: 'rainfall_mm', unit: 'mm', Icon: CloudRain },
  { label: 'Pressure', valueKey: 'pressure_hpa', unit: 'hPa', Icon: Gauge },
  { label: 'Altitude', valueKey: 'altitude_m', unit: 'm', Icon: ArrowUpCircle },
];

type DataCardsProps = {
  data: Omit<WeatherData, 'timestamp'> | null;
};

export function DataCards({ data }: DataCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
      {cardConfig.map(({ label, valueKey, unit, Icon }) => (
        <Card key={label} className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{label}</CardTitle>
            <Icon className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {data ? (
              <div className="text-2xl font-bold">
                {data[valueKey].toFixed(2)}
                <span className="text-base font-normal text-muted-foreground ml-1">{unit}</span>
              </div>
            ) : (
              <Skeleton className="h-8 w-3/4" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
