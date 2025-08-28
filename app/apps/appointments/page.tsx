import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Phone, Video, User } from "lucide-react"

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              Easy Scheduling
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Book Your Appointment</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Schedule appointments with our healthcare professionals quickly and conveniently. Choose from in-person
              visits or virtual consultations.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Appointment Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-6 w-6 text-secondary" />
                    <span>Schedule Appointment</span>
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below to book your appointment with our healthcare team.
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Medicine</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="dermatology">Dermatology</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="gynecology">Gynecology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor">Preferred Doctor (Optional)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select doctor or leave blank for any available" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr-sharma">Dr. Amit Sharma - General Medicine</SelectItem>
                        <SelectItem value="dr-patel">Dr. Priya Patel - Cardiology</SelectItem>
                        <SelectItem value="dr-singh">Dr. Rajesh Singh - Orthopedics</SelectItem>
                        <SelectItem value="dr-gupta">Dr. Sunita Gupta - Pediatrics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">02:00 PM</SelectItem>
                          <SelectItem value="15:00">03:00 PM</SelectItem>
                          <SelectItem value="16:00">04:00 PM</SelectItem>
                          <SelectItem value="17:00">05:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Appointment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select appointment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-Person Visit</SelectItem>
                        <SelectItem value="telemedicine">Virtual Consultation</SelectItem>
                        <SelectItem value="follow-up">Follow-up Appointment</SelectItem>
                        <SelectItem value="consultation">Initial Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Visit</Label>
                    <Textarea
                      id="reason"
                      placeholder="Please describe your symptoms or reason for the appointment"
                      rows={3}
                    />
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Available Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">In-Person Consultations</p>
                      <p className="text-sm text-muted-foreground">Face-to-face appointments at our clinic</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Video className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Virtual Consultations</p>
                      <p className="text-sm text-muted-foreground">Online appointments from home</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium">Same-Day Appointments</p>
                      <p className="text-sm text-muted-foreground">Urgent care available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-medium">Emergency: +91 (555) 911-0000</p>
                      <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-medium">Appointments: +91 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-6PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-medium">123 Healthcare Street</p>
                      <p className="text-sm text-muted-foreground">Medical District, City 110001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ad Space */}
              <Card className="border-dashed border-2 border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-center text-sm">Health Insurance</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Get comprehensive health coverage</p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
