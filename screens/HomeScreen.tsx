import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import theme, { Text, Box } from '../components/Themed';
import SmallCard from '../components/SmallCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HomeScreen(): JSX.Element {
  const { colors } = useTheme();
  return (
    <Box style={[styles.container, { backgroundColor: colors.background }]}>
      <SmallCard type="jobs" title="Active Jobs" subTitle="18 tasks" />
    </Box>
  );
}
