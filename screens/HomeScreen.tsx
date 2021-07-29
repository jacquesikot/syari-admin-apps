import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import theme, { Text, Box } from '../components/Themed';
import useColorScheme from '../hooks/useColorScheme';
import Selector from '../components/Selector';

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
      <Selector label="Pending" width={255} active />
    </Box>
  );
}
