import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import useGlobalStore from '@/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'regular': require('../assets/fonts/Inter-Regular.ttf'),
    'semibold': require('../assets/fonts/Inter-SemiBold.ttf'),
  });

  const isAuth = useGlobalStore(state => state.isAuth);
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      if (loaded) {
        SplashScreen.hideAsync();
        setIsReady(true);
      }
    };

    initializeApp();
  }, [loaded]);

  useEffect(() => {
    if (isReady && isAuth !== undefined) {
      router.push(isAuth ? "/" : "/register");
    }
  }, [isReady, isAuth, router]);

  if (!loaded || !isReady) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
