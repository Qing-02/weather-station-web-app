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
              An in-depth look at our advanced weather monitoring system.
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-justify">
              The Weather Station project is a comprehensive solution for real-time environmental monitoring. It captures crucial data points including temperature, humidity, wind speed, wind direction, rainfall, atmospheric pressure, and altitude. 
            </p>
            <p className="text-justify">
              All data is collected by a network of sensors, processed, and streamed to a cloud database. This allows for both live data visualization and the storage of historical records for trend analysis and research purposes. Our platform aims to make high-quality environmental data accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
