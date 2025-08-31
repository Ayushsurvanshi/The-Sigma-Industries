import Image from 'next/image';
import { Car, Plane, Factory, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const industries = [
  { name: 'Aluminum Die-Casting', description: 'The core of our business. We provide robust ladles essential for high-pressure and gravity die-casting processes.', icon: Factory },
  { name: 'Automotive', description: 'Supplying ladles for manufacturing engine blocks, transmission parts, and other critical automotive components.', icon: Car },
  { name: 'Aerospace', description: 'Precision ladles for casting lightweight, high-strength aluminum alloys used in aircraft components.', icon: Plane },
  { name: 'General Foundries', description: 'Versatile ladle solutions for various foundry applications, ensuring safe metal handling and pouring.', icon: Wrench },
];

export default function IndustriesPage() {
  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Industries We Serve</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Our precision ladles are trusted by leading manufacturers in a variety of demanding industries.
          </p>
        </div>
      </header>
      
      <main className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry) => (
                <Card key={industry.name} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <industry.icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 items-center bg-secondary p-8 rounded-lg">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Regional Focus, National Standards</h2>
              <p className="text-muted-foreground mt-4">
                We are deeply integrated into the industrial ecosystems of Western and Southern India. Our on-the-ground presence in regions like Pune, Kolhapur, and across Gujarat allows us to provide rapid, responsive service to our clients. Whether you are a large-scale automotive manufacturer or a specialized foundry, we deliver the same high standards of quality and reliability.
              </p>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400" 
                alt="Industrial region map" 
                data-ai-hint="India map"
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
