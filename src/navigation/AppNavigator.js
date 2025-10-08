
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{title: 'Dashboard'}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
