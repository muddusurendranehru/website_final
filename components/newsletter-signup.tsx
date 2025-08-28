"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Gift, CheckCircle, Users } from "lucide-react"

interface NewsletterSignupProps {
  variant?: "default" | "premium" | "sidebar" | "footer"
  showLeadMagnet?: boolean
  leadMagnetTitle?: string
  leadMagnetDescription?: string
  className?: string
}

export function NewsletterSignup({
  variant = "default",
  showLeadMagnet = true,
  leadMagnetTitle = "Free Health Guide",
  leadMagnetDescription = "Get our comprehensive guide to better health and wellness",
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && agreedToTerms) {
      // Handle newsletter signup
      setIsSubscribed(true)
      setEmail("")
    }
  }

  if (isSubscribed) {
    return (
      <Card className={`border-green-200 bg-green-50 ${className}`}>
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Welcome to Our Community!</h3>
          <p className="text-green-700 mb-4">
            Thank you for subscribing. Check your email for your free health guide and weekly health tips.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
            <Users className="h-4 w-4" />
            <span>Join 25,000+ health-conscious subscribers</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (variant === "sidebar") {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-secondary" />
            <span>Health Newsletter</span>
          </CardTitle>
          <CardDescription>Weekly health tips and medical insights delivered to your inbox.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms-sidebar"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              />
              <label htmlFor="terms-sidebar" className="text-xs text-muted-foreground">
                I agree to receive health tips and promotional emails
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90"
              disabled={!email || !agreedToTerms}
            >
              Subscribe Free
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }

  if (variant === "footer") {
    return (
      <div className={`space-y-4 ${className}`}>
        <div>
          <h3 className="font-semibold text-primary mb-2">Stay Healthy & Informed</h3>
          <p className="text-sm text-muted-foreground mb-4">Get weekly health insights and exclusive wellness tips.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="bg-secondary hover:bg-secondary/90" disabled={!email || !agreedToTerms}>
              Subscribe
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms-footer"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <label htmlFor="terms-footer" className="text-xs text-muted-foreground">
              I agree to receive health tips and promotional emails
            </label>
          </div>
        </form>
      </div>
    )
  }

  return (
    <Card className={`border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10 ${className}`}>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Mail className="h-6 w-6 text-secondary" />
          <Badge className="bg-secondary text-secondary-foreground">Free</Badge>
        </div>
        <CardTitle className="text-xl">Join Our Health Community</CardTitle>
        <CardDescription>
          Get exclusive health tips, expert advice, and wellness resources delivered weekly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {showLeadMagnet && (
          <div className="bg-white/50 rounded-lg p-4 border border-secondary/20">
            <div className="flex items-center space-x-2 mb-2">
              <Gift className="h-5 w-5 text-secondary" />
              <span className="font-semibold text-primary">{leadMagnetTitle}</span>
            </div>
            <p className="text-sm text-muted-foreground">{leadMagnetDescription}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-center"
            required
          />

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms-default"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <label htmlFor="terms-default" className="text-xs text-muted-foreground">
              I agree to receive health tips, promotional emails, and the free health guide
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90"
            size="lg"
            disabled={!email || !agreedToTerms}
          >
            Get Free Health Guide + Weekly Tips
          </Button>
        </form>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Join 25,000+ subscribers</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">No spam. Unsubscribe anytime. Your privacy is protected.</p>
        </div>
      </CardContent>
    </Card>
  )
}
