import React, { useState } from 'react';
import { 
  Video, 
  Phone, 
  MessageSquare, 
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  X
} from 'lucide-react';

interface CommunicationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName?: string;
  appointmentTime?: string;
}

const CommunicationPanel: React.FC<CommunicationPanelProps> = ({
  isOpen,
  onClose,
  doctorName = "Dr. Priya Sharma",
  appointmentTime = "2:30 PM Today"
}) => {
  const [activeChat, setActiveChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'doctor',
      text: 'Hello! How are you feeling today?',
      time: '2:15 PM',
      read: true
    },
    {
      id: 2,
      sender: 'patient',
      text: 'Much better, thank you. The medication is helping.',
      time: '2:16 PM',
      read: true
    }
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'patient' as const,
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: false
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const startVideoCall = () => {
    // TODO: Integrate with video calling service (Zoom, Google Meet, or custom WebRTC)
    window.open('https://meet.google.com/new', '_blank');
  };

  const startAudioCall = () => {
    // TODO: Integrate with audio calling service
    window.open('tel:+919876543210');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">{doctorName}</h3>
                <p className="text-sm text-blue-100">Available now</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {!activeChat ? (
          /* Communication Options */
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Connect with Your Doctor
              </h2>
              <p className="text-gray-600 text-sm">
                Choose how you'd like to communicate
              </p>
            </div>

            <div className="space-y-4">
              {/* Video Call */}
              <button
                onClick={startVideoCall}
                className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all group"
              >
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-gray-900">Video Call</h3>
                  <p className="text-sm text-gray-600">Face-to-face consultation</p>
                </div>
                <div className="text-sm text-green-600 font-medium">Available</div>
              </button>

              {/* Audio Call */}
              <button
                onClick={startAudioCall}
                className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-all group"
              >
                <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-gray-900">Voice Call</h3>
                  <p className="text-sm text-gray-600">Audio consultation</p>
                </div>
                <div className="text-sm text-green-600 font-medium">Available</div>
              </button>

              {/* Text Chat */}
              <button
                onClick={() => setActiveChat(true)}
                className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-all group"
              >
                <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-gray-900">Text Chat</h3>
                  <p className="text-sm text-gray-600">Send a message</p>
                </div>
                <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</div>
              </button>
            </div>

            {/* Next Appointment Info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Next Appointment</span>
              </div>
              <p className="text-sm text-blue-700">{appointmentTime}</p>
            </div>

            {/* Emergency Contact */}
            <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium text-red-900">Emergency</span>
              </div>
              <p className="text-sm text-red-700">For urgent medical issues, call: +91 98765 43210</p>
            </div>
          </div>
        ) : (
          /* Chat Interface */
          <div className="flex flex-col h-96">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <button
                onClick={() => setActiveChat(false)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                ← Back
              </button>
              <h3 className="font-medium text-gray-900">Chat with {doctorName}</h3>
              <div className="w-12"></div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === 'patient'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className={`text-xs ${
                        msg.sender === 'patient' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {msg.time}
                      </span>
                      {msg.sender === 'patient' && (
                        <CheckCircle className={`h-3 w-3 ${
                          msg.read ? 'text-blue-200' : 'text-blue-300'
                        }`} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={sendMessage}
                  disabled={!message.trim()}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    message.trim()
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunicationPanel;