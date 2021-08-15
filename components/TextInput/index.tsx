/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useState } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TouchableOpacity,
  TextInputProps,
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
    borderRadius: 25,
    borderWidth: 1,
    paddingRight: 20,
  },
  input: {
    flex: 1,
    marginLeft: 20,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
  },
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
  },
});

interface Props extends TextInputProps {
  error?: string;
  touched?: boolean;
  secured?: boolean;
  label: string;
  placeholder: string;
  width?: number;
  labelPosition?: 'center' | 'flex-end' | 'flex-start';
  height?: number;
}
const TextInput: FC<Props> = ({
  error,
  touched,
  secured,
  label,
  placeholder,
  width = wp(100) - layout.screenMargin * 2,
  labelPosition = 'flex-start',
  height,
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
    <Box style={[styles.container, { width }]}>
      <Box style={[styles.labelContainer, { justifyContent: labelPosition }]}>
        <Text
          mb="m"
          variant="p2"
          style={{
            color: colors.text,
          }}
        >
          {label}
        </Text>
      </Box>
      <Box
        style={[styles.inputContainer, { borderColor, height: height || 50 }]}
      >
        <RNTextInput
          style={[styles.input, { color: colors.text }]}
          secureTextEntry={secured ? !visible : false}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.grey}
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
        {error}
      </Text>
    </Box>
  );
};

export default TextInput;
