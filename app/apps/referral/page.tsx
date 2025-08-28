import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { FileText, Building2 } from "lucide-react"

export default function ReferralSystemPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Healthcare Referral System</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect patients with professional medical supervision through Dr. Muddu Surendra Nehru MD
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Patient Portal */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl mb-4">👤 Patient Portal</CardTitle>
                <CardDescription className="text-lg mb-6">
                  Submit patient information and get connected with healthcare professionals
                </CardDescription>
                <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800">
                  Access Patient Portal
                </Button>
              </Card>

              {/* Healthcare Dashboard */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl mb-4">🏥 Healthcare Dashboard</CardTitle>
                <CardDescription className="text-lg mb-6">
                  View and manage patient referrals and healthcare connections
                </CardDescription>
                <Button size="lg" variant="outline" className="w-full bg-transparent">
                  View Dashboard
                </Button>
              </Card>
            </div>

            {/* Professional Medical Supervision */}
            <Card className="p-8 text-center bg-gradient-to-r from-blue-50 to-green-50">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Medical Supervision</h2>

              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  DN
                </div>
              </div>

              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Muddu Surendra Nehru MD</h3>
                <p className="text-gray-600 mb-1">Professor of Medicine</p>
                <p className="text-gray-600 mb-1">TSMC 20548 Certified Specialist</p>
                <p className="text-blue-600 font-medium mb-4">+91 9963721999</p>
                <p className="text-gray-600">Homa Healthcare Center • www.homahealthcarecenter.in</p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
