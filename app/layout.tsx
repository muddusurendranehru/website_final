import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Homa Healthcare Center - Comprehensive Healthcare Services & Medical Apps",
    template: "%s | Homa Healthcare Center",
  },
  description:
    "Leading healthcare center offering comprehensive medical services, AI-powered health apps, telemedicine consultations, and personalized wellness solutions. Book appointments online, access patient portal, and improve your health with expert care.",
  keywords: [
    "healthcare center",
    "medical services",
    "telemedicine",
    "health apps",
    "patient portal",
    "appointment booking",
    "nutrition guidance",
    "health tracking",
    "medical consultation",
    "wellness solutions",
    "healthcare technology",
    "preventive care",
  ],
  authors: [{ name: "Homa Healthcare Center", url: "https://www.homahealthcarecenter.in" }],
  creator: "Homa Healthcare Center",
  publisher: "Homa Healthcare Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.homahealthcarecenter.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.homahealthcarecenter.in",
    title: "Homa Healthcare Center - Comprehensive Healthcare Services & Medical Apps",
    description:
      "Leading healthcare center offering comprehensive medical services, AI-powered health apps, telemedicine consultations, and personalized wellness solutions.",
    siteName: "Homa Healthcare Center",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Homa Healthcare Center - Your trusted healthcare partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homa Healthcare Center - Comprehensive Healthcare Services & Medical Apps",
    description:
      "Leading healthcare center offering comprehensive medical services, AI-powered health apps, telemedicine consultations, and personalized wellness solutions.",
    images: ["/og-image.jpg"],
    creator: "@homahealthcare",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Healthcare",
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Homa Healthcare Center",
  description: "Comprehensive healthcare services with integrated web applications for modern patient care",
  url: "https://www.homahealthcarecenter.in",
  logo: "https://www.homahealthcarecenter.in/logo.png",
  image: "https://www.homahealthcarecenter.in/og-image.jpg",
  telephone: "+91-555-123-4567",
  email: "info@homahealthcarecenter.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Healthcare Street",
    addressLocality: "Medical District",
    addressRegion: "State",
    postalCode: "110001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6139",
    longitude: "77.2090",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-17:00", "Su 10:00-16:00"],
  priceRange: "₹₹",
  acceptsReservations: true,
  hasMap: "https://maps.google.com/maps?q=Homa+Healthcare+Center",
  sameAs: [
    "https://www.facebook.com/homahealthcare",
    "https://www.twitter.com/homahealthcare",
    "https://www.instagram.com/homahealthcare",
    "https://www.linkedin.com/company/homahealthcare",
  ],
  medicalSpecialty: [
    "General Medicine",
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Pediatrics",
    "Gynecology",
    "Neurology",
    "Nutrition Counseling",
  ],
  availableService: [
    {
      "@type": "MedicalService",
      name: "Telemedicine Consultations",
      description: "Virtual medical consultations with certified healthcare professionals",
    },
    {
      "@type": "MedicalService",
      name: "AI-Powered Nutrition Guidance",
      description: "Personalized meal planning and nutrition recommendations using artificial intelligence",
    },
    {
      "@type": "MedicalService",
      name: "Health Tracking & Monitoring",
      description: "Comprehensive health metrics tracking and progress monitoring",
    },
    {
      "@type": "MedicalService",
      name: "Patient Portal Access",
      description: "Secure online access to medical records and test results",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
