import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ColorSchemeName } from 'react-native';
import firebase from 'firebase';
import { QueryClient, QueryClientProvider } from 'react-query';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import theme from '../components/Themed';
import OnboardingScreen from '../screens/OnboardingScreen';
import AuthNavigator from '../navigation/AuthNavigator';

const MyDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: theme.colors.secondary,
    background: theme.colors.primary,
    text: theme.colors.textLight,
    card: theme.colors.primary,
    border: theme.colors.secondary,
    notification: theme.colors.secondary,
  },
};

const MyLightTheme: Theme = {
  dark: false,
  colors: {
    primary: theme.colors.primary,
    background: '#f7f7f7',
    text: theme.colors.textDark,
    card: '#f7f7f7',
    border: theme.colors.primary,
    notification: theme.colors.primary,
  },
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [userSet, setUser] = useState<boolean>(false);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUser(true);
    } else {
      setUser(false);
    }
  });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userSet ? (
        <>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: 'Oops!' }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Authentication" component={AuthNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? MyDarkTheme : MyLightTheme}
    >
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
