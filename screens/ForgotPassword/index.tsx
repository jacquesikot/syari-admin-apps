import React, { FC } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import theme, { Box, Text } from '../../components/Themed';

const styles = StyleSheet.create({
  container: {},
});

const ForgotPassword = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Forgot Password</Text>
    </SafeAreaView>
  );
};

export default ForgotPassword;
