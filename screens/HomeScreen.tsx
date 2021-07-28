import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Text, Box } from '../components/Themed';
import Button from '../components/Button';

export default function HomeScreen() {
  const { colors } = useTheme();
  return (
    <Box style={[styles.container, { backgroundColor: colors.background }]}>
      <Button label="Forgot Password?" type="round" />
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
