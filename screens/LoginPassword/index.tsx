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

const Login = ({
  navigation,
}: StackScreenProps<AuthNavParamList, 'LoginPassword'>): JSX.Element => {
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
            Please enter your password
          </Text>
        </Box>

        <Box style={{ marginTop: hp(30) }}>
          <TextInput
            label="Password"
            placeholder="Enter your password"
            secured
          />
        </Box>

        <Box
          style={{
            marginTop: hp(15),
          }}
        >
          <Button
            type="secondary"
            label="Forgot Password?"
            arrow
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </Box>

        <Box
          style={{
            marginTop: hp(3),
          }}
        >
          <Button
            type="primary"
            label="Continue"
            arrow
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </Box>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
