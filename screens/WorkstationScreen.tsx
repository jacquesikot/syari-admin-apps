import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, Alert } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme, { Box, Text } from '../components/Themed';
import Layout from '../constants/Layout';
import useColorScheme from '../hooks/useColorScheme';
import { WorkStationNavParamList } from '../types';
import LargeCard from '../components/LargeCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: Layout.screenMargin,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Layout.screenMarginTop,
    alignItems: 'center',
  },
});

const WorkStationScreen = ({
  navigation,
}: StackScreenProps<
  WorkStationNavParamList,
  'WorkStationScreen'
>): JSX.Element => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const cardImage =
    scheme === 'light'
      ? require('../assets/images/img-1-light.png')
      : require('../assets/images/img-1-dark.png');

  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.topBar}>
        <Text variant="h1" style={{ color: colors.text }}>
          Work Station
        </Text>
      </Box>

      <Box style={{ marginTop: hp(4) }}>
        <LargeCard
          title="Measurements"
          image={cardImage}
          onPress={() => navigation.navigate('AllMeasurements')}
          height={165}
        />
      </Box>

      <Box style={{ marginTop: hp(4) }}>
        <LargeCard
          title="Customers"
          image={cardImage}
          onPress={() => navigation.navigate('AllCustomers')}
          height={165}
        />
      </Box>

      <Box style={{ marginTop: hp(4) }}>
        <LargeCard
          title="Jobs"
          image={cardImage}
          onPress={() => Alert.alert('Jobs Portal', 'Jobs coming soon!')}
          height={165}
        />
      </Box>
    </SafeAreaView>
  );
};

export default WorkStationScreen;
