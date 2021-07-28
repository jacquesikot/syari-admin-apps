import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import theme, { Text, Box } from '../components/Themed';
import LargeCard from '../components/LargeCard';
import useColorScheme from '../hooks/useColorScheme';

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
      <LargeCard
        title="Get Started"
        subTitle="3 min"
        image={
          scheme === 'light'
            ? require('../assets/images/img-1-light.png')
            : require('../assets/images/img-1-dark.png')
        }
      />
    </Box>
  );
}
