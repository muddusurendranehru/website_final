import React, { useState } from 'react';
import { 
  Utensils, 
  Apple, 
  Coffee, 
  Clock,
  Target,
  TrendingUp,
  Plus,
  Calendar,
  Heart,
  Droplets,
  Activity,
  MessageCircle,
  Stethoscope,
  User
} from 'lucide-react';

interface MealEntry {
  id: number;
  name: string;
  calories: number;
  time: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
}

interface NutritionGoal {
  name: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

const DietScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddMeal, setShowAddMeal] = useState(false);

  const todayMeals: MealEntry[] = [
    { id: 1, name: 'Oatmeal with berries', calories: 320, time: '8:00 AM', type: 'breakfast' },
    { id: 2, name: 'Greek yogurt', calories: 150, time: '10:30 AM', type: 'snack' },
    { id: 3, name: 'Grilled chicken salad', calories: 450, time: '1:00 PM', type: 'lunch' },
    { id: 4, name: 'Apple with almonds', calories: 180, time: '4:00 PM', type: 'snack' },
    { id: 5, name: 'Salmon with vegetables', calories: 520, time: '7:30 PM', type: 'dinner' }
  ];

  const nutritionGoals: NutritionGoal[] = [
    { name: 'Calories', current: 1620, target: 2000, unit: 'kcal', color: 'bg-blue-500' },
    { name: 'Protein', current: 85, target: 120, unit: 'g', color: 'bg-green-500' },
    { name: 'Carbs', current: 180, target: 250, unit: 'g', color: 'bg-yellow-500' },
    { name: 'Fat', current: 65, target: 80, unit: 'g', color: 'bg-purple-500' },
    { name: 'Water', current: 6, target: 8, unit: 'glasses', color: 'bg-cyan-500' }
  ];

  const totalCalories = todayMeals.reduce((sum, meal) => sum + meal.calories, 0);
  const calorieGoal = 2000;
  const calorieProgress = (totalCalories / calorieGoal) * 100;

  const openNutritionBot = () => {
    window.open('https://nutrition-bot-homa-surendramuddu.replit.app/', '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Nutrition & Diet Tracker</h1>
        <p className="text-gray-600">
          Track your meals and get personalized nutrition guidance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Daily Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Today's Overview</h2>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Calorie Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Daily Calories</span>
                <span className="text-sm text-gray-600">{totalCalories} / {calorieGoal} kcal</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(calorieProgress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0</span>
                <span className={calorieProgress > 100 ? 'text-red-500 font-medium' : ''}>
                  {Math.round(calorieProgress)}%
                </span>
                <span>{calorieGoal}</span>
              </div>
            </div>

            {/* Nutrition Goals Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {nutritionGoals.map((goal) => (
                <div key={goal.name} className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${2 * Math.PI * 28 * (1 - goal.current / goal.target)}`}
                        className={goal.color.replace('bg-', 'text-')}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-900">
                        {Math.round((goal.current / goal.target) * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-gray-900">{goal.name}</div>
                  <div className="text-xs text-gray-600">
                    {goal.current}/{goal.target} {goal.unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meals Timeline */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Today's Meals</h2>
              <button
                onClick={() => setShowAddMeal(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Meal</span>
              </button>
            </div>

            <div className="space-y-4">
              {['breakfast', 'lunch', 'dinner', 'snack'].map((mealType) => {
                const meals = todayMeals.filter(meal => meal.type === mealType);
                const mealCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
                
                return (
                  <div key={mealType} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          mealType === 'breakfast' ? 'bg-yellow-100' :
                          mealType === 'lunch' ? 'bg-green-100' :
                          mealType === 'dinner' ? 'bg-blue-100' : 'bg-purple-100'
                        }`}>
                          {mealType === 'breakfast' && <Coffee className="h-5 w-5 text-yellow-600" />}
                          {mealType === 'lunch' && <Utensils className="h-5 w-5 text-green-600" />}
                          {mealType === 'dinner' && <Utensils className="h-5 w-5 text-blue-600" />}
                          {mealType === 'snack' && <Apple className="h-5 w-5 text-purple-600" />}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 capitalize">{mealType}</h3>
                          <p className="text-sm text-gray-600">{mealCalories} calories</p>
                        </div>
                      </div>
                      <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                        + Add Food
                      </button>
                    </div>
                    
                    {meals.length > 0 ? (
                      <div className="space-y-2">
                        {meals.map((meal) => (
                          <div key={meal.id} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{meal.name}</div>
                                <div className="text-xs text-gray-600">{meal.time}</div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-gray-900">{meal.calories} cal</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-gray-500 text-sm">
                        No {mealType} logged yet
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Nutrition Bot */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-sm border border-pink-200 p-6">
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">👩‍⚕️</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Stethoscope className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Ask Dr. Nehru</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Free Nutrition Analysis</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 mb-4 border-2 border-dashed border-pink-200">
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <MessageCircle className="h-4 w-4" />
                <span>Ask about any food...</span>
              </div>
            </div>

            <button
              onClick={openNutritionBot}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat with Dr. Nehru Bot</span>
            </button>
            
            <div className="mt-3 text-center">
              <span className="inline-flex items-center space-x-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available 24/7</span>
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Progress</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">Avg. Calories</span>
                </div>
                <span className="text-sm font-medium text-gray-900">1,850/day</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-600">Goal Achievement</span>
                </div>
                <span className="text-sm font-medium text-green-600">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-4 w-4 text-cyan-500" />
                  <span className="text-sm text-gray-600">Water Intake</span>
                </div>
                <span className="text-sm font-medium text-gray-900">7.2 glasses</span>
              </div>
            </div>
          </div>

          {/* Health Tips */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Tip</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Heart className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-blue-900 mb-1">Stay Hydrated</h4>
                  <p className="text-sm text-blue-700">
                    Drink water before meals to help with digestion and portion control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietScreen;