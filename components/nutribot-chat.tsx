"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Send, Bot, ExternalLink } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function NutriBotChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "🩺 Hello! I'm Dr. Nehru's NutriBot. Click 'Open Full NutriBot' below to access the complete nutrition analysis app with 3 lakh foods from 165 countries!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")

  const handleGreenBotClick = () => {
    window.open("https://dynamic-mermaid-2ff7e0.netlify.app/", "_blank")
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("register") || input.includes("signup") || input.includes("complete")) {
      return "🎉 Ready to register? Click the 'Complete Registration' button below to finish your signup and get full access to all healthcare services!"
    }

    if (input.includes("biryani") || input.includes("rice")) {
      return "🍚 For detailed Biryani analysis with traffic light system, please use the full NutriBot app. Click 'Open Full NutriBot' for complete nutrition analysis!"
    }

    if (input.includes("apple") || input.includes("fruit")) {
      return "🍎 For comprehensive fruit analysis, use the full NutriBot app with access to 3 lakh foods from 165 countries!"
    }

    return "🤖 For complete nutrition analysis, please use the full NutriBot app! Click 'Open Full NutriBot' below for instant analysis of any food with Dr. Nehru's 25+ years of medical expertise."
  }

  const handleCompleteRegistration = () => {
    window.open("https://dr-nehru-healthcare-v-2-telegram-surendramuddu.replit.app/register", "_blank")
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={handleGreenBotClick}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-lg animate-bounce"
            size="lg"
          >
            <div className="relative">
              <Bot className="h-8 w-8 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs">❤️</span>
              </div>
            </div>
          </Button>
          <div className="absolute -top-12 right-0 bg-white rounded-lg px-3 py-1 shadow-lg text-sm font-medium whitespace-nowrap">
            Click for NutriBot! 🩺
          </div>
        </div>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96">
          <Card className="h-full flex flex-col shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <span>Dr. Nehru's NutriBot</span>
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm opacity-90">🩺 25+ years medical experience</p>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="whitespace-pre-line">{message.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="border-t p-3 space-y-2">
                <Button
                  onClick={handleGreenBotClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  size="sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Full NutriBot
                </Button>

                <Button
                  onClick={handleCompleteRegistration}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  size="sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Complete Registration
                </Button>
              </div>

              {/* Input */}
              <div className="border-t p-3">
                <div className="flex space-x-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask about nutrition..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="sm" className="bg-green-500 hover:bg-green-600">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
