import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
];

const FlameIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <FlameIcon className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Sigma Industries</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href} className="transition-colors hover:text-primary px-4 py-2 rounded-md hover:bg-primary/10">
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-secondary/95 p-0">
               <SheetHeader className="p-4 border-b">
                 <SheetTitle>
                    <Link href="/" className="flex items-center gap-2">
                      <FlameIcon className="h-8 w-8 text-primary" />
                      <span className="text-xl font-bold">Sigma Industries</span>
                    </Link>
                 </SheetTitle>
              </SheetHeader>
              <div className="grid gap-2 p-4">
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Button key={link.href} variant="ghost" asChild className="justify-start text-lg p-6 hover:bg-primary/10">
                      <Link href={link.href}>
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
                <div className="mt-4 p-2">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
