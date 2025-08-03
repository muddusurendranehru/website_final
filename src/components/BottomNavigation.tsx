import React from 'react';
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
import { Screen } from '../App';

interface BottomNavigationProps {
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentScreen,
  onScreenChange
}) => {
  const navigationItems = [
    { id: 'home' as Screen, label: 'Home', icon: Home },
    { id: 'register' as Screen, label: 'Register', icon: UserPlus },
    { id: 'payments' as Screen, label: 'Payments', icon: CreditCard },
    { id: 'diet' as Screen, label: 'Diet', icon: Utensils },
    { id: 'medicines' as Screen, label: 'Medicines', icon: Pill },
    { id: 'followup' as Screen, label: 'Follow-up', icon: Calendar },
    { id: 'media' as Screen, label: 'Media', icon: Play },
    { id: 'website' as Screen, label: 'Website', icon: Globe }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="grid grid-cols-4 md:grid-cols-8">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
                isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;