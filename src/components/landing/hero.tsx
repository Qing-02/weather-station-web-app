import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container px-4 md:px-6 z-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Weather Station
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Harnessing the power of IoT and cloud technology to deliver precise, live weather data right to your screen.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link href="/live-data">
              <Button size="lg">View Live Data</Button>
            </Link>
            <Link href="/#overview">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-black">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
