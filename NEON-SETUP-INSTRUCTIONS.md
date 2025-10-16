# Neon PostgreSQL Database Setup - "heart"

## ✅ What's Been Built

### Backend APIs (Complete)
- ✅ `/api/auth/signup` - Email + Password + Confirm Password
- ✅ `/api/auth/login` - Email + Password → JWT Token
- ✅ `/api/auth/logout` - Logout endpoint

### Frontend (Updated)
- ✅ Signup page - Now uses EMAIL (not phone)
- ✅ Login page - Now uses EMAIL (not phone)
- ✅ Redirects to homepage after login
- ✅ Removed Supabase hardcoded URLs

### Database Schema (Ready to Deploy)
- ✅ 2 tables with INTEGER primary keys (simple!)
- ✅ SQL file ready: `database-schema.sql`

---

## 🚀 SETUP STEPS (You Need to Do This)

### Step 1: Create Neon Account & Database

1. Go to: https://console.neon.tech
2. Sign up / Login (FREE plan is enough)
3. Click "Create a project"
4. **Project name:** "heart" 
5. **Database name:** "heart"
6. Click "Create"

### Step 2: Get Your Database Connection String

1. In Neon dashboard, click on your "heart" project
2. Find "Connection string"
3. Copy the URL (looks like: `postgresql://user:password@ep-xxxxx.us-east-2.aws.neon.tech/heart`)

### Step 3: Run the Database Schema

1. In Neon dashboard, go to "SQL Editor"
2. Open the file `database-schema.sql` from your project
3. Copy ALL the SQL code
4. Paste it into Neon SQL Editor
5. Click "Run" 
6. ✅ You should see: "2 tables created"

### Step 4: Create Environment Variables File

1. In your project root (website_final), create a file called `.env.local`
2. Add this content (replace with YOUR Neon URL):

```env
DATABASE_URL=postgresql://user:password@ep-xxxxx.us-east-2.aws.neon.tech/heart
JWT_SECRET=your-super-secret-key-change-this-12345
```

3. Save the file

### Step 5: Test Locally

1. Restart your dev server:
   ```powershell
   $env:PORT=3035; npm run dev
   ```

2. Open browser: http://localhost:3035/auth/signup
3. Create account with email + password
4. Login with email + password
5. Should redirect to homepage ✅

---

## 📊 Database Tables Created

### Table 1: `users`
- `id` - INTEGER (auto-increment)
- `email` - VARCHAR (unique)
- `password_hash` - TEXT
- `role` - VARCHAR (customer/staff)
- `created_at` - TIMESTAMP

### Table 2: `assessments`
- `id` - INTEGER (auto-increment)
- `user_id` - INTEGER (references users)
- `cod_homa_iq_score` - DECIMAL
- `assessment_data` - JSONB
- `created_at` - TIMESTAMP

---

## 🔐 Security Features

✅ Passwords hashed with bcrypt  
✅ JWT tokens for authentication (7-day expiry)  
✅ No hardcoded API keys  
✅ Environment variables for secrets  
✅ Email validation  
✅ Password strength check (min 6 characters)  

---

## 🎯 What Customers Can Do After Login

- Read your blog pages
- View all web apps
- Join 90-day program (when you connect it)
- Access health tracker
- Book appointments

## 🎯 What Staff Can Do (Later - To Be Connected)

- Login with staff account
- Enter COD HOMA IQ Score assessments
- View patient data

---

## ⚠️ IMPORTANT: Deploy to Vercel

After testing locally, to deploy to Vercel:

1. Add environment variables in Vercel dashboard:
   - Go to: https://vercel.com/your-project/settings/environment-variables
   - Add `DATABASE_URL` with your Neon URL
   - Add `JWT_SECRET` with your secret key

2. Redeploy your site

---

## 📝 Test User (Already Created in Schema)

Email: `test@example.com`  
Password: `test123`

You can login with this to test!

---

## ✅ Your Site is SAFE!

- Main branch: Untouched
- Working on: backend-test branch
- Live site: Still running perfectly
- When ready: Merge test branch → main → Vercel auto-deploys

---

Need help? Just ask! 🚀

