import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import { AuthProvider, useAuth } from '../providers/AuthProvider';
import Signin from '../(auth)/signin';
import Register from '../(auth)/register';

const TabsLayout = () => {
  const { user } = useAuth();
  console.log('user is', user)

  return (
    <>
      <Tabs>
          <Tabs.Screen name="index" options={{  title: "Home" ,headerShown: false, tabBarIcon: ({color}) => <Feather name="home" size={24} color="black"/> }} />
          <Tabs.Screen name="rooms" options={{ title: "Communities" ,headerShown: false}}/>
          <Tabs.Screen name="create" />
          <Tabs.Screen name="profile" options={{ title: "Profile" ,headerShown: false}}/>
      </Tabs>
    </>
  )
}

export default TabsLayout