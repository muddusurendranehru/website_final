import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Activity, Clock, Heart, Shield, Phone, ArrowRight } from "lucide-react"

export default function ExerciseDatabasePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto text-center max-w-4xl">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
              <span className="text-2xl">💪</span>
              <span className="text-purple-600 font-medium">Ki korbo?</span>
            </div>

            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">
                  ⭐
                </span>
              ))}
            </div>

            <p className="text-gray-600 mb-8">Professional Medical Exercise Database</p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Dr. Nehru's Exercise Database</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              25+ Years of Medical Excellence • Professional Exercise Analysis
            </p>

            {/* Search Section */}
            <Card className="max-w-2xl mx-auto p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg">Ask Your Exercise Question</h3>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <Input
                placeholder='e.g., "Hockey 20 minutes calories burnt" or "Diabetes-friendly exercises"'
                className="text-lg p-4"
              />
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Instant Analysis */}
              <Card className="p-6 text-center bg-blue-50 hover:shadow-lg transition-shadow">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-3">Instant Analysis</CardTitle>
                <CardDescription>Get immediate exercise analysis and recommendations</CardDescription>
              </Card>

              {/* Dr. Nehru's AI */}
              <Card className="p-6 text-center bg-purple-50 hover:shadow-lg transition-shadow">
                <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-3">Dr. Nehru's AI</CardTitle>
                <CardDescription>AI-powered medical exercise consultation</CardDescription>
              </Card>

              {/* Exercise + Nutrition */}
              <Card className="p-6 text-center bg-green-50 hover:shadow-lg transition-shadow">
                <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-3">Exercise + Nutrition</CardTitle>
                <CardDescription>Complete health and nutrition guidance</CardDescription>
              </Card>

              {/* Diabetes Care */}
              <Card className="p-6 text-center bg-orange-50 hover:shadow-lg transition-shadow">
                <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-3">Diabetes Care</CardTitle>
                <CardDescription>Specialized diabetes-friendly exercise plans</CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center max-w-2xl">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">+91 99637 21999</h2>
            <p className="text-gray-600">Professional Medical Consultation • Exercise & Health Analysis</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
