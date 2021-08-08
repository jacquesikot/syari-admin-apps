import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';

import theme, { Box, Text } from '../../components/Themed';
import Layout from '../../constants/Layout';
import ArrowLeft from '../../svg/ArrowLeft';
import { MeasureNavParamList } from '../../types';
import TextInput from '../../components/TextInput';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Layout.screenMargin,
  },
  topBar: {
    flexDirection: 'row',
    marginTop: Layout.screenMarginTop,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    right: '92%',
  },
});

const Trouser = ({
  navigation,
}: StackScreenProps<MeasureNavParamList, 'Trouser'>): JSX.Element => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => Keyboard.dismiss()} activeOpacity={1}>
        <Box style={styles.topBar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrow}
          >
            <ArrowLeft color={colors.text} />
          </TouchableOpacity>

          <Text
            variant="h1"
            style={{
              color: colors.text,
              width: 183,
              textAlign: 'center',
            }}
          >
            Shirt
          </Text>
        </Box>

        <ScrollView style={{ marginTop: 24 }}>
          <TextInput placeholder="Waist" label="Neck" />

          <TextInput placeholder="Neck measurement" label="Neck" />

          <TextInput placeholder="Neck measurement" label="Neck" />

          <TextInput placeholder="Neck measurement" label="Neck" />

          <TextInput placeholder="Neck measurement" label="Neck" />
        </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Trouser;
