import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import theme, { Text, Box } from '../components/Themed';
import useColorScheme from '../hooks/useColorScheme';
import Onboarding from '../components/Onboarding';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HomeScreen(): JSX.Element {
  const { colors } = useTheme();
  const scheme = useColorScheme();
  return (
    <Box style={[styles.container, { backgroundColor: colors.background }]}>
      <Onboarding
        topText="Set Measurements"
        bottomText="Add Syari Bespoke measurements on the go"
        image={require('../assets/images/onboarding-1-light.png')}
        width={375}
        height={315}
      />
    </Box>
  );
}
