import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone,
  CheckCircle,
  AlertCircle,
  Plus,
  ExternalLink,
  Stethoscope,
  MapPin
} from 'lucide-react';

interface Appointment {
  id: number;
  date: string;
  time: string;
  doctor: string;
  type: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  notes?: string;
}

const FollowUpScreen: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      date: '2024-01-25',
      time: '10:00 AM',
      doctor: 'Dr. Surendra Nehru',
      type: 'Follow-up Consultation',
      status: 'upcoming',
      notes: 'Blood pressure check and medication review'
    },
    {
      id: 2,
      date: '2024-01-20',
      time: '2:30 PM',
      doctor: 'Dr. Surendra Nehru',
      type: 'General Consultation',
      status: 'completed',
      notes: 'Initial consultation completed successfully'
    },
    {
      id: 3,
      date: '2024-01-30',
      time: '11:15 AM',
      doctor: 'Dr. Surendra Nehru',
      type: 'Health Checkup',
      status: 'upcoming',
      notes: 'Annual health screening'
    }
  ]);

  const bookAppointment = () => {
    // This would typically open a booking form or redirect to booking system
    alert('Appointment booking feature will be integrated with the main booking system');
  };

  const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');
  const completedAppointments = appointments.filter(apt => apt.status === 'completed');

  const appointmentTypes = [
    {
      name: 'Follow-up Visit',
      duration: '15-20 minutes',
      price: '₹300',
      description: 'Review progress and adjust treatment plan'
    },
    {
      name: 'General Consultation',
      duration: '30 minutes',
      price: '₹500',
      description: 'Comprehensive health consultation'
    },
    {
      name: 'Health Checkup',
      duration: '45 minutes',
      price: '₹800',
      description: 'Complete health screening and tests'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Follow-up & Appointments</h1>
        <p className="text-gray-600">
          Manage your appointments and schedule follow-up visits
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          onClick={bookAppointment}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center space-x-4"
        >
          <div className="bg-white bg-opacity-20 p-3 rounded-lg">
            <Plus className="h-8 w-8" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Book New Appointment</h3>
            <p className="text-blue-100">Schedule your next visit</p>
          </div>
        </button>

        <a
          href="tel:+919963721999"
          className="bg-white border-2 border-blue-500 text-blue-600 p-6 rounded-xl hover:bg-blue-50 transition-colors flex items-center space-x-4"
        >
          <div className="bg-blue-100 p-3 rounded-lg">
            <Phone className="h-8 w-8 text-blue-600" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Call Clinic</h3>
            <p className="text-blue-500">+91 99637 21999</p>
          </div>
        </a>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {upcomingAppointments.length} scheduled
          </span>
        </div>

        {upcomingAppointments.length > 0 ? (
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{appointment.type}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(appointment.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{appointment.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{appointment.doctor}</span>
                        </div>
                      </div>
                      {appointment.notes && (
                        <p className="text-sm text-blue-600 mt-2">📝 {appointment.notes}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Confirmed
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming appointments</h3>
            <p className="text-gray-600 mb-4">Schedule your next visit with Dr. Nehru</p>
            <button
              onClick={bookAppointment}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        )}
      </div>

      {/* Appointment Types */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Available Appointment Types</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {appointmentTypes.map((type, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{type.name}</h3>
                <span className="text-lg font-bold text-blue-600">{type.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{type.description}</p>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>{type.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Appointments</h2>
        
        {completedAppointments.length > 0 ? (
          <div className="space-y-4">
            {completedAppointments.map((appointment) => (
              <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{appointment.type}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span>{new Date(appointment.date).toLocaleDateString()}</span>
                        <span>{appointment.time}</span>
                        <span>{appointment.doctor}</span>
                      </div>
                      {appointment.notes && (
                        <p className="text-sm text-gray-600 mt-2">{appointment.notes}</p>
                      )}
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center py-4">No recent appointments</p>
        )}
      </div>

      {/* Clinic Information */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Clinic Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Contact Details</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <a href="tel:+919963721999" className="text-sm text-blue-600 hover:underline">
                  +91 99637 21999
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Stethoscope className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">Dr. Surendra Nehru - TSMC 20548 Certified</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Clinic Hours</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Emergency Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpScreen;