import React from 'react';
import { 
  Utensils, 
  ExternalLink, 
  MessageCircle, 
  Apple,
  Heart,
  TrendingUp,
  Clock,
  Target,
  Bot,
  Stethoscope
} from 'lucide-react';

const DietScreen: React.FC = () => {
  const openDietBot = () => {
    // Use the working diet bot URL
    window.open('https://dynamic-mermaid-2ff7e0.netlify.app/', '_blank');
  };

  const nutritionTips = [
    {
      icon: Apple,
      title: 'Balanced Diet',
      description: 'Include fruits, vegetables, proteins, and whole grains in your daily meals'
    },
    {
      icon: Heart,
      title: 'Heart Health',
      description: 'Choose foods low in saturated fats and high in omega-3 fatty acids'
    },
    {
      icon: TrendingUp,
      title: 'Portion Control',
      description: 'Monitor portion sizes to maintain a healthy weight and energy levels'
    },
    {
      icon: Clock,
      title: 'Meal Timing',
      description: 'Eat regular meals and avoid late-night snacking for better digestion'
    }
  ];

  const dietPlans = [
    {
      name: 'Weight Management',
      description: 'Balanced calorie-controlled diet for healthy weight loss or gain',
      features: ['Customized calorie targets', 'Macro tracking', 'Weekly meal plans']
    },
    {
      name: 'Diabetic Diet',
      description: 'Blood sugar-friendly meal plans for diabetes management',
      features: ['Low glycemic foods', 'Carb counting', 'Blood sugar monitoring']
    },
    {
      name: 'Heart Healthy',
      description: 'Low-sodium, low-fat diet for cardiovascular health',
      features: ['DASH diet principles', 'Omega-3 rich foods', 'Cholesterol management']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Diet & Nutrition Center</h1>
        <p className="text-gray-600">
          Get personalized nutrition guidance and diet plans
        </p>
      </div>

      {/* AI Diet Bot */}
      <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-xl p-8 mb-8">
        <div className="text-center">
          <div className="bg-white bg-opacity-20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Bot className="h-10 w-10" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">AI-Powered Diet Assistant</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Get instant nutrition advice, meal planning, and dietary recommendations 
            from our intelligent diet bot powered by advanced AI technology.
          </p>
          
          <button
            onClick={openDietBot}
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center space-x-3 mx-auto text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Chat with Diet Bot</span>
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Nutrition Tips */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Nutrition Guidelines</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nutritionTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <tip.icon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diet Plans */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Specialized Diet Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dietPlans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              
              <div className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={openDietBot}
                className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
              >
                Get Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Diet Bot Features</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">24/7 Nutrition Consultation</span>
            </div>
            <div className="flex items-center space-x-3">
              <Apple className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">Personalized Meal Plans</span>
            </div>
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-5 w-5 text-purple-500" />
              <span className="text-gray-700">Calorie & Macro Tracking</span>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-gray-700">Health Condition Support</span>
            </div>
            <div className="flex items-center space-x-3">
              <Stethoscope className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Medical Diet Guidance</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-medium text-gray-900">Share Your Goals</h3>
                <p className="text-sm text-gray-600">Tell the bot about your health goals and dietary preferences</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-medium text-gray-900">Get Recommendations</h3>
                <p className="text-sm text-gray-600">Receive personalized meal plans and nutrition advice</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-medium text-gray-900">Track Progress</h3>
                <p className="text-sm text-gray-600">Monitor your nutrition intake and health improvements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200 p-6">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Start Your Nutrition Journey Today</h2>
          <p className="text-gray-600 mb-6">
            Get expert nutrition guidance tailored to your health needs and lifestyle preferences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openDietBot}
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              <Bot className="h-5 w-5" />
              <span>Start Diet Consultation</span>
              <ExternalLink className="h-4 w-4" />
            </button>
            
            <a
              href="tel:+919963721999"
              className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              <Stethoscope className="h-5 w-5" />
              <span>Consult Nutritionist</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietScreen;