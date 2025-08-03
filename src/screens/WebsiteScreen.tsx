import React from 'react';
import { 
  Globe, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Award,
  Users,
  Heart,
  Shield,
  Calendar,
  ArrowRight
} from 'lucide-react';

const WebsiteScreen: React.FC = () => {
  const openWebsite = () => {
    window.open(import.meta.env.VITE_MAIN_WEBSITE_URL, '_blank');
  };

  const features = [
    {
      icon: Heart,
      title: 'Comprehensive Care',
      description: 'Complete healthcare services under one roof'
    },
    {
      icon: Shield,
      title: 'APCOG Certified',
      description: 'Certified by Andhra Pradesh Obstetrics & Gynecology Society'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Qualified medical professionals with years of experience'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Committed to providing the highest quality healthcare'
    }
  ];

  const services = [
    'General Consultation',
    'Women\'s Health',
    'Preventive Care',
    'Health Screenings',
    'Chronic Disease Management',
    'Emergency Care',
    'Telemedicine',
    'Health Education'
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Excellent care and very professional staff. Dr. Nehru is amazing!',
      location: 'Hyderabad'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best healthcare experience. Modern facilities and caring doctors.',
      location: 'Secunderabad'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Official Website</h1>
        <p className="text-gray-600">
          Visit our main website for complete information about our services
        </p>
      </div>

      {/* Main Website Card */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl p-8 mb-8">
        <div className="text-center">
          <div className="bg-white bg-opacity-20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Globe className="h-10 w-10" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Homa Healthcare Center</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our complete healthcare services, learn about our medical team, 
            and discover why thousands of patients trust us with their health.
          </p>
          
          <button
            onClick={openWebsite}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-3 mx-auto text-lg"
          >
            <Globe className="h-6 w-6" />
            <span>Visit Website</span>
            <ExternalLink className="h-5 w-5" />
          </button>
          
          <p className="text-blue-100 mt-4 text-sm">
            www.homahealthcarecenter.in
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Why Choose Homa Healthcare?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-sm font-medium text-gray-900">{service}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={openWebsite}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 mx-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Patient Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-3 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-900">Phone</h3>
              <a href="tel:+919963721999" className="text-sm text-blue-600 hover:underline">
                +91 99637 21999
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <a href="mailto:info@homahealthcarecenter.in" className="text-sm text-blue-600 hover:underline">
                info@homahealthcarecenter.in
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-900">Location</h3>
              <p className="text-sm text-gray-600">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={openWebsite}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Globe className="h-5 w-5" />
          <span>Explore Full Website</span>
          <ExternalLink className="h-4 w-4" />
        </button>
        
        <a
          href="tel:+919963721999"
          className="bg-white border-2 border-blue-500 text-blue-600 p-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
        >
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};

export default WebsiteScreen;