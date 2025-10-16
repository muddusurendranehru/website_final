-- Neon PostgreSQL Database: "heart"
-- Run this in your Neon SQL Editor

-- Table 1: users (INTEGER primary key - simple and full control)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(50) DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table 2: assessments (for COD HOMA IQ Score - to be used by staff later)
CREATE TABLE IF NOT EXISTS assessments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  cod_homa_iq_score DECIMAL(10, 2),
  assessment_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_assessments_user_id ON assessments(user_id);

-- Insert a test user (password: "test123")
-- Password hash for "test123" using bcrypt
INSERT INTO users (email, password_hash, role) 
VALUES ('test@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'customer')
ON CONFLICT (email) DO NOTHING;

