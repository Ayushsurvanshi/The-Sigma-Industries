
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Map, Users, ShieldCheck, Gem, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export default function Home() {
    const words = [
    {
      text: "Sigma",
    },
    {
      text: "Industries",
      className: "text-primary dark:text-primary",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 flex items-center justify-center text-center bg-background animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6">
               <div className="flex justify-center">
                <TypewriterEffectSmooth words={words} />
              </div>
              <p className="max-w-[700px] mx-auto text-lg md:text-xl text-muted-foreground animate-fade-in-down animation-delay-300">
                Your Trusted Partner for Superior Quality Aluminum Die-Casting Ladles Since 2003.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center animate-fade-in-up animation-delay-500">
                <Button asChild size="lg">
                  <Link href="/products">Explore Our Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 animate-fade-in animation-delay-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Why Choose Us</div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Built on Quality and Trust</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                We are dedicated to providing our clients with products that are not only durable and reliable but also precision-engineered to meet the demanding needs of the die-casting industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-secondary/50 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                     <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Unmatched Durability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our ladles are crafted from high-grade materials to withstand extreme temperatures and rigorous use.</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/50 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                     <Gem className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Precision Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Every product is meticulously designed for optimal performance and safety in your operations.</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/50 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                     <HeartHandshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Customer-Centric Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We build lasting partnerships by understanding and meeting our clients' specific needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="w-full py-12 md:py-20 bg-secondary animate-fade-in animation-delay-400">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center justify-center space-y-3">
                <Award className="h-10 w-10 text-primary" />
                <p className="text-4xl font-bold tracking-tighter sm:text-5xl">20+</p>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <Map className="h-10 w-10 text-primary" />
                <p className="text-4xl font-bold tracking-tighter sm:text-5xl">4+</p>
                <p className="text-muted-foreground">States Served</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <Users className="h-10 w-10 text-primary" />
                <p className="text-4xl font-bold tracking-tighter sm:text-5xl">1000+</p>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 animate-fade-in animation-delay-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Featured Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our range of high-quality ladles and foundry tools, designed for performance and reliability.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
               <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <Image src="/image copy.png" alt="Standard Ladle" data-ai-hint="industrial ladle" width={600} height={400} className="rounded-t-lg w-full h-auto object-cover aspect-video"/>
                  <CardTitle className="pt-4">Standard Ladles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Available in various sizes (3" to 9") to suit your specific pouring needs.</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <Image src="/Dabu.jpg" alt="Specialty Ladles" data-ai-hint="industrial ladle" width={600} height={400} className="rounded-t-lg w-full h-auto object-cover aspect-video"/>
                  <CardTitle className="pt-4">Specialty Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Custom-designed ladles like our AC4B Dhabu and large-capacity Kittles.</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <Image src="/b73576f3-4b97-44ea-9d19-2739fd2f0727.jpg" alt="Foundry Tools" data-ai-hint="foundry tool" width={600} height={400} className="rounded-t-lg w-full h-auto object-cover object-bottom aspect-video"/>
                  <CardTitle className="pt-4">Foundry Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Essential skimmers, tongs, and dross removal tools for a clean melt.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in animation-delay-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Enhance Your Operations?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a personalized quote and discover how our products can improve your die-casting process.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
               <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
