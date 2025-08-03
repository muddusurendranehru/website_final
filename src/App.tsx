import React, { useState } from 'react';
import { 
  Home, 
  UserPlus, 
  CreditCard, 
  Utensils, 
  Pill, 
  Calendar, 
  Play, 
  Globe
} from 'lucide-react';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import PaymentScreen from './screens/PaymentScreen';
import DietScreen from './screens/DietScreen';
import MedicineScreen from './screens/MedicineScreen';
import FollowUpScreen from './screens/FollowUpScreen';
import MediaScreen from './screens/MediaScreen';
import WebsiteScreen from './screens/WebsiteScreen';

export type Screen = 'home' | 'register' | 'payments' | 'diet' | 'medicines' | 'followup' | 'media' | 'website';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'register':
        return <RegisterScreen />;
      case 'payments':
        return <PaymentScreen />;
      case 'diet':
        return <DietScreen />;
      case 'medicines':
        return <MedicineScreen />;
      case 'followup':
        return <FollowUpScreen />;
      case 'media':
        return <MediaScreen />;
      case 'website':
        return <WebsiteScreen />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1 pb-20">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen={currentScreen} 
        onScreenChange={setCurrentScreen}
      />
    </div>
  );
}

export default App;