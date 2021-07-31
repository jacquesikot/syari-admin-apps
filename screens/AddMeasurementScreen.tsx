import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Button from '../components/Button';
import IconContainer from '../components/IconContainer';

import { Text, Box } from '../components/Themed';
import Layout from '../constants/Layout';
import StarIcon from '../svg/StarIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: Layout.screenMargin,
  },
  topBar: {
    marginTop: Layout.screenMarginTop,
    justifyContent: 'flex-start',
    width: '100%',
  },
  body: {
    alignItems: 'center',
    marginTop: 102,
  },
});

export default function AddMeasurementScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.topBar}>
        <Text variant="h1" style={{ color: colors.text }}>
          New Measurement
        </Text>
      </Box>

      <Box style={styles.body}>
        <IconContainer
          width={116}
          height={116}
          icon={<StarIcon color={colors.background} />}
        />

        <Text variant="h1" style={{ color: colors.text, marginTop: 60 }}>
          Create Measurement
        </Text>

        <Text
          variant="h4"
          style={{
            color: colors.text,
            marginTop: 15,
            width: 200,
            textAlign: 'center',
          }}
        >
          To begin adding a new measurement select customer
        </Text>
      </Box>

      <Box style={{ marginTop: 150 }}>
        <Button
          type="primary"
          label="Add Customer"
          arrow
          onPress={() => true}
        />
      </Box>
    </SafeAreaView>
  );
}
