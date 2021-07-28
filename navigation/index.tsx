import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import theme from '../components/Themed';

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
    background: theme.colors.secondary,
    text: theme.colors.textDark,
    card: theme.colors.secondary,
    border: theme.colors.primary,
    notification: theme.colors.primary,
  },
};

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? MyDarkTheme : MyLightTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
