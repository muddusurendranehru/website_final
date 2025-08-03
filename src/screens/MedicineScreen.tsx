import React, { useState } from 'react';
import { 
  Pill, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Plus,
  Bell,
  Calendar,
  Phone,
  Stethoscope
} from 'lucide-react';

interface Medicine {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  taken: boolean[];
  notes?: string;
}

const MedicineScreen: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([
    {
      id: 1,
      name: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Twice daily',
      times: ['9:00 AM', '9:00 PM'],
      taken: [true, false],
      notes: 'Take with food'
    },
    {
      id: 2,
      name: 'Vitamin D3',
      dosage: '1000 IU',
      frequency: 'Once daily',
      times: ['8:00 AM'],
      taken: [true],
      notes: 'Take with breakfast'
    },
    {
      id: 3,
      name: 'Omeprazole',
      dosage: '20mg',
      frequency: 'Once daily',
      times: ['7:00 AM'],
      taken: [false],
      notes: 'Take before breakfast'
    }
  ]);

  const toggleMedicineTaken = (medicineId: number, timeIndex: number) => {
    setMedicines(prev => prev.map(med => 
      med.id === medicineId 
        ? {
            ...med,
            taken: med.taken.map((taken, idx) => 
              idx === timeIndex ? !taken : taken
            )
          }
        : med
    ));
  };

  const getTodayStats = () => {
    const totalDoses = medicines.reduce((acc, med) => acc + med.times.length, 0);
    const takenDoses = medicines.reduce((acc, med) => acc + med.taken.filter(Boolean).length, 0);
    return { totalDoses, takenDoses, percentage: totalDoses > 0 ? (takenDoses / totalDoses) * 100 : 0 };
  };

  const stats = getTodayStats();

  const medicineCategories = [
    {
      name: 'Prescription Medications',
      description: 'Doctor-prescribed medicines for specific conditions',
      icon: Stethoscope,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Over-the-Counter',
      description: 'Non-prescription medicines and supplements',
      icon: Pill,
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Vitamins & Supplements',
      description: 'Daily vitamins and nutritional supplements',
      icon: Plus,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Medicine Tracker</h1>
        <p className="text-gray-600">
          Keep track of your medications and never miss a dose
        </p>
      </div>

      {/* Daily Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Today's Progress</h2>
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-600">Reminders On</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.takenDoses}</div>
            <div className="text-sm text-gray-600">Doses Taken</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{stats.totalDoses}</div>
            <div className="text-sm text-gray-600">Total Doses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{Math.round(stats.percentage)}%</div>
            <div className="text-sm text-gray-600">Completion</div>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${stats.percentage}%` }}
          />
        </div>
      </div>

      {/* Medicine Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {medicineCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className={`${category.color} p-3 rounded-lg w-fit mb-3`}>
              <category.icon className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Medicine List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Current Medications</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Medicine</span>
          </button>
        </div>

        <div className="space-y-4">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{medicine.name}</h3>
                  <p className="text-gray-600">{medicine.dosage} • {medicine.frequency}</p>
                  {medicine.notes && (
                    <p className="text-sm text-blue-600 mt-1">📝 {medicine.notes}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-2">
                {medicine.times.map((time, timeIndex) => (
                  <div key={timeIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="font-medium text-gray-700">{time}</span>
                    </div>
                    <button
                      onClick={() => toggleMedicineTaken(medicine.id, timeIndex)}
                      className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        medicine.taken[timeIndex]
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                      }`}
                    >
                      {medicine.taken[timeIndex] ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          <span>Taken</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="h-4 w-4" />
                          <span>Pending</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medication Reminders */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Medication Reminders</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <Bell className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Smart Notifications</h3>
              <p className="text-sm text-gray-600">Get timely reminders for each medication dose</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Calendar className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Refill Alerts</h3>
              <p className="text-sm text-gray-600">Never run out of important medications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Phone className="h-5 w-5 text-red-600" />
          <h3 className="font-medium text-red-900">Medical Emergency</h3>
        </div>
        <p className="text-sm text-red-700">
          For medication-related emergencies or adverse reactions, call: 
          <a href="tel:+919963721999" className="font-medium hover:underline ml-1">
            +91 99637 21999
          </a>
        </p>
      </div>
    </div>
  );
};

export default MedicineScreen;