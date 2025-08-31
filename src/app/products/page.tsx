
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const products = {
  standard: [
    { name: '3" Laddle', specs: 'Material: High-Grade Steel', description: 'A compact and durable laddle for smaller, precise pouring tasks.', image: 'https://placehold.co/600x400' },
    { name: '4" Laddle', specs: 'Material: High-Grade Steel', description: 'A versatile mid-sized laddle, balanced for control and capacity.', image: 'https://placehold.co/600x400' },
    { name: '6" Laddle', specs: 'Material: High-Grade Steel', description: 'Our most popular size, ideal for a wide range of die-casting applications.', image: 'https://placehold.co/600x400' },
    { name: '9" Laddle', specs: 'Material: High-Grade Steel', description: 'A large capacity laddle for bigger pours and increased efficiency.', image: 'https://placehold.co/600x400' },
  ],
  specialty: [
    { name: 'AC4B Dhabu', specs: 'Specialized design for specific alloys', description: 'Engineered for handling AC4B grade aluminum with optimal thermal properties.', image: 'https://placehold.co/600x400' },
    { name: 'Large Ladles (Kittle)', specs: 'Capacity: 10kg - 100kg', description: 'Heavy-duty "Kittle" style ladles for transporting large quantities of molten metal safely.', image: 'https://placehold.co/600x400' },
  ],
  tools: [
    { name: 'Skimmers', specs: 'Material: Cast Iron/Steel', description: 'Essential for removing slag and impurities from molten metal surfaces.', image: '/b73576f3-4b97-44ea-9d19-2739fd2f0727.jpg' },
    { name: 'Dross Removal Tools', specs: 'Variety of heads available', description: 'Specialized tools to efficiently clear dross and keep your melt clean.', image: 'https://placehold.co/600x400' },
    { name: 'Foundry Tongs', specs: 'Heat-resistant grips', description: 'Durable and reliable tongs for safely handling crucibles and other hot items.', image: '/image.png' },
  ]
};

const CustomizationCard = () => (
    <Card className="bg-primary/10 border-primary border-dashed flex flex-col h-full">
      <CardHeader>
        <CardTitle>Customization Available</CardTitle>
        <CardDescription>Need a specific size or design?</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">We offer customization on ladle capacity, handle length, material coating, and spout design to meet your unique requirements.</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="/contact">Discuss Your Needs</Link>
        </Button>
      </CardFooter>
    </Card>
);

export default function ProductsPage() {
  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Products</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            High-quality ladles, skimmers, tongs, and other essential tools for your foundry operations.
          </p>
        </div>
      </header>

      <main className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
              <TabsTrigger value="standard">Standard Ladles</TabsTrigger>
              <TabsTrigger value="specialty">Specialty Items</TabsTrigger>
              <TabsTrigger value="tools">Foundry Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                {products.standard.map(product => (
                    <Card key={product.name} className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <CardHeader className="p-0">
                        <Image data-ai-hint="industrial ladle" src={product.image} alt={product.name} width={600} height={400} className="rounded-t-lg w-full h-auto object-cover aspect-video" />
                         <div className="p-6 pb-0">
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>{product.specs}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{product.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full" variant="secondary">
                          <Link href="/contact?product=quote">Request a Quote</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specialty" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {products.specialty.map(product => (
                     <Card key={product.name} className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <CardHeader className="p-0">
                        <Image data-ai-hint="industrial ladle" src={product.image} alt={product.name} width={600} height={400} className="rounded-t-lg w-full h-auto object-cover aspect-video" />
                        <div className="p-6 pb-0">
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>{product.specs}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{product.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full" variant="secondary">
                          <Link href="/contact?product=quote">Request a Quote</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                ))}
                <CustomizationCard />
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {products.tools.map(product => (
                    <Card key={product.name} className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                       <CardHeader className="p-0">
                        <Image data-ai-hint="foundry tool" src={product.image} alt={product.name} width={600} height={400} className="rounded-t-lg w-full h-auto object-cover aspect-video" />
                         <div className="p-6 pb-0">
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>{product.specs}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{product.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full" variant="secondary">
                          <Link href="/contact?product=quote">Request a Quote</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                ))}
                <CustomizationCard />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
