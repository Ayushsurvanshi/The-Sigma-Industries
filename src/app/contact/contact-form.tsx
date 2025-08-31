
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc_OHglFMKzLFWkqb3JGPDiBPEktwBpmqBO6VtQ_R_CO187NA/formResponse";

  // This form will navigate away to the Google Forms confirmation page upon submission.
  // This is the most reliable way to ensure submission is working.
  return (
    <form
      action={googleFormUrl}
      method="POST"
      target="_blank" // Opens the confirmation in a new tab, so the user doesn't lose our site.
      className="space-y-6"
    >
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name-input">Full Name</Label>
        <Input
          id="name-input"
          name="entry.87898715"
          required
        />
      </div>

      {/* Company Field */}
      <div className="space-y-2">
        <Label htmlFor="company-input">Company Name</Label>
        <Input
          id="company-input"
          name="entry.1433518939"
          required
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email-input">Email</Label>
        <Input
          id="email-input"
          type="email"
          name="entry.1702899477"
          required
        />
      </div>
      
      {/* Phone Field */}
      <div className="space-y-2">
        <Label htmlFor="phone-input">Phone Number (Optional)</Label>
        <Input
          id="phone-input"
          type="tel"
          name="entry.1960769763"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message-input">Your Message or Inquiry</Label>
        <Textarea
          id="message-input"
          name="entry.134986859"
          className="min-h-[120px]"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
