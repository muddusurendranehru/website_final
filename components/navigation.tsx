"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const webApps = [
  {
    name: "NutriBot Registration",
    href: "/apps/nutribot",
    description: "AI-powered nutrition guidance and meal planning",
  },
  {
    name: "Appointment Scheduler",
    href: "/apps/appointments",
    description: "Book and manage your healthcare appointments",
  },
  { name: "Patient Portal", href: "/apps/portal", description: "Access your medical records and test results" },
  { name: "Telemedicine", href: "/apps/telemedicine", description: "Virtual consultations with healthcare providers" },
  { name: "Health Tracker", href: "/apps/tracker", description: "Monitor your health metrics and progress" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm">H</span>
            </div>
            <span className="font-bold text-lg text-primary">Homa Healthcare</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Web Apps</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {webApps.map((app) => (
                      <Link
                        key={app.name}
                        href={app.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{app.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{app.description}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/apps/nutribot">NutriBot Registration</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Web Apps</h3>
                  {webApps.map((app) => (
                    <Link
                      key={app.name}
                      href={app.href}
                      className="block text-sm text-muted-foreground hover:text-secondary transition-colors pl-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {app.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/blog"
                  className="text-lg font-medium hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <Button asChild className="bg-secondary hover:bg-secondary/90 mt-4">
                  <Link href="/apps/nutribot" onClick={() => setIsOpen(false)}>
                    NutriBot Registration
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
