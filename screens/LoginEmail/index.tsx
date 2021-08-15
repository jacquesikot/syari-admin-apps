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
import { Formik } from 'formik';
import * as yup from 'yup';

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
    position: 'absolute',
    right: '93%',
  },
});

const loginEmailSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
});

interface Props {
  email: string;
}

const LoginEmail = ({
  navigation,
}: StackScreenProps<AuthNavParamList, 'LoginEmail'>): JSX.Element => {
  const { colors } = useTheme();

  const onSubmit = (values: Props) => {
    navigation.navigate('LoginPassword', { email: values.email });
  };

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
            }}
          >
            Please enter your email address
          </Text>
        </Box>

        <Formik
          initialValues={{ email: '' }}
          validationSchema={loginEmailSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <>
              <Box style={{ marginTop: hp(30) }}>
                <TextInput
                  label="Email"
                  placeholder="Enter your email"
                  touched={touched.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                  autoCompleteType="email"
                  autoCorrect={false}
                  autoCapitalize="none"
                  enablesReturnKeyAutomatically
                  keyboardType="email-address"
                  returnKeyType="next"
                />
              </Box>

              <Box style={{ marginTop: hp(25) }}>
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
    </SafeAreaView>
  );
};

export default LoginEmail;
