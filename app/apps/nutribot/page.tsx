import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bot, Zap, Target, Shield, Star, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { NutriBotChat } from "@/components/nutribot-chat"

// Added comprehensive SEO metadata for NutriBot page
export const metadata: Metadata = {
  title: "NutriBot Registration - AI-Powered Nutrition Guidance & Meal Planning",
  description:
    "Register for NutriBot, our AI-powered nutrition guidance system. Get personalized meal plans, dietary recommendations, and expert nutrition support. Start your health transformation today.",
  keywords: [
    "NutriBot",
    "AI nutrition",
    "meal planning",
    "personalized diet",
    "nutrition guidance",
    "healthy eating",
    "diet planning",
    "nutrition AI",
    "meal recommendations",
    "health transformation",
  ],
  openGraph: {
    title: "NutriBot Registration - AI-Powered Nutrition Guidance",
    description:
      "Get personalized meal plans and nutrition guidance with our AI-powered NutriBot. Transform your health with expert dietary recommendations.",
    images: [
      {
        url: "/nutribot-og.jpg",
        width: 1200,
        height: 630,
        alt: "NutriBot - AI-Powered Nutrition Guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriBot Registration - AI-Powered Nutrition Guidance",
    description: "Get personalized meal plans and nutrition guidance with our AI-powered NutriBot.",
    images: ["/nutribot-og.jpg"],
  },
  alternates: {
    canonical: "/apps/nutribot",
  },
}

export default function NutriBotPage() {
  // Added structured data for the NutriBot service
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NutriBot - AI-Powered Nutrition Guidance",
    description: "Personalized meal planning and nutrition recommendations using artificial intelligence",
    provider: {
      "@type": "MedicalOrganization",
      name: "Homa Healthcare Center",
    },
    serviceType: "Nutrition Counseling",
    areaServed: "India",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.homahealthcarecenter.in/apps/nutribot",
      serviceType: "Online",
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Added structured data script */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50">
          <div className="container mx-auto text-center max-w-6xl">
            <div className="mb-8">
              <div className="inline-block bg-white rounded-2xl p-6 shadow-lg mb-6">
                <p className="text-sm text-muted-foreground mb-2">Ask in your language:</p>
                <h2 className="text-2xl font-bold text-pink-600 mb-2">क्या खाना है?</h2>
                <p className="text-sm text-muted-foreground">Hindi • Devanagari</p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-pink-600">What to </span>
              <span className="text-purple-600">Eat?</span>
            </h1>
            <p className="text-xl text-gray-700 mb-2">Get instant nutrition analysis from Dr. Nehru's AI Bot</p>
            <p className="text-lg text-pink-600 font-semibold mb-8">3 Lakh foods • 165 countries • 7 continents</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-100 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">🍎</div>
                <h3 className="font-semibold text-green-800">Instant Analysis</h3>
                <p className="text-sm text-green-600">Any food, any cuisine</p>
              </div>
              <div className="bg-purple-100 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">🩺</div>
                <h3 className="font-semibold text-purple-800">Dr. Nehru's AI</h3>
                <p className="text-sm text-purple-600">25+ years experience</p>
              </div>
              <div className="bg-yellow-100 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">🚦</div>
                <h3 className="font-semibold text-yellow-800">Diabetes Safe</h3>
                <p className="text-sm text-yellow-600">Traffic light system</p>
              </div>
              <div className="bg-blue-100 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-blue-800">24/7 Available</h3>
                <p className="text-sm text-blue-600">Always ready</p>
              </div>
            </div>

            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-4 text-lg mb-4">
              🤖 Click the Green Bot Below! ⬇️
            </Button>
            <p className="text-sm text-muted-foreground">👆 Scroll down and click the floating doctor bot</p>
          </div>
        </section>

        {/* Food Analysis Section */}
        <section className="py-16 px-4 bg-green-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">🍽️ Ask About ANY Food - Get Instant Analysis!</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
              {[
                { name: "Fish Curry", type: "Non-Veg", emoji: "🐟" },
                { name: "Chicken Biryani", type: "Non-Veg", emoji: "🍗" },
                { name: "Mutton Curry", type: "Non-Veg", emoji: "🥩" },
                { name: "Fresh Milk", type: "Dairy", emoji: "🥛" },
                { name: "Spicy Curry", type: "Veg", emoji: "🌶️" },
                { name: "Cheese Burger", type: "Fast Food", emoji: "🍔" },
                { name: "Pizza Slice", type: "Fast Food", emoji: "🍕" },
                { name: "Fresh Roti", type: "Indian", emoji: "🫓" },
              ].map((food, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="text-3xl mb-2">{food.emoji}</div>
                    <h3 className="font-semibold text-sm">{food.name}</h3>
                    <p className="text-xs text-muted-foreground">{food.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-green-700 font-semibold">+ 3 Lakh more foods from 165 countries! 🌍</p>
            </div>
          </div>
        </section>

        {/* Floating Bot Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block relative">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-4xl shadow-lg animate-bounce">
                  🩺
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm animate-pulse">
                  ❤️
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Look for the Green Doctor Bot in Bottom Right! 🩺</h2>
            <p className="text-lg text-gray-600 mb-6">
              Click the floating green bot to start your free nutrition analysis
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
              <h3 className="font-semibold text-lg mb-2">"Click the Floating Green Bot!"</h3>
              <p className="text-muted-foreground">Get instant nutrition advice from Dr. Nehru's AI</p>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Registration Form */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Registration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bot className="h-6 w-6 text-secondary" />
                    <span>NutriBot Registration</span>
                  </CardTitle>
                  <CardDescription>
                    Complete your registration to access personalized nutrition recommendations and meal planning.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="Enter your age" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input id="height" type="number" placeholder="Enter your height" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight" type="number" placeholder="Enter your weight" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="activityLevel">Activity Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                        <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                        <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                        <SelectItem value="active">Active (hard exercise 6-7 days/week)</SelectItem>
                        <SelectItem value="very-active">Very Active (very hard exercise, physical job)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">Health Goals</Label>
                    <Textarea
                      id="goals"
                      placeholder="Describe your health and nutrition goals (e.g., weight loss, muscle gain, better energy)"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="allergies">Allergies & Dietary Restrictions</Label>
                    <Textarea
                      id="allergies"
                      placeholder="List any food allergies, intolerances, or dietary preferences"
                      rows={2}
                    />
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                    Complete Registration & Proceed to Payment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Premium Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">AI-Powered Recommendations</p>
                      <p className="text-sm text-muted-foreground">Personalized meal plans based on your goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Goal Tracking</p>
                      <p className="text-sm text-muted-foreground">Monitor progress towards your health objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Expert Support</p>
                      <p className="text-sm text-muted-foreground">Access to certified nutritionists</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle>Pricing Plans</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Basic Plan</h3>
                      <Badge variant="outline">Free</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Basic nutrition tracking</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Get Started
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 border-secondary">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Premium Plan</h3>
                      <Badge className="bg-secondary">₹999/month</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">AI recommendations + expert support</p>
                    <Button className="w-full bg-secondary hover:bg-secondary/90" size="sm">
                      Choose Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Ad Space */}
              <Card className="border-dashed border-2 border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-center text-sm">Sponsored</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Health Supplements & Nutrition Products</p>
                  <Button variant="outline" size="sm">
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Lost 15kg in 3 months!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "NutriBot's personalized meal plans made healthy eating so much easier. The AI recommendations were
                    spot-on for my lifestyle and preferences."
                  </p>
                  <p className="font-medium">- Priya Sharma, Mumbai</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Better energy levels!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "The nutrition guidance helped me understand my body's needs better. I feel more energetic and
                    healthier than ever before."
                  </p>
                  <p className="font-medium">- Rajesh Kumar, Delhi</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-secondary/10">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Transform Your Health?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who have already improved their nutrition and health with NutriBot.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Start Your Journey Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <NutriBotChat />
    </div>
  )
}
