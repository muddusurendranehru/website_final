import React from 'react';
import { 
  UserPlus, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const RegisterScreen: React.FC = () => {
  const openRegistration = () => {
    window.open(import.meta.env.VITE_REGISTER_URL, '_blank');
  };

  const registrationSteps = [
    {
      step: 1,
      title: 'Personal Information',
      description: 'Fill in your basic details and contact information'
    },
    {
      step: 2,
      title: 'Medical History',
      description: 'Provide your medical background and current medications'
    },
    {
      step: 3,
      title: 'Emergency Contact',
      description: 'Add emergency contact details for safety'
    },
    {
      step: 4,
      title: 'Verification',
      description: 'Verify your information and complete registration'
    }
  ];

  const benefits = [
    'Priority appointment booking',
    'Digital health records',
    'Prescription management',
    'Follow-up reminders',
    'Health tracking tools',
    'Direct doctor communication'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Patient Registration</h1>
        <p className="text-gray-600">
          Join Homa Healthcare Center for comprehensive medical care
        </p>
      </div>

      {/* Main Registration Card */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl p-8 mb-8">
        <div className="text-center">
          <div className="bg-white bg-opacity-20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <UserPlus className="h-10 w-10" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">New Patient Registration</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Register as a new patient to access our comprehensive healthcare services, 
            book appointments, and manage your health records digitally.
          </p>
          
          <button
            onClick={openRegistration}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-3 mx-auto text-lg"
          >
            <UserPlus className="h-6 w-6" />
            <span>Start Registration</span>
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Registration Process */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Registration Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {registrationSteps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                {item.step}
              </div>
              <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Registration Benefits</h2>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What You'll Need</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-1 rounded">
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Personal Documents</h3>
                <p className="text-sm text-gray-600">ID proof, address proof, and contact details</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-1 rounded">
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Medical Information</h3>
                <p className="text-sm text-gray-600">Previous medical records and current medications</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-1 rounded">
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Emergency Contact</h3>
                <p className="text-sm text-gray-600">Contact details of a family member or friend</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Need Help with Registration?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-900">Call Us</h3>
              <a href="tel:+919963721999" className="text-sm text-blue-600 hover:underline">
                +91 99637 21999
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-900">Email Us</h3>
              <a href="mailto:info@homahealthcarecenter.in" className="text-sm text-blue-600 hover:underline">
                info@homahealthcarecenter.in
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-900">Visit Us</h3>
              <p className="text-sm text-gray-600">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Clock className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Registration Hours</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Online Registration</h3>
            <p className="text-sm text-gray-600">Available 24/7 through our online portal</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Phone Support</h3>
            <p className="text-sm text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={openRegistration}
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>Complete Registration Online</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;