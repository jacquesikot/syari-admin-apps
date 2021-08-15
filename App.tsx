import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import Toast from 'react-native-toast-message';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import theme from './components/Themed';
import firebaseInit from './firebase';

export default function App(): JSX.Element | null {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  firebaseInit();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider {...{ theme }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <Toast ref={ref => Toast.setRef(ref)} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
