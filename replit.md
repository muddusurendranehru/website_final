# Homa Healthcare Center - Patient Portal

## Overview

Homa Healthcare Center is a comprehensive healthcare management system for Dr. Muddu Surendra Nehru MD (TSMC 20548 Certified). The platform provides a complete patient portal with appointment booking, health tracking, telemedicine integration, AI-powered nutrition guidance (NutriBot), and various healthcare web applications.

**Live Site:** https://homahealthcarecenter.in

The system is designed as a Next.js application with a modern, mobile-first architecture focusing on healthcare service delivery and patient engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & UI:**
- Next.js 14+ with App Router (TypeScript)
- React 18 with Server Components where applicable
- Tailwind CSS with custom healthcare-themed color tokens (blue-to-green gradient design)
- shadcn/ui component library (New York style variant)
- Geist font family (Sans + Mono)
- Radix UI primitives for accessible components
- Lucide React for iconography

**Design Pattern:**
- Mobile-first responsive design with 8-tab bottom navigation
- Progressive Web App (PWA) ready
- Component-based architecture with reusable UI components in `/components/ui`
- Custom business components in `/components` (navigation, footer, blog cards, CTAs, etc.)
- Client-side interactivity using "use client" directive where needed

**Routing Structure:**
- App-based routing with Next.js App Router
- Dynamic routes for blog posts (`/blog/[slug]`)
- Feature-specific routes under `/apps/*` for web applications
- Authentication routes under `/auth/*`
- API routes under `/app/api/*`

**SEO & Metadata:**
- Comprehensive metadata configuration in `layout.tsx`
- Structured data (JSON-LD) for search engines using Next.js Script component
- Dynamic sitemap generation (`sitemap.ts`)
- Robots.txt configuration (`robots.ts`)
- Open Graph and Twitter card support

### Backend Architecture

**API Layer:**
- Next.js API Routes (Route Handlers) in `/app/api`
- RESTful endpoint design
- JWT-based authentication system

**Authentication System:**
- Email/password authentication (not phone-based)
- bcryptjs for password hashing (10 salt rounds)
- jsonwebtoken for session management (7-day expiration)
- Token stored client-side in localStorage
- Role-based access control (user roles stored in database)

**Authentication Endpoints:**
- `POST /api/auth/signup` - User registration with email/password/confirmPassword
- `POST /api/auth/login` - User login returning JWT token
- `POST /api/auth/logout` - Client-side logout handler

**Business Logic:**
- Authentication helpers in `/lib/auth.ts` (password hashing, token generation/verification)
- Database connection utilities in `/lib/db.ts`
- Utility functions in `/lib/utils.ts` (className merging with clsx/tailwind-merge)

### Data Storage

**Database:**
- Neon PostgreSQL (serverless)
- Connection via `@neondatabase/serverless` package
- Environment-based connection string (`DATABASE_URL`)

**Schema Design:**
- Two primary tables with INTEGER primary keys
- Users table: id, email, password_hash, role
- Simple, normalized schema design
- Schema defined in `database-schema.sql` (not included in provided files but referenced)

**Data Access Pattern:**
- Direct SQL queries using Neon's SQL template literals
- No ORM layer (uses raw SQL for simplicity)
- Connection pooling handled by Neon serverless

### Authentication & Authorization

**Strategy:**
- JWT-based stateless authentication
- Client-side token storage
- Server-side token verification using JWT_SECRET environment variable
- Password security via bcrypt with 10 rounds

**Security Measures:**
- Environment variable validation (throws errors if JWT_SECRET or DATABASE_URL missing)
- Email format validation
- Password strength requirements (minimum 6 characters)
- Password confirmation matching
- Duplicate email prevention
- HTTPS enforcement (live site)

**Session Management:**
- 7-day JWT expiration
- Token payload includes: userId, email, role
- Client-side logout clears localStorage

## External Dependencies

### Third-Party Services

**Payment Processing:**
- Stripe integration (referenced but implementation in external app)
- Payment portal: https://homa-payment-final-surendramuddu.replit.app/

**AI Services:**
- NutriBot: External AI nutrition app at https://dynamic-mermaid-2ff7e0.netlify.app/
- Supports 300,000 foods from 165 countries
- Integrated via iframe/external link pattern

**Healthcare Systems:**
- Patient referral system: https://v0-connect-to-supabase-green.vercel.app/
- External healthcare dashboard integration

**Communication:**
- WhatsApp integration for appointment booking (via direct links)
- Email notifications (infrastructure referenced but implementation not shown)
- SMS confirmations (referenced in patient registration)

**Media & Content:**
- YouTube API integration for educational video content
- Google AdSense ad placement infrastructure (placeholders in components)

### Database Service

**Neon PostgreSQL:**
- Serverless PostgreSQL hosting
- Project name: "heart"
- Database name: "heart"
- Connection via `@neondatabase/serverless` npm package
- Requires `DATABASE_URL` environment variable
- Free tier compatible

### Deployment & Hosting

**Primary Hosting:**
- Netlify deployment for main site
- Custom domain via BigRock: homahealthcarecenter.in
- Global CDN via Netlify Edge
- SSL/HTTPS enabled

**External Services:**
- Replit for payment processing app
- Netlify for NutriBot app
- Vercel for patient referral system

### Development Dependencies

**Key Packages:**
- `next` - Framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `@neondatabase/serverless` - Database client
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT handling
- `@radix-ui/*` - Accessible UI primitives (20+ packages)
- `lucide-react` - Icon system
- `class-variance-authority` - Variant styling
- `date-fns` - Date manipulation
- `embla-carousel-react` - Carousels
- `zod` - Schema validation (via @hookform/resolvers)
- `react-hook-form` - Form management

**Build Configuration:**
- Next.js custom dev/start ports: 5000
- Host binding: 0.0.0.0 (for container/replit compatibility)
- TypeScript strict mode enabled
- ES6 target for broader compatibility
- Path aliases: `@/*` maps to project root

### Environment Variables Required

```
DATABASE_URL=postgresql://user:password@host/heart
JWT_SECRET=<secure-random-string>
```

**Note:** Application throws explicit errors if these are missing, ensuring secure deployment practices.