import React from 'react';
import { 
  Calendar, 
  UserPlus, 
  Utensils, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  Heart,
  Shield,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Activity
} from 'lucide-react';
import { Screen } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const quickActions = [
    {
      icon: UserPlus,
      title: 'Register',
      description: 'New patient signup',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      action: () => window.open(import.meta.env.VITE_REGISTER_URL, '_blank')
    },
    {
      icon: Utensils,
      title: 'Diet Bot',
      description: 'Nutrition guidance',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      action: () => window.open('https://dynamic-mermaid-2ff7e0.netlify.app/', '_blank')
    },
    {
      icon: Globe,
      title: 'Website',
      description: 'Visit our website',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      action: () => window.open(import.meta.env.VITE_MAIN_WEBSITE_URL, '_blank')
    },
    {
      icon: Calendar,
      title: 'Appointments',
      description: 'Schedule your visit',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      action: () => onNavigate('followup')
    }
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
    },
    {
      name: 'Anita Reddy',
      rating: 5,
      text: 'Highly recommend! Professional service and great results.',
      location: 'Gachibowli'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">APCOG Certified Healthcare</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Homa Healthcare Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your Health, Our Priority - Professional Care You Can Trust
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => onNavigate('payments')}
                className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Calendar className="h-6 w-6" />
                <span>📅 BOOK APPOINTMENT NOW</span>
              </button>
              
              <a
                href="tel:+919963721999"
                className="inline-flex items-center space-x-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                <Phone className="h-6 w-6" />
                <span>Emergency Contact</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <Users className="h-8 w-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">5000+ Patients</h3>
                <p className="text-sm text-blue-100">Trusted by thousands</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <Award className="h-8 w-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">APCOG Certified</h3>
                <p className="text-sm text-blue-100">Professional excellence</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <Phone className="h-8 w-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-blue-100">Always here for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <p className="text-gray-600 text-lg">Everything you need for your healthcare journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className={`${action.color} ${action.hoverColor} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group`}
            >
              <action.icon className="h-12 w-12 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
              <p className="text-sm opacity-90">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive healthcare solutions for you and your family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">General Consultation</h3>
              <p className="text-gray-600 mb-4">Comprehensive health checkups and medical consultations</p>
              <button 
                onClick={() => onNavigate('payments')}
                className="text-blue-600 font-medium hover:text-blue-700 flex items-center space-x-1"
              >
                <span>Book Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <Heart className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Care</h3>
              <p className="text-gray-600 mb-4">Regular health screenings and preventive medicine</p>
              <button 
                onClick={() => onNavigate('followup')}
                className="text-green-600 font-medium hover:text-green-700 flex items-center space-x-1"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <Activity className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Monitoring</h3>
              <p className="text-gray-600 mb-4">Digital health tracking and personalized care plans</p>
              <button 
                onClick={() => onNavigate('diet')}
                className="text-purple-600 font-medium hover:text-purple-700 flex items-center space-x-1"
              >
                <span>Start Tracking</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from real patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Book your appointment today and experience professional healthcare that puts you first.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-blue-200" />
                  <span className="text-blue-100">Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-200" />
                  <span className="text-blue-100">+91 99637 21999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-200" />
                  <span className="text-blue-100">info@homahealthcarecenter.in</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Book Your Appointment</h3>
              <div className="space-y-4">
                <button
                  onClick={() => onNavigate('payments')}
                  className="w-full bg-white text-blue-600 py-4 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Online Appointment</span>
                </button>
                
                <a
                  href="tel:+919963721999"
                  className="w-full bg-transparent border-2 border-white text-white py-4 px-6 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
                
                <a
                  href={import.meta.env.VITE_MAIN_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Visit Our Website</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;