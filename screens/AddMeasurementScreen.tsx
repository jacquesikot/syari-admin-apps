import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, Box } from '../components/Themed';

export default function AddMeasurementScreen() {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>Add Measurment</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
