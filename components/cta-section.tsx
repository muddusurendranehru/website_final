import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Zap, Gift, Users, Star } from "lucide-react"

interface CTASectionProps {
  variant?: "default" | "newsletter" | "premium" | "appointment" | "trial"
  title?: string
  description?: string
  primaryCTA?: string
  primaryLink?: string
  secondaryCTA?: string
  secondaryLink?: string
  className?: string
}

export function CTASection({
  variant = "default",
  title,
  description,
  primaryCTA,
  primaryLink = "#",
  secondaryCTA,
  secondaryLink = "#",
  className = "",
}: CTASectionProps) {
  if (variant === "newsletter") {
    return (
      <Card className={`bg-gradient-to-r from-secondary/10 to-secondary/5 border-secondary/20 ${className}`}>
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
              <Gift className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">{title || "Get Your Free Health Guide"}</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {description ||
              "Join our newsletter and receive a comprehensive health and wellness guide, plus weekly tips from healthcare experts."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href={primaryLink}>
                {primaryCTA || "Get Free Guide"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Join 25,000+ health-conscious subscribers</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (variant === "premium") {
    return (
      <Card className={`bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground ${className}`}>
        <CardContent className="p-8 text-center">
          <Badge className="bg-white/20 text-white mb-4">
            <Zap className="h-4 w-4 mr-1" />
            Premium Features
          </Badge>
          <h3 className="text-2xl font-bold mb-4">{title || "Unlock Advanced Health Insights"}</h3>
          <p className="mb-6 max-w-md mx-auto opacity-90">
            {description ||
              "Get AI-powered recommendations, personalized meal plans, and priority support with our premium subscription."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href={primaryLink}>
                {primaryCTA || "Start Free Trial"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href={secondaryLink}>{secondaryCTA}</Link>
              </Button>
            )}
          </div>
          <p className="text-sm mt-4 opacity-75">30-day free trial • Cancel anytime</p>
        </CardContent>
      </Card>
    )
  }

  if (variant === "appointment") {
    return (
      <Card className={`border-2 border-primary/20 bg-primary/5 ${className}`}>
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Star className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">{title || "Book Your Health Consultation"}</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {description ||
              "Schedule an appointment with our healthcare professionals. Available for in-person visits or virtual consultations."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href={primaryLink}>
                {primaryCTA || "Book Appointment"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href={secondaryLink}>{secondaryCTA}</Link>
              </Button>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-4">Same-day appointments available</p>
        </CardContent>
      </Card>
    )
  }

  if (variant === "trial") {
    return (
      <Card className={`bg-gradient-to-br from-green-50 to-green-100 border-green-200 ${className}`}>
        <CardContent className="p-8 text-center">
          <Badge className="bg-green-600 text-white mb-4">Limited Time Offer</Badge>
          <h3 className="text-2xl font-bold text-green-800 mb-4">{title || "Try Premium Free for 30 Days"}</h3>
          <p className="text-green-700 mb-6 max-w-md mx-auto">
            {description ||
              "Experience all premium features at no cost. No credit card required. Cancel anytime during your trial period."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href={primaryLink}>
                {primaryCTA || "Start Free Trial"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-green-600 mt-4">✓ Full access ✓ No commitment ✓ Cancel anytime</p>
        </CardContent>
      </Card>
    )
  }

  // Default variant
  return (
    <Card className={`bg-muted/50 ${className}`}>
      <CardContent className="p-8 text-center">
        <h3 className="text-2xl font-bold text-primary mb-4">{title || "Ready to Transform Your Health?"}</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          {description ||
            "Join thousands of users who have improved their health and wellness with our comprehensive platform."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link href={primaryLink}>
              {primaryCTA || "Get Started"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {secondaryCTA && (
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <Link href={secondaryLink}>{secondaryCTA}</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
