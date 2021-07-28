import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Text, Box } from '../components/Themed';

export default function HomeScreen() {
  const { colors } = useTheme();
  return (
    <Box style={[styles.container, { backgroundColor: colors.background }]}>
      <Text variant="h1" style={{ color: colors.text }}>
        Home
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
