import { Target, DatabaseZap, Wind, Accessibility } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const missions = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Accurate Real-Time Monitoring',
    description: 'Deliver precise and up-to-the-minute environmental data from our sensor network.',
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: 'Data-Driven Decision Making',
    description: 'Support informed decisions in agriculture, research, and daily life through accessible data.',
  },
  {
    icon: <Wind className="h-8 w-8 text-primary" />,
    title: 'Promote Environmental Awareness',
    description: 'Increase understanding of local climate patterns and environmental changes.',
  },
  {
    icon: <Accessibility className="h-8 w-8 text-primary" />,
    title: 'Accessible IoT Solution',
    description: 'Provide an open and affordable IoT-based monitoring solution for enthusiasts and professionals.',
  },
];

export function Mission() {
  return (
    <section id="mission" className="py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The core objectives that drive the Weather Station project.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission) => (
            <Card key={mission.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {mission.icon}
                </div>
                <CardTitle>{mission.title}</CardTitle>
                <CardDescription className="mt-2">{mission.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
