import React from 'react';
import { Heart, Phone, Calendar, Users, Award, Clock, CheckCircle, Star, MapPin, Mail, MessageSquare, Youtube, Instagram } from 'lucide-react';

function App() {
  // Bottom Navigation Component (Preserved from original design)
  const BottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center py-2">
        <button className="flex flex-col items-center p-2 text-blue-600">
          <div className="w-6 h-6 mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <span className="text-xs font-medium">Home</span>
        </button>
        
        <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600">
          <div className="w-6 h-6 mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <span className="text-xs font-medium">Register</span>
        </button>
        
        <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600">
          <div className="w-6 h-6 mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
          <span className="text-xs font-medium">Payments</span>
        </button>
        
        <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600">
          <div className="w-6 h-6 mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
            </svg>
          </div>
          <span className="text-xs font-medium">Diet</span>
        </button>
        
        <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600">
          <div className="w-6 h-6 mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18V5zm-5.56 0H7.56L8 3.78 8.44 5zM19 17H5v-0.64l2-6 2 6H19z"/>
            </svg>
          </div>
          <span className="text-xs font-medium">Medicines</span>
        </button>
        
        <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600">
          <div className="w-6 h-6 mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <span className="text-xs font-medium">Follow-up</span>
        </button>
        
        <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600">
          <div className="w-6 h-6 mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
          <span className="text-xs font-medium">Media</span>
        </button>
        
        <button className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600">
          <div className="w-6 h-6 mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-6h11v6zm0-8H4V8h11v2zm5 8h-4V8h4v10z"/>
            </svg>
          </div>
          <span className="text-xs font-medium">Website</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-20"> {/* Added pb-20 for bottom nav space */}
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Homa Healthcare Center</h1>
                <p className="text-blue-100 text-sm">Your Health, Our Priority</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">TSMC 20548</span>
              </div>
              <a 
                href="tel:+919963721999" 
                onClick={() => window.trackPhoneClick && window.trackPhoneClick()}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">Emergency</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">TSMC 20548 Certified Healthcare</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dr. Muddu Surendra Nehru MD
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Expert Diabetes, Obesity & Women's Health Specialist in Hyderabad
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://wa.me/919963721999?text=Hello, I would like to book an appointment with Dr. Nehru"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.trackAppointmentClick && window.trackAppointmentClick()} 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>BOOK APPOINTMENT NOW</span>
            </a>
            <a 
              href="tel:+919963721999" 
              onClick={() => window.trackPhoneClick && window.trackPhoneClick()} 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency: +91-9963721999</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-2">5000+ Patients</h3>
              <p className="text-blue-100">Trusted by thousands</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-2">TSMC 20548</h3>
              <p className="text-blue-100">Certified specialist</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Expert Healthcare Services</h2>
            <p className="text-xl text-gray-600">TSMC 20548 Certified specialist care for your health needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border border-blue-100 text-center">
              <Heart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Diabetes Care</h3>
              <p className="text-gray-600 mb-4">Comprehensive diabetes management and treatment plans</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Type 1 & Type 2 Treatment</li>
                <li>• Blood Sugar Monitoring</li>
                <li>• Insulin Therapy Guidance</li>
                <li>• Complication Prevention</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border border-green-100 text-center">
              <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Obesity Treatment</h3>
              <p className="text-gray-600 mb-4">Personalized weight management and lifestyle counseling</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Medical Weight Loss</li>
                <li>• Nutritional Counseling</li>
                <li>• Exercise Prescription</li>
                <li>• Long-term Support</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 text-center">
              <Award className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Women's Health</h3>
              <p className="text-gray-600 mb-4">Specialized care for women's health and wellness needs</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Hormonal Disorders</li>
                <li>• Reproductive Health</li>
                <li>• PCOS Management</li>
                <li>• Preventive Screening</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-8 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Health?</h3>
            <p className="text-xl text-blue-100 mb-6">Book your consultation today with Dr. Nehru</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919963721999?text=Hello, I would like to book an appointment with Dr. Nehru"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.trackAppointmentClick && window.trackAppointmentClick()}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Booking</span>
              </a>
              <a 
                href="tel:+919963721999"
                onClick={() => window.trackPhoneClick && window.trackPhoneClick()}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Dr. Muddu Surendra Nehru MD</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of dedicated experience in healthcare, Dr. Nehru is a TSMC 20548 certified 
                specialist who has successfully treated over 5000 patients. His expertise spans diabetes 
                management, obesity treatment, and women's health with a focus on personalized care.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">TSMC 20548 Certified Healthcare Professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">15+ Years Clinical Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">5000+ Successful Patient Treatments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">24/7 Emergency Consultation Services</span>
                </div>
              </div>

              {/* Patient Testimonial */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Dr. Nehru's expertise in diabetes management has been life-changing. His personalized 
                  approach and 24/7 availability gave me confidence in managing my condition."
                </p>
                <p className="font-semibold text-gray-800">- Satisfied Patient, Hyderabad</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact & Location</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <Phone className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Emergency Contact</div>
                    <a 
                      href="tel:+919963721999"
                      onClick={() => window.trackPhoneClick && window.trackPhoneClick()}
                      className="text-blue-600 text-lg hover:text-blue-800"
                    >
                      +91-9963721999
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <Mail className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Email Contacts</div>
                    <div className="space-y-1">
                      <div>
                        <a href="mailto:homahealthcarecenter@gmail.com" className="text-green-600 hover:text-green-800">
                          homahealthcarecenter@gmail.com
                        </a>
                      </div>
                      <div>
                        <a href="mailto:surendra.muddu@gmail.com" className="text-green-600 hover:text-green-800">
                          surendra.muddu@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <MapPin className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Location</div>
                    <div className="text-purple-600">Hyderabad, Telangana</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="flex space-x-2">
                    <Youtube className="w-8 h-8 text-red-600" />
                    <Instagram className="w-8 h-8 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Follow Us</div>
                    <div className="space-y-1">
                      <div>
                        <a 
                          href="https://www.youtube.com/@homahealthcarecenter" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-800"
                        >
                          YouTube: @homahealthcarecenter
                        </a>
                      </div>
                      <div>
                        <a 
                          href="https://www.instagram.com/homahealthcarecenter" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-800"
                        >
                          Instagram: @homahealthcarecenter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinic Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Clinic Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="text-blue-600 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-700">Saturday</span>
                    <span className="text-blue-600 font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-700">Sunday</span>
                    <span className="text-red-600 font-medium">Emergency Only</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-gray-200 pt-2">
                    <span className="text-gray-700 font-medium">Emergency</span>
                    <span className="text-green-600 font-bold">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Homa Healthcare Center</h3>
                  <p className="text-gray-400 text-sm">Your Health, Our Priority</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Dr. Muddu Surendra Nehru MD - TSMC 20548 Certified specialist providing expert healthcare 
                in diabetes, obesity treatment, and women's health.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Diabetes Management</li>
                <li>Obesity Treatment</li>
                <li>Women's Health</li>
                <li>24/7 Emergency Care</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>📞 +91-9963721999</div>
                <div>📧 homahealthcarecenter@gmail.com</div>
                <div>📧 surendra.muddu@gmail.com</div>
                <div>📍 Hyderabad, Telangana</div>
                <div className="flex items-center space-x-4 mt-3">
                  <a 
                    href="https://www.youtube.com/@homahealthcarecenter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/homahealthcarecenter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Homa Healthcare Center. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">24/7 Emergency</span>
              <a 
                href="tel:+919963721999"
                onClick={() => window.trackPhoneClick && window.trackPhoneClick()}
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Beautiful Bottom Navigation - PRESERVED */}
      <BottomNavigation />
    </div>
  );
}

export default App;