# 📱 Discover Jharkhand - Native Mobile App Setup

Your app is now configured as a native mobile application using Capacitor! Here's everything you need to know.

## ✨ What's Been Added

- **Splash Screen**: Beautiful branded splash screen with Jharkhand imagery
- **App Icon**: Custom app icon with forest and waterfall design
- **Status Bar**: Themed status bar matching your brand colors
- **Native Capabilities**: Full access to phone features (camera, GPS, notifications, etc.)
- **Optimized Performance**: Native app performance on iOS and Android

## 🚀 How to Run on Your Phone

### Step 1: Transfer to GitHub
1. Click the **"Export to GitHub"** button in Lovable (top right)
2. Git pull the project to your local machine

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Initialize Native Platforms

**For iOS (requires Mac with Xcode):**
```bash
npx cap add ios
npx cap update ios
```

**For Android (requires Android Studio):**
```bash
npx cap add android
npx cap update android
```

### Step 4: Build the Web App
```bash
npm run build
```

### Step 5: Sync to Native Platforms
```bash
npx cap sync
```

**Important**: Run `npx cap sync` every time you pull new changes from GitHub!

### Step 6: Run on Device/Emulator

**For iOS:**
```bash
npx cap run ios
```
This will open Xcode. Click the Play button to run on simulator or connected iPhone.

**For Android:**
```bash
npx cap run android
```
This will open Android Studio. Click Run to launch on emulator or connected Android device.

## 🎨 App Assets Created

- `public/splash.png` - Splash screen (1080x1920)
- `public/icon.png` - App icon (1024x1024)
- `capacitor.config.ts` - Native app configuration

## 📋 Configuration Details

**App ID**: `app.lovable.225a3ecb052b47b4be15d3d83a6f4a85`  
**App Name**: Discover Jharkhand  
**Splash Duration**: 2 seconds  
**Theme Color**: Forest Green (#1a5f3d)

## 🔧 Development Mode

The app is configured with hot-reload from the Lovable sandbox:
- You can develop and test in real-time on your device
- Changes in Lovable will reflect immediately on your connected device
- Perfect for rapid prototyping and testing

## 📱 Native Features Available

With Capacitor, you can now use:
- **Camera**: Take photos and videos
- **Geolocation**: Get user's current location
- **Push Notifications**: Send alerts about festivals/events
- **Local Storage**: Offline data storage
- **Share API**: Native sharing to social media
- **Biometric Auth**: Fingerprint/Face ID
- **And much more!**

## 🎯 Next Steps

1. **Test on real devices** to see the splash screen and native features
2. **Customize splash/icon** if needed (replace files in `public/` folder)
3. **Add native features** like camera, geolocation, push notifications
4. **Publish to app stores** when ready:
   - iOS: Apple Developer Account required
   - Android: Google Play Console account required

## 📚 Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [iOS Publishing Guide](https://capacitorjs.com/docs/ios/deploying-to-app-store)
- [Android Publishing Guide](https://capacitorjs.com/docs/android/deploying-to-google-play)

## 💡 Tips

- Always run `npm run build` before `npx cap sync` to include latest changes
- Use `npx cap open ios` or `npx cap open android` to open native projects directly
- For production, update the `server.url` in `capacitor.config.ts` to your deployed URL

---

**Need Help?** Check the [Lovable Capacitor Documentation](https://docs.lovable.dev/features/mobile-apps) for more details!
