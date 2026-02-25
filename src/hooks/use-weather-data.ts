'use client';

import { useState, useEffect } from 'react';
import type { WeatherData } from '@/lib/types';

const generateNewDataPoint = (prevData: Omit<WeatherData, 'timestamp'>): Omit<WeatherData, 'timestamp'> => {
  return {
    temperature_c: parseFloat((prevData.temperature_c + (Math.random() - 0.5) * 0.5).toFixed(2)),
    humidity_percent: parseFloat(Math.max(0, Math.min(100, prevData.humidity_percent + (Math.random() - 0.5) * 2)).toFixed(2)),
    wind_speed: parseFloat(Math.max(0, prevData.wind_speed + (Math.random() - 0.5) * 0.2).toFixed(2)),
    wind_direction: parseFloat(((prevData.wind_direction + (Math.random() - 0.5) * 10) % 360).toFixed(2)),
    rainfall_mm: Math.random() < 0.01 ? parseFloat((Math.random() * 2).toFixed(2)) : 0,
    pressure_hpa: parseFloat((prevData.pressure_hpa + (Math.random() - 0.5) * 1).toFixed(2)),
    altitude_m: parseFloat((prevData.altitude_m + (Math.random() - 0.5) * 0.1).toFixed(2)),
  };
};

const generateInitialData = (count: number): WeatherData[] => {
  const data: WeatherData[] = [];
  let lastDataPoint: Omit<WeatherData, 'timestamp'> = {
    temperature_c: 25,
    humidity_percent: 40,
    wind_speed: 2.5,
    wind_direction: 180,
    rainfall_mm: 0,
    pressure_hpa: 1012,
    altitude_m: 100,
  };
  let date = new Date();

  for (let i = 0; i < count; i++) {
    date.setMinutes(date.getMinutes() - 1);
    const newDataPoint = generateNewDataPoint(lastDataPoint);
    data.unshift({ ...newDataPoint, timestamp: date.toISOString() });
    lastDataPoint = newDataPoint;
  }
  return data;
};

export function useWeatherData(initialPointCount = 300, updateInterval = 5000) {
  const [currentData, setCurrentData] = useState<Omit<WeatherData, 'timestamp'> | null>(null);
  const [historicalData, setHistoricalData] = useState<WeatherData[]>([]);

  useEffect(() => {
    const initialData = generateInitialData(initialPointCount);
    setHistoricalData(initialData);

    if (initialData.length > 0) {
      const lastPoint = initialData[initialData.length - 1];
      const { timestamp, ...rest } = lastPoint;
      setCurrentData(rest);
    }

    const intervalId = setInterval(() => {
      setCurrentData(prevData => {
        const newDataPoint = prevData ? generateNewDataPoint(prevData) : generateNewDataPoint({
          temperature_c: 25, humidity_percent: 40, wind_speed: 2.5, wind_direction: 180,
          rainfall_mm: 0, pressure_hpa: 1012, altitude_m: 100
        });

        const newEntry: WeatherData = { ...newDataPoint, timestamp: new Date().toISOString() };
        
        setHistoricalData(hData => {
          const updatedHistory = [...hData, newEntry];
          return updatedHistory.length > 1500 ? updatedHistory.slice(-1500) : updatedHistory;
        });
        
        return newDataPoint;
      });
    }, updateInterval);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { currentData, historicalData };
}
