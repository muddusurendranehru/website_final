"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdBanner } from "@/components/ad-banner"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { CTASection } from "@/components/cta-section"
import Link from "next/link"
import { Heart, Clock, Shield, Smartphone, Calendar, FileText, Video, Activity, Bot, Star } from "lucide-react"

export default function HomePage() {
  const handleBookAppointment = () => {
    window.open("https://v0-connect-to-supabase-green.vercel.app/", "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-healthcare-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-white" />
              <span className="text-white/90 font-medium">Homa Healthcare Center</span>
            </div>
            <p className="text-white/80 text-sm mb-2">C.O.D - Cardio Obesity Diabetes Remission Center</p>
            <p className="text-white/70 text-xs mb-4">Dr. M. Surendra Nehru M.D Professor of Medicine | 09963721999</p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Homa Healthcare Center</h1>
            <p className="text-xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
              C.O.D - Cardio Obesity Diabetes Remission Center - Specialized Care for Heart Health, Weight Management &
              Diabetes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={handleBookAppointment}
              >
                📅 BOOK APPOINTMENT NOW
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                🚨 Emergency Contact
              </Button>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-white" />
                  <h3 className="font-semibold mb-1">Appointments</h3>
                  <p className="text-sm text-white/80">Trusted by thousands</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-white" />
                  <h3 className="font-semibold mb-1">TSMC 20548 Certified</h3>
                  <p className="text-sm text-white/80">Professional excellence</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-white" />
                  <h3 className="font-semibold mb-1">24/7 Support</h3>
                  <p className="text-sm text-white/80">Always here for you</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Quick Actions</h2>
              <p className="text-gray-600">Everything you need for your healthcare journey</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link href="/apps/portal" className="group">
                <Card className="bg-green-500 hover:bg-green-600 transition-colors text-white text-center p-6">
                  <FileText className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Register</h3>
                  <p className="text-xs opacity-90">New patient signup</p>
                </Card>
              </Link>

              <Link href="/apps/nutribot" className="group">
                <Card className="bg-purple-500 hover:bg-purple-600 transition-colors text-white text-center p-6">
                  <Bot className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Diet Bot</h3>
                  <p className="text-xs opacity-90">Nutrition guidance</p>
                </Card>
              </Link>

              <Link href="/apps/telemedicine" className="group">
                <Card className="bg-blue-500 hover:bg-blue-600 transition-colors text-white text-center p-6">
                  <Video className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Website</h3>
                  <p className="text-xs opacity-90">Visit our website</p>
                </Card>
              </Link>

              <div
                className="group cursor-pointer"
                onClick={() => window.open("https://v0-connect-vercel-apps.vercel.app/", "_blank")}
              >
                <Card className="bg-orange-500 hover:bg-orange-600 transition-colors text-white text-center p-6">
                  <Activity className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Exercise Program</h3>
                  <p className="text-xs opacity-90">90-day personalized plan</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Homa Healthcare?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine traditional healthcare excellence with cutting-edge technology to provide you with the best
                possible care experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Expert Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Board-certified physicians and specialists providing personalized healthcare solutions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Smartphone className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Digital Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Innovative web applications for appointment booking, health tracking, and telemedicine.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <CardTitle>24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Round-the-clock healthcare support and emergency services for your peace of mind.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Secure & Private</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    HIPAA-compliant systems ensuring your health data remains secure and confidential.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive healthcare solutions for you and your family
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-3">General Consultation</CardTitle>
                <CardDescription className="mb-4">
                  Comprehensive health checkups and medical consultations
                </CardDescription>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book Now →</Button>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-3">Preventive Care</CardTitle>
                <CardDescription className="mb-4">Regular health screenings and preventive medicine</CardDescription>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More →</Button>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl mb-3">Health Monitoring</CardTitle>
                <CardDescription className="mb-4">Digital health tracking and personalized care plans</CardDescription>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Start Tracking →</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Web Apps Section */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Integrated Healthcare Apps</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access all your healthcare needs through our comprehensive suite of web applications, designed to make
                your health journey seamless and efficient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Bot className="h-6 w-6 text-secondary" />
                    <CardTitle>NutriBot Registration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    AI-powered nutrition guidance and personalized meal planning to optimize your health.
                  </CardDescription>
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                    <Link href="/apps/nutribot">Register Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-6 w-6 text-secondary" />
                    <CardTitle>Appointment Scheduler</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Book and manage your healthcare appointments with ease and flexibility.
                  </CardDescription>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/apps/appointments">Book Appointment</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-secondary" />
                    <CardTitle>Patient Portal</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Access your medical records, test results, and health history securely online.
                  </CardDescription>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Link href="/apps/portal">Access Portal</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Video className="h-6 w-6 text-secondary" />
                    <CardTitle>Telemedicine</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Virtual consultations with healthcare providers from the comfort of your home.
                  </CardDescription>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/apps/telemedicine">Start Consultation</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Activity className="h-6 w-6 text-secondary" />
                    <CardTitle>Health Tracker</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Monitor your health metrics, track progress, and achieve your wellness goals.
                  </CardDescription>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <Link href="/apps/tracker">Track Health</Link>
                  </Button>
                </CardContent>
              </Card>

              <AdBanner
                type="affiliate"
                title="Premium Health Supplements"
                description="Clinically tested supplements recommended by healthcare professionals. Get 20% off your first order."
                ctaText="Shop Now"
                ctaLink="/affiliate/supplements"
              />
            </div>
          </div>
        </section>

        {/* Integrated Apps Showcase Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Integrated Healthcare Apps</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access specialized healthcare tools designed by Dr. Muddu Surendra Nehru MD
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                <CardHeader className="text-center">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Healthcare Referral System</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6">
                    Connect patients with professional medical supervision through Dr. Muddu Surendra Nehru MD
                  </CardDescription>
                  <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                    <Link href="/apps/referral">Access Patient Portal</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-purple-100">
                <CardHeader className="text-center">
                  <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Dr. Nehru's Exercise Database</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6">
                    Professional medical exercise database with 25+ years of medical excellence and AI-powered analysis
                  </CardDescription>
                  <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                    <Link href="/apps/exercise">Ask Exercise Question</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-green-100">
                <CardHeader className="text-center">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">PubMed Exercise Integration</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6">
                    Personalized 90-day exercise programs with professional medical supervision and evidence-based care
                  </CardDescription>
                  <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                    <Link href="/apps/pubmed">Start Program</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <NewsletterSignup
              showLeadMagnet={true}
              leadMagnetTitle="Complete Health & Wellness Guide"
              leadMagnetDescription="Get our 50-page comprehensive guide covering nutrition, exercise, mental health, and preventive care"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Patients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from real patients who trust Homa Healthcare Center with their health and wellness
                journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Excellent Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    "The NutriBot app has completely transformed my eating habits. The personalized recommendations are
                    spot-on and easy to follow."
                  </CardDescription>
                  <p className="text-sm font-medium text-primary mt-4">- Sarah M.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Convenient & Professional</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    "Booking appointments online is so convenient, and the telemedicine feature saved me multiple trips
                    to the clinic."
                  </CardDescription>
                  <p className="text-sm font-medium text-primary mt-4">- David R.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Outstanding Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    "The patient portal makes it easy to access my medical records. The staff is professional and the
                    technology is top-notch."
                  </CardDescription>
                  <p className="text-sm font-medium text-primary mt-4">- Maria L.</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CTASection
                variant="premium"
                title="Upgrade to Premium Care"
                description="Get AI-powered health insights, personalized meal plans, and priority support."
                primaryCTA="Start Free Trial"
                primaryLink="/pricing"
                secondaryCTA="View Plans"
                secondaryLink="/pricing"
              />

              <AdBanner
                type="sponsored"
                title="Advanced Health Monitoring"
                description="Latest wearable technology for continuous health tracking. Monitor heart rate, sleep, and activity levels."
                ctaText="Learn More"
                ctaLink="/affiliate/wearables"
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-healthcare-gradient text-white">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience professional healthcare that puts you first.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-left">
                <h3 className="font-semibold mb-2">📞 Call Us Today</h3>
                <p className="text-white/80 mb-1">09963721999</p>
                <p className="text-white/80 text-sm">homahealthcarecenter.in</p>
                <p className="text-white/70 text-xs mt-1">Dr. M. Surendra Nehru M.D Professor of Medicine</p>
              </div>

              <div className="text-left md:text-right">
                <h3 className="font-semibold mb-4">Book Your Appointment</h3>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 w-full md:w-auto"
                  onClick={handleBookAppointment}
                >
                  📅 Book Now
                </Button>
                <Button variant="link" className="text-white hover:text-white/80 block mt-2">
                  Visit Our Website →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
