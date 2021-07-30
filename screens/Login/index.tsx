import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import theme, { Box, Text } from '../../components/Themed';

const styles = StyleSheet.create({
  container: {},
});

const Login = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;
