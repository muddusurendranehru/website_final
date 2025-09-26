'use client'
import { useState } from 'react'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    
    const res = await fetch('https://xecrcdsfpvwczbnswyyl.supabase.co/rest/v1/our_customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlY3JjZHNmcHZ3Y3pibnN3eXlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MTk1OTIsImV4cCI6MjA3NDM5NTU5Mn0.D_x3sPUY_B4qbhfRJZp-Nu8812niC-w2uHUhcmryOOs'
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: phone + '@customer.local',
        password: password
      })
    })
    
    if (res.ok) {
      alert('Signup successful! Please login.')
      window.location.href = '/auth/login'
    } else {
      alert('Signup failed - phone may already exist')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-teal-600">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 mb-4 border rounded" required />
        <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 mb-4 border rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-4 border rounded" required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-3 mb-4 border rounded" required />
        <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded">Sign Up</button>
      </form>
    </div>
  )
}
