/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useState } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import theme, { Text, Box } from '../Themed';
import layout from '../../constants/Layout';
import EyeOpen from '../../svg/EyeOpen';
import EyeClose from '../../svg/EyeClose';

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100) - layout.screenMargin * 2,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    paddingRight: 20,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 20,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
  },
});

interface TextInputProps {
  error?: string;
  touched?: boolean;
  secured?: boolean;
  label: string;
  success?: string;
  placeholder: string;
}
const TextInput: FC<TextInputProps> = ({
  error,
  touched,
  secured,
  label,
  success,
  placeholder,
  ...props
}) => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState<boolean>(false);

  let borderColor;

  if (!touched) {
    borderColor = colors.primary;
  } else if (error) {
    borderColor = theme.colors.error;
  } else {
    borderColor = theme.colors.success;
  }

  const statusTextColor = error ? theme.colors.error : theme.colors.success;

  return (
    <Box style={styles.container}>
      <Text mb="m" variant="p2" style={{ color: colors.text }}>
        {label}
      </Text>
      <Box style={[styles.inputContainer, { borderColor }]}>
        <RNTextInput
          style={[styles.input, { color: colors.text }]}
          secureTextEntry={secured ? !visible : false}
          placeholder={placeholder}
          placeholderTextColor={colors.text}
          {...props}
        />
        {secured && (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            {visible ? (
              <EyeClose color={colors.primary} />
            ) : (
              <EyeOpen color={colors.primary} />
            )}
          </TouchableOpacity>
        )}
      </Box>
      <Text mt="s" variant="p3" style={{ color: statusTextColor }}>
        {success}
      </Text>
    </Box>
  );
};

export default TextInput;
