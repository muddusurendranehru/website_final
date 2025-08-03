import React, { useState } from 'react';
import { 
  CreditCard, 
  DollarSign, 
  Calendar, 
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Phone,
  ExternalLink
} from 'lucide-react';

const PaymentScreen: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');

  const services = [
    {
      id: 'consultation',
      name: 'General Consultation',
      price: 500,
      duration: '30 minutes',
      description: 'Comprehensive health checkup with Dr. Nehru',
      features: ['Physical examination', 'Medical history review', 'Treatment plan', 'Prescription if needed']
    },
    {
      id: 'followup',
      name: 'Follow-up Visit',
      price: 300,
      duration: '15 minutes',
      description: 'Follow-up consultation for existing patients',
      features: ['Progress review', 'Medication adjustment', 'Health monitoring', 'Quick consultation']
    },
    {
      id: 'emergency',
      name: 'Emergency Consultation',
      price: 800,
      duration: '45 minutes',
      description: 'Urgent medical consultation',
      features: ['Immediate attention', 'Priority booking', 'Extended consultation', 'Emergency care']
    }
  ];

  const handlePayment = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      // Redirect to payment portal with service details
      const paymentUrl = `${import.meta.env.VITE_PAYMENT_URL}?service=${serviceId}&amount=${service.price}&name=${encodeURIComponent(service.name)}`;
      window.open(paymentUrl, '_blank');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Portal</h1>
        <p className="text-gray-600">
          Secure payment processing for healthcare services
        </p>
      </div>

      {/* Service Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-white rounded-xl shadow-sm border-2 transition-all cursor-pointer hover:shadow-md ${
              selectedService === service.id
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => setSelectedService(service.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">₹{service.price}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePayment(service.id);
                }}
                className="w-full mt-6 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 font-medium"
              >
                <CreditCard className="h-5 w-5" />
                <span>Pay Now</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Accepted Payment Methods</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-600">Credit/Debit Cards</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-600">UPI Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-gray-600">Net Banking</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Security & Support</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-600">SSL Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-600">Secure Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Process */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
            <h3 className="font-medium text-gray-900 mb-1">Select Service</h3>
            <p className="text-xs text-gray-600">Choose your consultation type</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
            <h3 className="font-medium text-gray-900 mb-1">Make Payment</h3>
            <p className="text-xs text-gray-600">Secure online payment</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
            <h3 className="font-medium text-gray-900 mb-1">Get Confirmation</h3>
            <p className="text-xs text-gray-600">Receive booking details</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
            <h3 className="font-medium text-gray-900 mb-1">Visit Clinic</h3>
            <p className="text-xs text-gray-600">Attend your appointment</p>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Phone className="h-5 w-5 text-red-600" />
          <h3 className="font-medium text-red-900">Emergency Contact</h3>
        </div>
        <p className="text-sm text-red-700">
          For urgent medical issues or payment support, call: 
          <a href="tel:+919963721999" className="font-medium hover:underline ml-1">
            +91 99637 21999
          </a>
        </p>
      </div>
    </div>
  );
};

export default PaymentScreen;