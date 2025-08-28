import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Clock, Shield, Smartphone, CheckCircle, Star } from "lucide-react"

export default function TelemedicinePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <Video className="h-4 w-4 mr-2" />
              Virtual Care
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Telemedicine Consultations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Connect with healthcare professionals from the comfort of your home. Get expert medical advice through
              secure video consultations.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Start Virtual Consultation
            </Button>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">How Telemedicine Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary font-bold text-xl">1</span>
                  </div>
                  <CardTitle>Schedule Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Book your virtual consultation online or by phone. Choose a time that works best for you.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary font-bold text-xl">2</span>
                  </div>
                  <CardTitle>Join Video Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    At your appointment time, join the secure video call from any device with internet access.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary font-bold text-xl">3</span>
                  </div>
                  <CardTitle>Receive Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Consult with your healthcare provider, receive diagnosis, treatment plans, and prescriptions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Benefits of Telemedicine</CardTitle>
                  <CardDescription>
                    Experience the convenience and efficiency of virtual healthcare consultations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Convenience</p>
                      <p className="text-sm text-muted-foreground">
                        No travel time or waiting rooms - consult from anywhere
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Quick Access</p>
                      <p className="text-sm text-muted-foreground">
                        Same-day appointments available for urgent care needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Cost-Effective</p>
                      <p className="text-sm text-muted-foreground">
                        Lower costs compared to traditional in-person visits
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Safe & Secure</p>
                      <p className="text-sm text-muted-foreground">
                        HIPAA-compliant platform with encrypted communications
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Available Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Telemedicine Services</CardTitle>
                  <CardDescription>Our virtual consultations cover a wide range of healthcare needs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">General Medicine</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Routine check-ups</li>
                        <li>• Cold and flu symptoms</li>
                        <li>• Chronic disease management</li>
                        <li>• Medication reviews</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Specialist Consultations</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dermatology consultations</li>
                        <li>• Mental health counseling</li>
                        <li>• Nutrition counseling</li>
                        <li>• Follow-up appointments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Technical Requirements</CardTitle>
                  <CardDescription>
                    Ensure you have everything needed for a smooth virtual consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Smartphone className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Device</p>
                      <p className="text-sm text-muted-foreground">
                        Computer, tablet, or smartphone with camera and microphone
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Video className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Internet Connection</p>
                      <p className="text-sm text-muted-foreground">Stable broadband internet for video calls</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Browser</p>
                      <p className="text-sm text-muted-foreground">
                        Updated web browser (Chrome, Firefox, Safari, or Edge)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Get Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-secondary hover:bg-secondary/90">Book Virtual Appointment</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Test Your Connection
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download Mobile App
                  </Button>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle>Consultation Fees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">General Consultation</span>
                    <span className="font-medium">₹500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Specialist Consultation</span>
                    <span className="font-medium">₹800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Follow-up Visit</span>
                    <span className="font-medium">₹300</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Insurance coverage may apply. Check with your provider.
                  </p>
                </CardContent>
              </Card>

              {/* Support Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span>Availability</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-muted-foreground">8:00 AM - 8:00 PM</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Saturday</p>
                    <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Sunday</p>
                    <p className="text-muted-foreground">Emergency only</p>
                  </div>
                </CardContent>
              </Card>

              {/* Ad Space */}
              <Card className="border-dashed border-2 border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-center text-sm">Health Tech</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Latest health monitoring devices</p>
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
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Patient Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Convenient and Professional</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    "The telemedicine service saved me so much time. The doctor was thorough and I got my prescription
                    immediately. Highly recommend!"
                  </CardDescription>
                  <p className="text-sm font-medium text-primary mt-4">- Anita R.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Great for Follow-ups</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    "Perfect for my regular check-ups. The video quality was excellent and the doctor could see
                    everything clearly. Very satisfied!"
                  </CardDescription>
                  <p className="text-sm font-medium text-primary mt-4">- Vikram S.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
