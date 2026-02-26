# Weather Station Dashboard

A modern, responsive web application for real-time environmental monitoring. This project visualizes weather data including temperature, humidity, wind metrics, and atmospheric pressure using a clean, professional interface.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:9002](http://localhost:9002) in your browser.

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI (Radix UI)
- **Icons:** Lucide React
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod
- **AI Integration:** Genkit (configured for future extensions)

## 📁 Project Structure
- `src/app/`: Next.js App Router pages and layouts.
  - `live-data/`: Interactive dashboard with charts and tables.
  - `mission/`: Combined Mission and Problem Statement.
  - `documentation/`: Technical system overview.
- `src/components/`: Reusable UI components.
  - `dashboard/`: Weather-specific visualization components.
  - `landing/`: Sections for the homepage and informational pages.
  - `ui/`: Base ShadCN components.
- `src/hooks/`: Custom React hooks (e.g., `use-weather-data` for data simulation).
- `src/lib/`: Type definitions and utility functions.

## 📡 Data Flow
Currently, the application uses a custom hook (`src/hooks/use-weather-data.ts`) to simulate live sensor data updates every 5 seconds. In a production environment, this hook can be swapped to listen to a **Firebase Realtime Database** or **Firestore** collection populated by hardware (like an ESP32 or Arduino).

## ☁️ Deployment
This project is configured for **Firebase App Hosting**. 
- See `apphosting.yaml` for environment configurations.
- Ensure your Firebase project is set up and the Web App is registered.

## 📝 License
This project is open-source and available under the MIT License.