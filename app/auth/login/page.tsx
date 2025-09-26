'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    
    const res = await fetch(`https://xecrcdsfpvwczbnswyyl.supabase.co/rest/v1/our_customers?phone=eq.${phone}&password=eq.${password}`, {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlY3JjZHNmcHZ3Y3pibnN3eXlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MTk1OTIsImV4cCI6MjA3NDM5NTU5Mn0.D_x3sPUY_B4qbhfRJZp-Nu8812niC-w2uHUhcmryOOs'
      }
    })
    
    const data = await res.json()
    if (data.length > 0) {
      localStorage.setItem('user', JSON.stringify(data[0]))
      // Stay on same website, just go to home
      window.location.href = '/'
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-teal-600">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Homa Healthcare Login</h1>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded hover:bg-purple-700">
          Sign In
        </button>
      </form>
    </div>
  )
}
