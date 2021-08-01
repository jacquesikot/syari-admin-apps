import React, { FC } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import theme, { Box, Text } from '../../components/Themed';

const styles = StyleSheet.create({
  container: {},
});

const Shirt = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>Shirt</Text>
    </SafeAreaView>
  );
};

export default Shirt;
