import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Shield } from "lucide-react"

export default function PubMedIntegrationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">PubMed Exercise Integration App</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Personalized 90-day exercise programs with professional medical supervision
            </p>
          </div>
        </section>

        {/* Professional Supervision Banner */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Professional Medical Supervision Available</h2>
                  <p className="text-white/90 mb-4">
                    Get your exercise program supervised by certified medical professionals at Homa Healthcare Center -
                    Dr. Muddu Surendra Nehru MD (TSMC 20548)
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Certified Medical Center
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      <Star className="h-4 w-4 mr-1" />
                      4.8/5 Patient Rating
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      <Shield className="h-4 w-4 mr-1" />
                      HIPAA Compliant
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <Card className="p-8">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Personal Information</CardTitle>
                <CardDescription className="text-lg">
                  Tell us about yourself to create your personalized program
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" placeholder="Enter your age" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sex">Sex</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sex" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter your address" rows={3} />
                </div>

                <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800">
                  Continue to Medical History
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
