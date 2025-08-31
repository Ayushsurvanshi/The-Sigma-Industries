import Image from 'next/image';
import { Gem, HeartHandshake, MapPin, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">About Sigma Industries</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Learn about our journey, mission, and commitment to quality since 2003.
          </p>
        </div>
      </header>
      
      <main className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          {/* History and Mission */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our History</h2>
              <p className="text-muted-foreground">
                Founded in 2003 by Vijay Survanshi, Sigma Industries has grown from a small workshop in Kolhapur to a leading supplier of ladles for aluminum die-casting. Over the years, we have expanded our reach to serve key industrial hubs like Pune, Kolhapur, Satara, Karad, and across the states of Gujarat, Karnataka, and Goa.
              </p>
              <h3 className="text-2xl font-bold tracking-tighter pt-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver durable, precision-engineered ladles that enhance efficiency and safety in aluminum die-casting processes, backed by our unwavering commitment to customer satisfaction.
              </p>
            </div>
            <div>
              <Image
                src="/cast-steel-foundry.jpg"
                alt="Cast steel foundry in operation"
                data-ai-hint="factory interior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Founder */}
          <section className="mt-16 md:mt-24 text-center bg-secondary py-16 rounded-lg">
            <div className="max-w-3xl mx-auto px-4">
               <Image 
                src="/founder.png"
                alt="Vijay Survanshi, Founder of Sigma Industries"
                data-ai-hint="male portrait"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 shadow-lg border-4 border-background"
              />
              <h2 className="text-3xl font-bold tracking-tighter">Meet Our Founder</h2>
              <h3 className="text-2xl font-bold text-primary mt-2">Vijay Survanshi</h3>
              <p className="text-muted-foreground mt-4 text-lg">
                The visionary behind Sigma Industries, Vijay Survanshi's dedication to quality and innovation has been the driving force behind our success since 2003. His leadership continues to inspire our team to achieve excellence every day.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="mt-16 md:mt-24">
            <h2 className="text-3xl font-bold text-center tracking-tighter mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We are committed to the highest standards of quality, using premium materials and rigorous testing to ensure product excellence.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Gem className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our clients depend on us for consistent, durable products and on-time delivery. We build partnerships based on trust and dependability.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <HeartHandshake className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Customer Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Your success is our priority. We work closely with our clients to understand their needs and provide tailored solutions.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Business Compliance and Reach */}
          <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12">
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold tracking-tighter flex items-center gap-2"><ClipboardCheck className="w-6 h-6 text-primary"/> Business Compliance</h3>
              <p className="text-muted-foreground mt-4">
                We are a fully registered entity and comply with all statutory business and tax regulations, including GST. Our commitment to transparency and legal integrity is a cornerstone of our operations.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold tracking-tighter flex items-center gap-2"><MapPin className="w-6 h-6 text-primary" /> Geographic Reach</h3>
              <p className="text-muted-foreground mt-4">
                We proudly serve clients across several states. Our primary service areas include:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground grid grid-cols-2">
                <li>Maharashtra</li>
                <li>Gujarat</li>
                <li>Karnataka</li>
                <li>Goa</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
