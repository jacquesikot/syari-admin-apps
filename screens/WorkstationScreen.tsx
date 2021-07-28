import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, Box } from '../components/Themed';

export default function WorkstationScreen() {
  return (
    <Box style={styles.container}>
      <Text>Work Station</Text>
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
