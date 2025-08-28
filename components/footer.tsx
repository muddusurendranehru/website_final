import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-lg text-primary">Homa Healthcare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing comprehensive healthcare services and innovative web applications to improve your health and
              wellness journey.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                Health Blog
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                Pricing
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                Careers
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Web Apps */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Web Apps</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/apps/nutribot"
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                NutriBot Registration
              </Link>
              <Link
                href="/apps/appointments"
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                Appointments
              </Link>
              <Link
                href="/apps/portal"
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                Patient Portal
              </Link>
              <Link
                href="/apps/telemedicine"
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                Telemedicine
              </Link>
              <Link
                href="/apps/tracker"
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                Health Tracker
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Contact & Newsletter</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@homahealthcarecenter.in</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Healthcare St, Medical District</span>
              </div>
            </div>

            <NewsletterSignup variant="footer" />
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Homa Healthcare Center. All rights reserved. |
            <Link href="/terms" className="hover:text-secondary transition-colors ml-1">
              Terms of Service
            </Link>
            {" | "}
            <Link href="/affiliate-disclosure" className="hover:text-secondary transition-colors ml-1">
              Affiliate Disclosure
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
