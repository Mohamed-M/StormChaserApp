import { Tabs } from 'expo-router';
import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useAppTheme } from '@/app/hooks/ThemeProvider';
;
export default function TabLayout() {
  const { theme } = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFF',
        tabBarActiveBackgroundColor: theme === "light" ? '#FF0000' : '#000',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />
        }}
      />
     <Tabs.Screen
        name="storms"
        options={{
            title: 'Storms',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="thunderstorm-outline" color={color} />
        }}
       />
        <Tabs.Screen
            name="camera"
            options={{
                title: 'Camera',
                tabBarIcon: ({ color }) => <Ionicons size={28} name="camera-outline" color={color} />
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
                title: 'Settings',
                tabBarIcon: ({ color }) => <Ionicons size={28} name="cog-outline" color={color} />
            }}
        />
    </Tabs>
  );
}
