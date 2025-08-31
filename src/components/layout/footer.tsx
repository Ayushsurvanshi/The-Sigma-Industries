import Link from 'next/link';
import { Flame, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">Sigma Industries</span>
            </Link>
            <p className="text-muted-foreground text-sm">Precision Ladles for Aluminum Die-Casting Since 2003.</p>
            <div className="flex space-x-4 mt-4">
                <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
                <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary">Industries</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Sigma Industries, Kolhapur, Maharashtra, India</p>
              <p>Email: <a href="mailto:sigmaindustries2014@gmail.com" className="hover:text-primary">sigmaindustries2014@gmail.com</a></p>
              <p>Phone: <a href="tel:+919850978832" className="hover:text-primary">+91-9850978832</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sigma Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
