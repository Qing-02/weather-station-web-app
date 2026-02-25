'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating plain-language weather insights.
 *
 * - generateWeatherInsights - A function that processes current and historical weather data to provide insights.
 * - WeatherInsightInput - The input type for the generateWeatherInsights function.
 * - WeatherInsightOutput - The return type for the generateWeatherInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WeatherInsightInputSchema = z.object({
  currentData: z.object({
    wind_speed: z.number().describe('Current wind speed in m/s.'),
    wind_direction: z.number().describe('Current wind direction in degrees.'),
    rainfall_mm: z.number().describe('Current rainfall in mm.'),
    temperature_c: z.number().describe('Current temperature in Celsius.'),
    humidity_percent: z.number().describe('Current humidity in percent.'),
    pressure_hpa: z.number().describe('Current pressure in hPa.'),
    altitude_m: z.number().describe('Current altitude in meters.')
  }).describe('The most recent weather sensor readings.'),
  historicalData: z.array(z.object({
    wind_speed: z.number().describe('Historical wind speed in m/s.'),
    wind_direction: z.number().describe('Historical wind direction in degrees.'),
    rainfall_mm: z.number().describe('Historical rainfall in mm.'),
    temperature_c: z.number().describe('Historical temperature in Celsius.'),
    humidity_percent: z.number().describe('Historical humidity in percent.'),
    pressure_hpa: z.number().describe('Historical pressure in hPa.'),
    altitude_m: z.number().describe('Historical altitude in meters.'),
    timestamp: z.string().describe('Timestamp of the historical reading (ISO format).')
  })).describe('A list of historical weather sensor readings over a period.')
});
export type WeatherInsightInput = z.infer<typeof WeatherInsightInputSchema>;

const WeatherInsightOutputSchema = z.string().describe('Plain-language insights about weather trends, anomalies, or noteworthy environmental conditions.');
export type WeatherInsightOutput = z.infer<typeof WeatherInsightOutputSchema>;

export async function generateWeatherInsights(input: WeatherInsightInput): Promise<WeatherInsightOutput> {
  return weatherInsightFlow(input);
}

const weatherInsightPrompt = ai.definePrompt({
  name: 'weatherInsightPrompt',
  input: {schema: WeatherInsightInputSchema},
  output: {schema: WeatherInsightOutputSchema},
  prompt: `You are an AI-powered weather analyst. Your task is to analyze current and historical weather data and provide plain-language insights on trends, anomalies, or noteworthy environmental conditions.

Here is the current weather data:
Temperature: {{{currentData.temperature_c}}}°C
Humidity: {{{currentData.humidity_percent}}}%
Wind Speed: {{{currentData.wind_speed}}} m/s
Wind Direction: {{{currentData.wind_direction}}}°
Rainfall: {{{currentData.rainfall_mm}}} mm
Pressure: {{{currentData.pressure_hpa}}} hPa
Altitude: {{{currentData.altitude_m}}} m

Here is a summary of recent historical weather data:
{{#each historicalData}}
  - Timestamp: {{{this.timestamp}}}, Temp: {{{this.temperature_c}}}°C, Hum: {{{this.humidity_percent}}}%, Wind: {{{this.wind_speed}}} m/s, Rain: {{{this.rainfall_mm}}} mm, Pres: {{{this.pressure_hpa}}} hPa, Alt: {{{this.altitude_m}}} m
{{/each}}

Based on the data provided, identify any significant trends (e.g., rising temperature, decreasing pressure), anomalies (e.g., sudden drop in humidity, unusually high wind speed), or other noteworthy environmental conditions. Present your insights in clear, concise, plain language. Focus on what's important for a user to understand about the current and recent weather.`
});

const weatherInsightFlow = ai.defineFlow(
  {
    name: 'weatherInsightFlow',
    inputSchema: WeatherInsightInputSchema,
    outputSchema: WeatherInsightOutputSchema,
  },
  async (input) => {
    const {output} = await weatherInsightPrompt(input);
    return output!;
  }
);
