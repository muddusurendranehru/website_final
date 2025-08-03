// Global type definitions for the healthcare app

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  address: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  medicalHistory: string[];
  allergies: string[];
  currentMedications: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  type: 'consultation' | 'follow-up' | 'emergency' | 'telemedicine';
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  symptoms?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  qualification: string[];
  experience: number;
  email: string;
  phone: string;
  availability: {
    [key: string]: { start: string; end: string }[];
  };
  consultationFee: number;
  rating: number;
  reviewCount: number;
}

export interface Payment {
  id: string;
  patientId: string;
  appointmentId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: 'card' | 'upi' | 'netbanking' | 'wallet';
  transactionId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  appointmentId: string;
  diagnosis: string;
  prescription: Prescription[];
  labResults?: LabResult[];
  notes: string;
  followUpDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Prescription {
  id: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
  refills: number;
}

export interface LabResult {
  id: string;
  testName: string;
  result: string;
  normalRange: string;
  unit: string;
  status: 'normal' | 'abnormal' | 'critical';
  date: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'appointment' | 'payment' | 'medication' | 'lab_result' | 'general';
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: string;
}

export interface HealthMetric {
  id: string;
  patientId: string;
  type: 'weight' | 'blood_pressure' | 'heart_rate' | 'temperature' | 'blood_sugar' | 'oxygen_saturation';
  value: number | string;
  unit: string;
  recordedAt: string;
  notes?: string;
}

export interface DietEntry {
  id: string;
  patientId: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  foodItems: FoodItem[];
  totalCalories: number;
  recordedAt: string;
  notes?: string;
}

export interface FoodItem {
  name: string;
  quantity: number;
  unit: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Exercise {
  id: string;
  patientId: string;
  type: string;
  duration: number; // in minutes
  intensity: 'low' | 'moderate' | 'high';
  caloriesBurned: number;
  recordedAt: string;
  notes?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form types
export interface PatientRegistrationForm {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  address: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  medicalHistory: string;
  allergies: string;
  currentMedications: string;
}

export interface AppointmentBookingForm {
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  type: 'consultation' | 'follow-up' | 'emergency' | 'telemedicine';
  symptoms: string;
  notes?: string;
}

// Navigation types
export type Screen = 
  | 'home' 
  | 'register' 
  | 'payments' 
  | 'diet' 
  | 'medicines' 
  | 'followup' 
  | 'media' 
  | 'website';

export interface NavigationItem {
  id: Screen;
  label: string;
  icon: React.ComponentType<any>;
  path: string;
}

// External service types
export interface ExternalService {
  name: string;
  url: string;
  description: string;
  icon: React.ComponentType<any>;
  category: 'booking' | 'nutrition' | 'payment' | 'communication' | 'information';
}

// YouTube integration types (extending the existing ones)
export interface YouTubeVideoExtended {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: string;
  duration: string;
  channelTitle: string;
  category: string;
  tags: string[];
  healthTopic?: 'general' | 'nutrition' | 'exercise' | 'mental_health' | 'preventive_care';
}

// Communication types
export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  type: 'text' | 'image' | 'file' | 'voice';
  timestamp: string;
  read: boolean;
}

export interface VideoCallSession {
  id: string;
  patientId: string;
  doctorId: string;
  scheduledAt: string;
  startedAt?: string;
  endedAt?: string;
  status: 'scheduled' | 'active' | 'completed' | 'cancelled';
  recordingUrl?: string;
  notes?: string;
}