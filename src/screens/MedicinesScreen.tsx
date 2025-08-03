import React, { useState } from 'react';
import { 
  Pill, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Camera, 
  Plus,
  Bell,
  Calendar,
  Upload,
  X
} from 'lucide-react';

interface Medicine {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  taken: boolean[];
  notes?: string;
  prescriptionImage?: string;
}

const MedicinesScreen: React.FC = () => {
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

  const [showAddForm, setShowAddForm] = useState(false);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    dosage: '',
    frequency: '',
    times: [''],
    notes: ''
  });

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

  const addMedicine = () => {
    if (newMedicine.name && newMedicine.dosage) {
      const medicine: Medicine = {
        id: Date.now(),
        name: newMedicine.name,
        dosage: newMedicine.dosage,
        frequency: newMedicine.frequency,
        times: newMedicine.times.filter(time => time.length > 0),
        taken: new Array(newMedicine.times.filter(time => time.length > 0).length).fill(false),
        notes: newMedicine.notes
      };
      
      setMedicines(prev => [...prev, medicine]);
      setNewMedicine({ name: '', dosage: '', frequency: '', times: [''], notes: '' });
      setShowAddForm(false);
    }
  };

  const getTodayStats = () => {
    const totalDoses = medicines.reduce((acc, med) => acc + med.times.length, 0);
    const takenDoses = medicines.reduce((acc, med) => acc + med.taken.filter(Boolean).length, 0);
    return { totalDoses, takenDoses, percentage: totalDoses > 0 ? (takenDoses / totalDoses) * 100 : 0 };
  };

  const stats = getTodayStats();

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
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${stats.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Medicine List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Current Medications</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
          >
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
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Camera className="h-4 w-4" />
                  </button>
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

      {/* Prescription Upload */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Prescription</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Prescription Photo</h3>
          <p className="text-gray-600 mb-4">
            Take a clear photo of your prescription for easy reference
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Choose Photo
          </button>
        </div>
      </div>

      {/* Add Medicine Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Add New Medicine</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medicine Name *
                </label>
                <input
                  type="text"
                  value={newMedicine.name}
                  onChange={(e) => setNewMedicine(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter medicine name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dosage *
                </label>
                <input
                  type="text"
                  value={newMedicine.dosage}
                  onChange={(e) => setNewMedicine(prev => ({ ...prev, dosage: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 500mg, 1 tablet"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frequency
                </label>
                <select
                  value={newMedicine.frequency}
                  onChange={(e) => setNewMedicine(prev => ({ ...prev, frequency: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select frequency</option>
                  <option value="Once daily">Once daily</option>
                  <option value="Twice daily">Twice daily</option>
                  <option value="Three times daily">Three times daily</option>
                  <option value="Four times daily">Four times daily</option>
                  <option value="As needed">As needed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time(s)
                </label>
                <input
                  type="time"
                  value={newMedicine.times[0]}
                  onChange={(e) => setNewMedicine(prev => ({ 
                    ...prev, 
                    times: [e.target.value, ...prev.times.slice(1)]
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={newMedicine.notes}
                  onChange={(e) => setNewMedicine(prev => ({ ...prev, notes: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Take with food, Before breakfast"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addMedicine}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add Medicine
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicinesScreen;