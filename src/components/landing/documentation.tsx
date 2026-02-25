export function Documentation() {
    return (
        <section id="documentation" className="py-12 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Documentation
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Technical details about the system architecture, hardware, and software.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground">
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">System Architecture</h3>
                        <p>The system consists of three main parts: the sensor node, the cloud backend, and the web frontend. The sensor node reads data, the cloud backend (Firebase) stores and manages it, and the web frontend (this website) visualizes it.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Hardware Components</h3>
                        <p>Our reference hardware includes a DHT22 (temperature/humidity), an anemometer (wind speed), a wind vane, a tipping bucket rain gauge, and a BMP280 (pressure/altitude), all connected to an ESP32 microcontroller.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Database Structure</h3>
                        <p>We use Firestore to store sensor data. A main collection, `weather_logs`, contains documents for each reading. Each document has a timestamp and fields for each sensor value (e.g., `temperature_c`, `humidity_percent`). This structure allows for efficient querying of historical data.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
