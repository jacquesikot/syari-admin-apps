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

interface TextInputProps {
  error?: string;
  touched?: boolean;
  secured?: boolean;
}
const TextInput: FC<TextInputProps> = ({ error, touched, secured }) => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState<boolean>(false);

  const borderColor = !touched
    ? colors.primary
    : error
    ? theme.colors.error
    : theme.colors.success;

  const statusTextColor = error ? theme.colors.error : theme.colors.success;

  return (
    <Box style={styles.container}>
      <Text mb="m" variant="p2" style={{ color: colors.text }}>
        Email
      </Text>
      <Box style={[styles.inputContainer, { borderColor: borderColor }]}>
        <RNTextInput
          style={[styles.input, { color: colors.text }]}
          secureTextEntry={secured ? !visible : false}
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
        Correct email
      </Text>
    </Box>
  );
};

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

export default TextInput;