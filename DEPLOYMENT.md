# Deployment Guide for Render

## Changes Made to Fix Deployment Issues

### 1. Updated Vite Configuration (`vite.config.ts`)
- Added server configuration to bind to `0.0.0.0`
- Added PORT environment variable support
- Added preview configuration for production

### 2. Updated Package.json
- Added `express` dependency for production server
- Updated `start` script to use Node.js server instead of Vite preview

### 3. Created Production Server (`server.js`)
- Express.js server to serve built static files
- Handles React Router properly
- Binds to `0.0.0.0` and uses PORT environment variable
- Includes health check endpoint

### 4. Added Configuration Files
- `render.yaml` - Render-specific configuration
- `.env.production` - Production environment variables

## Render Deployment Settings

When deploying on Render, make sure to:

1. **Build Command**: `npm install && npm run build`
2. **Start Command**: `npm start`
3. **Environment**: Node.js
4. **Port**: Will automatically use the PORT environment variable

## Local Testing

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test production server
npm start
```

The app will be available at `http://localhost:10000` (or the port specified in PORT env variable).

## Features Included

- ✅ Secure Authentication (JWT + bcrypt)
- ✅ SQLite Database Integration
- ✅ Cybersecurity Learning Resources
- ✅ Threat Analysis & Education
- ✅ Password Security Tools
- ✅ Emergency Response System
- ✅ Malware Awareness Content
- ✅ Responsive Design
- ✅ Production-Ready Deployment