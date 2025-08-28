import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, Shield } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "Forever",
      description: "Essential health tracking and basic features",
      features: [
        "Basic health metrics tracking",
        "Access to health blog",
        "Community support",
        "Mobile app access",
        "Basic appointment booking",
      ],
      cta: "Get Started Free",
      popular: false,
      icon: Shield,
    },
    {
      name: "Premium",
      price: "₹999",
      period: "per month",
      description: "Advanced features for serious health enthusiasts",
      features: [
        "Everything in Basic",
        "AI-powered health insights",
        "Personalized meal plans (NutriBot)",
        "Priority appointment booking",
        "Telemedicine consultations",
        "Advanced health reports",
        "24/7 chat support",
        "Integration with wearables",
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: Star,
    },
    {
      name: "Family",
      price: "₹1,999",
      period: "per month",
      description: "Complete healthcare solution for families",
      features: [
        "Everything in Premium",
        "Up to 6 family members",
        "Family health dashboard",
        "Pediatric consultations",
        "Family meal planning",
        "Emergency health alerts",
        "Dedicated family coordinator",
        "Annual health checkup reminders",
      ],
      cta: "Choose Family Plan",
      popular: false,
      icon: Crown,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "Tailored solutions for healthcare organizations",
      features: [
        "Custom integrations",
        "White-label solutions",
        "Advanced analytics",
        "Dedicated account manager",
        "Custom reporting",
        "API access",
        "Training and onboarding",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Zap,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Flexible Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Choose Your Health Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              From basic health tracking to comprehensive family care, we have a plan that fits your needs and budget.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Check className="h-4 w-4 text-green-600" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="h-4 w-4 text-green-600" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="h-4 w-4 text-green-600" />
                <span>No setup fees</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan) => {
                const IconComponent = plan.icon
                return (
                  <Card
                    key={plan.name}
                    className={`relative ${plan.popular ? "border-2 border-secondary shadow-lg scale-105" : ""}`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                        Most Popular
                      </Badge>
                    )}

                    <CardHeader className="text-center">
                      <div className="flex items-center justify-center mb-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            plan.popular ? "bg-secondary text-secondary-foreground" : "bg-muted"
                          }`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-primary">{plan.price}</div>
                        <div className="text-sm text-muted-foreground">{plan.period}</div>
                      </div>
                      <CardDescription className="text-center">{plan.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-secondary hover:bg-secondary/90"
                            : plan.name === "Basic"
                              ? "bg-primary hover:bg-primary/90"
                              : "bg-transparent"
                        }`}
                        variant={plan.popular || plan.name === "Basic" ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change my plan anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                    prorate any billing adjustments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is there a free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All paid plans come with a 30-day free trial. No credit card required to start. You can cancel
                    anytime during the trial period.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. All payments
                    are processed securely.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is my health data secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your health data is never
                    shared with third parties without your explicit consent.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-primary mb-4">Ready to Start Your Health Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who have transformed their health with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
