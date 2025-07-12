# CESCOTECH - Solutions Platform

## Overview
CESCOTECH is a comprehensive business solutions platform built as a full-stack web application. The system provides technology and management services, featuring a modern React frontend with a Node.js/Express backend. The application showcases company services, portfolio, testimonials, and includes a contact form system for client inquiries.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod schema validation for type safety

### Development Setup
- **Development Server**: Vite dev server with HMR
- **Production Build**: esbuild for server bundling, Vite for client assets
- **TypeScript**: Full TypeScript support across client and server
- **Environment**: ESM modules throughout the stack

## Key Components

### Database Schema
- **Users Table**: Authentication system (prepared but not implemented)
  - Fields: id, username, password
- **Contact Submissions Table**: Client inquiry management
  - Fields: id, name, email, phone, service, message, created_at

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact-submissions` - Retrieve all contact submissions (admin)

### Frontend Sections
- **Hero Section**: Landing area with call-to-action buttons
- **Services Section**: Company service offerings display
- **About Section**: Company information with animated statistics
- **Portfolio Section**: Project showcase with technology badges
- **Testimonials Section**: Client testimonials and reviews
- **Contact Section**: Contact form with service selection

### UI Components
- Complete shadcn/ui component library integration
- Custom Logo component with CESCOTECH branding
- Responsive design with mobile-first approach
- Dark/light theme support via CSS variables

## Data Flow

### Contact Form Submission
1. User fills contact form on frontend
2. Form data validated using Zod schema
3. POST request sent to `/api/contact` endpoint
4. Server validates data and stores in database
5. Success/error response sent back to client
6. Toast notification displayed to user

### Component Communication
1. React Query manages server state caching
2. Form state managed with local React state
3. Navigation handled via smooth scrolling to sections
4. Mobile menu state managed with Sheet component

## External Dependencies

### Frontend Dependencies
- **UI Framework**: @radix-ui/* components for accessible UI primitives
- **Styling**: tailwindcss, clsx, tailwind-merge for styling utilities
- **State Management**: @tanstack/react-query for server state
- **Form Handling**: @hookform/resolvers with zod validation
- **Icons**: lucide-react for consistent iconography
- **Date Utilities**: date-fns for date manipulation

### Backend Dependencies
- **Database**: drizzle-orm with @neondatabase/serverless
- **Validation**: zod with drizzle-zod for schema validation
- **Development**: tsx for TypeScript execution

## Deployment Strategy

### Production Configuration
- **Database**: PostgreSQL via DATABASE_URL environment variable
- **Build Process**: 
  1. `npm run build` - Builds client assets with Vite
  2. Bundles server with esbuild for Node.js deployment
- **Deployment Target**: Replit autoscale deployment
- **Environment**: Production optimizations enabled

### Development Workflow
- **Dev Command**: `npm run dev` - Starts development server with hot reload
- **Database Migration**: `npm run db:push` - Push schema changes to database
- **Type Checking**: `npm run check` - TypeScript compilation check

## Changelog
- June 23, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.