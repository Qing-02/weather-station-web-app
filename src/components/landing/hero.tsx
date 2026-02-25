import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center bg-background">
      <div className="container px-4 md:px-6 z-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Weather Station
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Harnessing the power of IoT and cloud technology to deliver precise, live weather data right to your screen.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link href="#live-data">
              <Button size="lg">View Live Data</Button>
            </Link>
            <Link href="#overview">
              <Button size="lg" variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
