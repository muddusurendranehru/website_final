import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Patient Registration - Dr. Muddu Surendra Nehru Healthcare Center",
  description:
    "Register as a patient at Dr. Muddu Surendra Nehru Healthcare Center. Join our professional healthcare management system with instant notifications and SMS confirmations.",
  keywords: [
    "patient registration",
    "healthcare registration",
    "Dr. Nehru",
    "medical registration",
    "healthcare center",
  ],
  openGraph: {
    title: "Patient Registration - Dr. Muddu Surendra Nehru Healthcare Center",
    description: "Register as a patient and join our professional healthcare management system.",
  },
}

export default function PatientRegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <Navigation />

      <main className="flex items-center justify-center min-h-screen px-4 py-16">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-lg mb-4">
              <div className="text-2xl">🏥</div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Patient Registration</h1>
            <div className="text-white/90">
              <p className="font-semibold">Dr. Muddu Surendra Nehru</p>
              <p>Healthcare Center</p>
            </div>
          </div>

          {/* Registration Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-12 border-2 border-green-400 focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-lg shadow-lg"
                >
                  REGISTER NOW
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Footer Info */}
          <div className="text-center mt-8 text-white/90">
            <h3 className="font-semibold text-lg mb-2">Dr. Nehru Healthcare Center</h3>
            <p className="text-sm mb-1">Professional Healthcare Management System</p>
            <p className="text-sm mb-1">Connected to 8,309+ Patient Database</p>
            <div className="flex items-center justify-center space-x-4 mt-4 text-sm">
              <div className="flex items-center space-x-1">
                <span>📱</span>
                <span>Instant Staff Notifications via Telegram</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-1 mt-2 text-sm">
              <span>📞</span>
              <span>SMS Confirmations to Patients</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
