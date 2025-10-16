import { NextResponse } from 'next/server';

// Simple test endpoint - does NOT affect your live site
export async function GET() {
  return NextResponse.json({ 
    message: 'Backend test successful! ✅',
    status: 'Your main site is safe',
    timestamp: new Date().toISOString()
  });
}

