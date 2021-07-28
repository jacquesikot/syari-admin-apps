import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

const assets: number[] = [];

const loadAssets = () => {
  assets.map(async (a) => await Asset.loadAsync(a));
};

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'Nunito-Bold': require('../assets/fonts/NunitoSans-Bold.ttf'),
          'Nunito-Regular': require('../assets/fonts/NunitoSans-Regular.ttf'),
          'Nunito-SemiBold': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
          'Nunito-Light': require('../assets/fonts/NunitoSans-Light.ttf'),
        });

        // Load Assets
        loadAssets();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
