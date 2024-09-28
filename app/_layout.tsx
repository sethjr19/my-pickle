import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from './providers/AuthProvider';
import { useAuth } from "./providers/AuthProvider";
import {Stack} from "expo-router";
import  TabsLayout from "./(tabs)/_layout";
import AuthLayout from "./(auth)/_layout";

export default function RootLayout() {
  const { user } = useAuth();
  const [fontsLoaded, error] = useFonts({
    "Pacifico": require("../assets/fonts/Pacifico-Regular.ttf"),
  })

  if (!user) {
    console.log("No user");
  }
  
  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null; // You can return a loading component here if needed
  }
  
  return (
    <AuthProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
      {user ? (
        <Stack.Screen name="tabs"/>
      ) : (
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      )}
    </Stack>
    </GestureHandlerRootView>
    </AuthProvider>
  );
}
