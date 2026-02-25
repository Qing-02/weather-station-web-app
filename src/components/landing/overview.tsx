
export function Overview() {
  return (
    <section id="overview" className="py-12 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Project Overview
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A closer look at our weather monitoring system.
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The Weather Station project brings you real-time environmental monitoring. We track key weather data like temperature, humidity, wind speed, wind direction, rainfall, atmospheric pressure, and altitude.
            </p>
            <p>
              Data from our sensors is sent to the cloud, allowing you to see live updates on the dashboard. You can also explore historical records to spot trends or for research. We built this platform to make high-quality environmental data accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
