# Cyber Awareness Mobile (React Native)

This is the React Native (Expo) mobile version of your Cyber Awareness app.

## Features
- Login screen with auto-registration on first login
- Home screen with feature cards (Threats, Cyber Laws, Password Checker, Malware, Incidents, Emergency, Learning)
- Uses the same backend API at http://localhost:5000

## Quickstart

1. Install dependencies
```powershell
cd mobile
npm i
```

2. Start Expo
```powershell
npm run start
```

3. Run on device/emulator
- Press `a` for Android, `i` for iOS (macOS), or scan QR with Expo Go.

Set `EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0` if you need LAN access.

## Config
- Update `API_BASE_URL` in `src/api/config.ts` if your backend runs on a different host.
