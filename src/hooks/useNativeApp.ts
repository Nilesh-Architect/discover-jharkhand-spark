import { useEffect } from 'react';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

export const useNativeApp = () => {
  useEffect(() => {
    const initNativeFeatures = async () => {
      if (Capacitor.isNativePlatform()) {
        // Hide splash screen after app loads
        await SplashScreen.hide();
        
        // Configure status bar
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: '#1a5f3d' });
      }
    };

    initNativeFeatures();
  }, []);

  return {
    isNative: Capacitor.isNativePlatform(),
    platform: Capacitor.getPlatform()
  };
};
