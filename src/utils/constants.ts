// Application constants

export const APP_CONFIG = {
  name: 'Homa Healthcare Center',
  version: '1.0.0',
  description: 'Professional Healthcare Management System',
  supportEmail: 'support@homahealthcarecenter.in',
  supportPhone: '+91 98765 43210',
  website: 'https://www.homahealthcarecenter.in'
};

export const EXTERNAL_SERVICES = {
  virtualClinic: import.meta.env.VITE_VIRTUAL_CLINIC_URL || 'https://dr-surendra-nehru-virtual-clinic-homa-surendramuddu.replit.app/',
  nutritionBot: import.meta.env.VITE_NUTRITION_BOT_URL || 'https://nutrition-bot-homa-surendramuddu.replit.app/',
  mainWebsite: import.meta.env.VITE_MAIN_WEBSITE_URL || 'https://www.homahealthcarecenter.in',
  youtubeChannel: import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UCf8avHrw6K07POXSIoKgHwg'
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'register', label: 'Register', path: '/register' },
  { id: 'payments', label: 'Payments', path: '/payments' },
  { id: 'diet', label: 'Diet', path: '/diet' },
  { id: 'medicines', label: 'Medicines', path: '/medicines' },
  { id: 'followup', label: 'Follow-up', path: '/followup' },
  { id: 'media', label: 'Media', path: '/media' },
  { id: 'website', label: 'Website', path: '/website' }
];

export const APPOINTMENT_TYPES = [
  { value: 'consultation', label: 'General Consultation' },
  { value: 'follow-up', label: 'Follow-up Visit' },
  { value: 'emergency', label: 'Emergency' },
  { value: 'telemedicine', label: 'Telemedicine' }
];

export const PAYMENT_METHODS = [
  { value: 'card', label: 'Credit/Debit Card' },
  { value: 'upi', label: 'UPI' },
  { value: 'netbanking', label: 'Net Banking' },
  { value: 'wallet', label: 'Digital Wallet' }
];

export const HEALTH_CATEGORIES = [
  'General Health',
  'Nutrition',
  'Exercise & Fitness',
  'Mental Health',
  'Preventive Care',
  'Chronic Disease Management',
  'Women\'s Health',
  'Pediatric Care',
  'Senior Care',
  'Emergency Care'
];

export const MEAL_TYPES = [
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'snack', label: 'Snack' }
];

export const EXERCISE_INTENSITIES = [
  { value: 'low', label: 'Low Intensity' },
  { value: 'moderate', label: 'Moderate Intensity' },
  { value: 'high', label: 'High Intensity' }
];

export const NOTIFICATION_TYPES = [
  { value: 'appointment', label: 'Appointment Reminder' },
  { value: 'payment', label: 'Payment Notification' },
  { value: 'medication', label: 'Medication Reminder' },
  { value: 'lab_result', label: 'Lab Result Available' },
  { value: 'general', label: 'General Notification' }
];

export const API_ENDPOINTS = {
  patients: '/api/patients',
  appointments: '/api/appointments',
  payments: '/api/payments',
  doctors: '/api/doctors',
  medications: '/api/medications',
  diet: '/api/diet',
  exercises: '/api/exercises',
  notifications: '/api/notifications',
  youtube: '/api/youtube',
  chat: '/api/chat',
  videocall: '/api/videocall'
};

export const LOCAL_STORAGE_KEYS = {
  user: 'homa_user',
  token: 'homa_token',
  preferences: 'homa_preferences',
  theme: 'homa_theme',
  language: 'homa_language'
};

export const THEME_COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  secondary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d'
  },
  accent: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87'
  }
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const ANIMATION_DURATIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms'
};

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070
};

export const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[\d\s\-\(\)]{10,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  name: /^[a-zA-Z\s]{2,50}$/,
  pincode: /^\d{6}$/
};

export const ERROR_MESSAGES = {
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
  invalidPhone: 'Please enter a valid phone number',
  weakPassword: 'Password must be at least 8 characters with uppercase, lowercase, number and special character',
  invalidName: 'Name should contain only letters and spaces (2-50 characters)',
  invalidPincode: 'Please enter a valid 6-digit pincode',
  networkError: 'Network error. Please check your connection and try again.',
  serverError: 'Server error. Please try again later.',
  unauthorized: 'You are not authorized to perform this action.',
  notFound: 'The requested resource was not found.',
  validationError: 'Please check your input and try again.'
};

export const SUCCESS_MESSAGES = {
  registrationComplete: 'Registration completed successfully!',
  appointmentBooked: 'Appointment booked successfully!',
  paymentComplete: 'Payment completed successfully!',
  profileUpdated: 'Profile updated successfully!',
  passwordChanged: 'Password changed successfully!',
  dataExported: 'Data exported successfully!',
  notificationSent: 'Notification sent successfully!'
};