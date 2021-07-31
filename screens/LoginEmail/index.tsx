import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { StackScreenProps } from '@react-navigation/stack';
import { Box, Text } from '../../components/Themed';
import Layout from '../../constants/Layout';
import ArrowLeft from '../../svg/ArrowLeft';
import { AuthNavParamList } from '../../types';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Layout.screenMargin,
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    marginTop: Layout.screenMarginTop,
    justifyContent: 'center',
  },
  arrow: {
    position: 'relative',
    right: '110%',
  },
});

const LoginEmail = ({
  navigation,
}: StackScreenProps<AuthNavParamList, 'LoginEmail'>): JSX.Element => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <Box style={styles.topBar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrow}
          >
            <ArrowLeft color={colors.text} />
          </TouchableOpacity>

          <Text
            variant="h2"
            style={{
              color: colors.text,
              width: 183,
              textAlign: 'center',
              marginRight: wp(10),
            }}
          >
            Please enter your email address
          </Text>
        </Box>

        <Box style={{ marginTop: hp(30) }}>
          <TextInput label="Email" placeholder="Enter your email" />
        </Box>

        <Box style={{ marginTop: hp(25) }}>
          <Button
            type="primary"
            label="Continue"
            arrow
            onPress={() => navigation.navigate('LoginPassword')}
          />
        </Box>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginEmail;
