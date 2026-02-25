'use client';

import { useState, useMemo } from 'react';
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { WeatherData } from '@/lib/types';
import { subHours, format } from 'date-fns';

const chartableMetrics = [
  { value: 'temperature_c', label: 'Temperature (°C)' },
  { value: 'humidity_percent', label: 'Humidity (%)' },
  { value: 'wind_speed', label: 'Wind Speed (m/s)' },
  { value: 'rainfall_mm', label: 'Rainfall (mm)' },
  { value: 'pressure_hpa', label: 'Pressure (hPa)' },
];

const timeRanges = [
  { value: '1', label: '1H' },
  { value: '6', label: '6H' },
  { value: '24', label: '24H' },
];

type HistoricalChartProps = {
  data: WeatherData[];
};

export function HistoricalChart({ data }: HistoricalChartProps) {
  const [selectedMetric, setSelectedMetric] = useState<keyof WeatherData>('temperature_c');
  const [timeRange, setTimeRange] = useState('6');

  const filteredData = useMemo(() => {
    const now = new Date();
    const hours = parseInt(timeRange);
    const cutoff = subHours(now, hours);
    return data.filter(d => new Date(d.timestamp) > cutoff);
  }, [data, timeRange]);

  const selectedMetricInfo = chartableMetrics.find(m => m.value === selectedMetric);

  const chartConfig = {
    [selectedMetric]: {
      label: selectedMetricInfo?.label || 'Value',
      color: 'hsl(var(--primary))',
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle>Historical Data</CardTitle>
            <CardDescription>
              Visualizing {selectedMetricInfo?.label} over time.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Select value={selectedMetric} onValueChange={(val) => setSelectedMetric(val as keyof WeatherData)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                {chartableMetrics.map((metric) => (
                  <SelectItem key={metric.value} value={metric.value}>
                    {metric.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Tabs value={timeRange} onValueChange={setTimeRange}>
              <TabsList>
                {timeRanges.map((range) => (
                  <TabsTrigger key={range.value} value={range.value}>
                    {range.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(tick) => format(new Date(tick), 'HH:mm')}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={['dataMin - 1', 'dataMax + 1']}
            />
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Legend />
            <Line
              dataKey={selectedMetric}
              type="monotone"
              stroke={`hsl(var(--primary))`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
