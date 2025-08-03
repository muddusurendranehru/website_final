import React from 'react';
import { Heart, Shield, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <Heart className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Homa Healthcare Center</h1>
              <p className="text-sm text-blue-100">Your Health, Our Priority</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">APCOG Certified</span>
            </div>
            
            <a
              href="tel:+919963721999"
              className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Emergency</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;