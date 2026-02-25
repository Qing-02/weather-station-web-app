import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SystemArchitecture() {
  const archImage = PlaceHolderImages.find(img => img.id === 'system-architecture');

  return (
    <section id="system-architecture" className="py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            System Architecture
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A visual overview of how our weather station collects, processes, and displays data.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {archImage && (
            <div className="w-full max-w-5xl rounded-lg border shadow-md overflow-hidden">
               <Image
                 src={archImage.imageUrl}
                 alt={archImage.description}
                 width={1200}
                 height={600}
                 className="w-full h-auto"
                 data-ai-hint={archImage.imageHint}
               />
            </div>
          )}
          <p className="mt-6 max-w-3xl text-center text-muted-foreground">
            Environmental sensors collect data and transmit it via a microcontroller (like an ESP32). The data is then sent to Firebase for storage and real-time processing, finally being displayed on this web dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
