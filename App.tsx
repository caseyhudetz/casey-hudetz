/**
 * East Lakeview Stories
 * Main App Component
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from './src/types/tour';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { ActiveTourScreen } from './src/screens/ActiveTourScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ActiveTour" component={ActiveTourScreen} />
        <Stack.Screen
          name="Map"
          component={() => <div>Map Screen - Coming Soon</div>}
        />
        <Stack.Screen
          name="StopDetail"
          component={() => <div>Stop Detail Screen - Coming Soon</div>}
        />
        <Stack.Screen
          name="TourOverview"
          component={() => <div>Tour Overview - Coming Soon</div>}
        />
        <Stack.Screen
          name="Settings"
          component={() => <div>Settings - Coming Soon</div>}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
