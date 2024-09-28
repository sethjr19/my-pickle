import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { useAuth } from '../providers/AuthProvider';

const AuthLayout = () => {
  const { user } = useAuth();

  return (
    <Stack>
      <Stack.Screen name="register" options={{ headerTitle: 'Register' }} />
      <Stack.Screen name="signin" options={{ headerTitle: 'Sign In' }} />
    </Stack>
  );
}

export default AuthLayout