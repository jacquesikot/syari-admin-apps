import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useQuery } from 'react-query';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Text, Box } from '../components/Themed';
import useColorScheme from '../hooks/useColorScheme';
import Layout from '../constants/Layout';
import SmallCard from '../components/SmallCard';
import LargeCard from '../components/LargeCard';
import LogoutIcon from '../svg/LogoutIcon';
import authApi from '../firebase/auth';
import customersApi from '../firebase/customer';
import measurementsApi from '../firebase/measurements';
import ScreenError from '../components/ScreenError';

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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 29,
  },
});

const handleLogout = async () => {
  try {
    await authApi.logOutUser();

    Toast.show({
      type: 'success',
      visibilityTime: 2000,
      autoHide: true,
      text1: 'Logout Success',
      text2: 'You have been successfully logged out',
    });
  } catch (error) {
    Toast.show({
      type: 'error',
      visibilityTime: 2000,
      autoHide: true,
      text1: 'Login Error',
      text2: error.message,
    });
  }
};

export default function HomeScreen(): JSX.Element {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const [loading, setLoading] = useState<boolean>(false);

  const cardImage =
    scheme === 'light'
      ? require('../assets/images/img-1-light.png')
      : require('../assets/images/img-1-dark.png');

  const {
    data: customers,
    error: customerError,
    refetch: refetchCustomers,
  } = useQuery('customers', () => customersApi.getAllCustomers());

  const {
    data: measurements,
    error: measurementError,
    refetch: refetchMeasurements,
  } = useQuery('measurements', () => measurementsApi.getAllmeasurements());

  const refetchData = () => {
    setLoading(true);
    refetchCustomers();
    refetchMeasurements();
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.topBar}>
        <Text variant="h1" style={{ color: colors.text }}>
          Dashboard
        </Text>

        <TouchableOpacity onPress={handleLogout}>
          <LogoutIcon color={colors.text} />
        </TouchableOpacity>
      </Box>

      {customerError || measurementError ? (
        <ScreenError visible refetch={refetchData} loading={loading} />
      ) : (
        <>
          <Box style={styles.tabContainer}>
            <SmallCard type="jobs" title="Active Jobs" subTitle="Coming soon" />
            <SmallCard
              type="measurements"
              title="Measurements"
              subTitle={`${measurements?.length} record${
                measurements && measurements?.length > 1 ? 's' : ''
              }`}
            />
          </Box>

          <Box style={styles.tabContainer}>
            <SmallCard
              type="customers"
              title="Customers"
              subTitle={`${customers?.length} record${
                customers && customers?.length > 1 ? 's' : ''
              }`}
            />
            <SmallCard type="users" title="Users" subTitle="2 sessions" />
          </Box>

          <Box style={{ marginTop: hp(10) }}>
            <LargeCard
              title="Get Started"
              subtitle="3 mins"
              image={cardImage}
              onPress={() => true}
              height={165}
            />
          </Box>
        </>
      )}
    </SafeAreaView>
  );
}
