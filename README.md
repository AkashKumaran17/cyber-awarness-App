# 🛡️ Cyber Awareness App

A comprehensive cybersecurity awareness platform built with React and React Native, featuring educational resources, security tools, and real-time threat information.

## 🚀 Features

### 🌐 Web Application (React + TypeScript + Vite)
- **Authentication System**: Secure JWT-based authentication with auto-registration
- **Learning Resources**: 15+ curated YouTube courses on cybersecurity, networking, and ethical hacking
- **Interactive Tools**: Password strength checker, threat analysis, malware detection
- **Educational Content**: Cyber laws, security incidents, emergency response guides
- **Modern UI**: Tailwind CSS with animations and responsive design

### 📱 Mobile Application (React Native + Expo)
- **Cross-Platform**: iOS and Android support
- **Shared Backend**: Uses the same API as the web application
- **Native Performance**: Optimized for mobile devices
- **Offline Support**: Core functionality available offline

## 🛠️ Tech Stack

### Frontend (Web)
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast development server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **React Router DOM** - Navigation
- **Lucide React** - Icons

### Mobile (React Native)
- **Expo** - Development platform
- **React Native** - Mobile framework
- **Expo Router** - File-based routing
- **React Native Reanimated** - Animations
- **AsyncStorage** - Local storage

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **SQLite3** - Database
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-origin resource sharing

## 📂 Project Structure

```
cyber-awarness-App/
├── src/                          # Web app source
│   ├── components/               # Reusable components
│   ├── contexts/                 # React contexts
│   ├── pages/                    # Page components
│   └── types/                    # TypeScript types
├── server/                       # Backend API
│   ├── server.js                 # Express server
│   ├── cybersecurity.db          # SQLite database
│   └── db-viewer.js              # Database utility
├── mobile/                       # React Native app
│   ├── app/                      # Expo Router pages
│   ├── src/                      # Mobile app source
│   └── babel.config.js           # Babel configuration
└── package.json                  # Web app dependencies
```

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### 1. Clone Repository
```bash
git clone https://github.com/AkashKumaran17/cyber-awarness-App.git
cd cyber-awarness-App
```

### 2. Install Dependencies
```bash
# Web app dependencies
npm install

# Mobile app dependencies
cd mobile
npm install
cd ..
```

### 3. Start Backend Server
```bash
cd server
node server.js
```
Server runs on `http://localhost:5000`

### 4. Start Web Application
```bash
# In root directory
npm run dev
```
Web app runs on `http://localhost:5173`

### 5. Start Mobile Application (Optional)
```bash
cd mobile
npm run start
# or
npx expo start
```

## 🎓 Learning Resources

The app includes **15 curated YouTube courses** organized by category:

### 🔐 Cybersecurity (Basics + Advanced)
- Cyber Security Full Course for Beginners | Edureka (8.5 hrs)
- Cybersecurity Training for Beginners | Simplilearn (6.75 hrs)
- Cyber Security Crash Course (2.25 hrs)
- Introduction to Cybersecurity | Cisco (4.33 hrs)
- Cybersecurity Roadmap 2024 (45 min)

### 🌐 Networking Courses
- Computer Networking Full Course | Cisco & Packet Tracer (12 hrs)
- Computer Networking Course – Network Engineering (9.5 hrs)
- Computer Networking Basics | Simplilearn (3.75 hrs)
- CCNA Full Course (Beginner to Advanced) (15 hrs)
- OSI Model Explained (25 min)

### 🔓 Ethical Hacking
- Ethical Hacking Full Course for Beginners | Simplilearn (10.5 hrs)
- Ethical Hacking Tutorial for Beginners | Edureka (8.25 hrs)
- Complete Ethical Hacking Course | FreeCodeCamp (15.75 hrs)
- CEH (Certified Ethical Hacker) Full Course (12.33 hrs)
- Kali Linux Ethical Hacking Tutorial (6.5 hrs)

**Total: 115+ hours of educational content**

## 🔧 Configuration

### Backend Configuration
Edit `server/.env` (create if doesn't exist):
```env
PORT=5000
JWT_SECRET=your_jwt_secret_here
```

### Mobile Configuration
For physical device testing, update `mobile/src/api/config.ts`:
```typescript
// Replace with your computer's IP address
const LAN = 'http://192.168.1.100:5000';
export const API_BASE_URL = `${LAN}/api`;
```

## 🚀 Deployment

### Web Application
```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

### Mobile Application
```bash
cd mobile
npx expo build:android  # For Android
npx expo build:ios      # For iOS (requires macOS)
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for secure cross-origin requests
- **SQL Injection Prevention**: Parameterized queries

## 📱 Mobile Features

- **Auto-Registration**: Seamless user onboarding
- **Offline Support**: Core functionality without internet
- **Native Navigation**: Smooth transitions between screens
- **Gesture Support**: Native touch interactions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Akash Kumaran**
- GitHub: [@AkashKumaran17](https://github.com/AkashKumaran17)
- Repository: [cyber-awarness-App](https://github.com/AkashKumaran17/cyber-awarness-App)

## 🙏 Acknowledgments

- Educational content from Edureka, Simplilearn, Cisco, and FreeCodeCamp
- Icons by Lucide React
- UI inspiration from modern cybersecurity platforms

---

**⚡ Built with passion for cybersecurity education and awareness**