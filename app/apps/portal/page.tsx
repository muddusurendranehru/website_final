"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Calendar, Pill, Shield, Lock } from "lucide-react"
import { useState } from "react"

export default function PatientPortalPage() {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to external healthcare referral system for actual portal access
    window.open("https://v0-connect-to-supabase-green.vercel.app/", "_blank")
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    window.open("https://v0-connect-to-supabase-green.vercel.app/", "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Secure Access
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Patient Portal</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Access your medical records, test results, appointment history, and communicate with your healthcare team
              securely online.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Login Form */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Lock className="h-6 w-6 text-secondary" />
                        <span>Patient Login</span>
                      </CardTitle>
                      <CardDescription>
                        Enter your credentials to access your patient portal and medical information.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="loginEmail">Email Address</Label>
                          <Input
                            id="loginEmail"
                            type="email"
                            placeholder="Enter your email address"
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="loginPassword">Password</Label>
                          <Input
                            id="loginPassword"
                            type="password"
                            placeholder="Enter your password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            required
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Button variant="link" className="p-0 h-auto text-sm" type="button">
                            Forgot Password?
                          </Button>
                        </div>
                        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                          Login to Portal
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="register">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="h-6 w-6 text-secondary" />
                        <span>New Patient Registration</span>
                      </CardTitle>
                      <CardDescription>
                        Click below to access our comprehensive patient registration system with full healthcare portal
                        features.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center py-8">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Register for full access to your healthcare portal, medical records, and appointment
                          management.
                        </p>
                        <Button
                          onClick={handleRegister}
                          className="w-full bg-secondary hover:bg-secondary/90"
                          size="lg"
                        >
                          Access Registration System
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Portal Features Preview */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-primary mb-6">What You Can Access</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-secondary" />
                        <span>Medical Records</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        View your complete medical history, diagnoses, treatment plans, and physician notes.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Download className="h-5 w-5 text-secondary" />
                        <span>Test Results</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Access and download your lab results, imaging reports, and other diagnostic test results.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-secondary" />
                        <span>Appointments</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        View upcoming appointments, reschedule visits, and access appointment history.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Pill className="h-5 w-5 text-secondary" />
                        <span>Prescriptions</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Manage your medications, request refills, and view prescription history.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Security Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-secondary" />
                    <span>Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium">HIPAA Compliant</p>
                    <p className="text-muted-foreground">Your data is protected by industry standards</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Encrypted Connection</p>
                    <p className="text-muted-foreground">All communications are secure</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-muted-foreground">Extra layer of account protection</p>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Portal User Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Technical Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Contact IT Help Desk
                  </Button>
                </CardContent>
              </Card>

              {/* Ad Space */}
              <Card className="border-dashed border-2 border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-center text-sm">Health Apps</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Download our mobile app for easy access</p>
                  <Button variant="outline" size="sm">
                    Get App
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
