/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
import { Formik } from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';
import * as SecureStore from 'expo-secure-store';

import theme, { Box, Text } from '../../components/Themed';
import Layout from '../../constants/Layout';
import ArrowLeft from '../../svg/ArrowLeft';
import { AuthNavParamList } from '../../types';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import AppModal from '../../components/AppModal';
import ActivityIndicator from '../../components/ActivityIndicator';
import authApi from '../../firebase/auth';
import ForgotPasswordModal from '../../components/ForgotPasswordModal';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  topBar: {
    flexDirection: 'row',
    marginTop: Layout.screenMarginTop,
    justifyContent: 'center',
  },
  arrow: {
    position: 'absolute',
    right: '93%',
  },
  modalContainer: {
    height: hp(30),
  },
});

const loginPasswordSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
});

interface Props {
  password: string;
}

const Login = ({
  navigation,
  route,
}: StackScreenProps<AuthNavParamList, 'LoginPassword'>): JSX.Element => {
  const { email } = route.params;

  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { colors } = useTheme();

  const onSubmit = async ({ password }: Props) => {
    try {
      setLoading(true);

      await authApi.signInUser(email, password);

      Toast.show({
        type: 'success',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Login Success',
        text2: 'You have been successfully logged in',
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);

      Toast.show({
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Login Error',
        text2: error.message,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ marginHorizontal: Layout.screenMargin }}
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}
      >
        <ActivityIndicator visible={loading} opacity={0.7} />
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
            }}
          >
            Please enter your password
          </Text>
        </Box>

        <Formik
          initialValues={{ password: '' }}
          validationSchema={loginPasswordSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <>
              <Box style={{ marginTop: hp(30) }}>
                <TextInput
                  label="Password"
                  placeholder="Enter your password"
                  secured
                  touched={touched.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={errors.password}
                  autoCompleteType="password"
                  autoCorrect={false}
                  autoCapitalize="none"
                  enablesReturnKeyAutomatically
                  returnKeyType="next"
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
                  onPress={() => setShow(true)}
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
                  onPress={handleSubmit}
                />
              </Box>
            </>
          )}
        </Formik>
      </TouchableOpacity>

      <ForgotPasswordModal visible={show} setVisible={setShow} email={email} />
    </SafeAreaView>
  );
};

export default Login;
