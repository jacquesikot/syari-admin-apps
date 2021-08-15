import React, { FC, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

import theme, { Box, Text } from '../Themed';
import TextInput from '../TextInput';
import Button from '../Button';
import authApi from '../../firebase/auth';

const styles = StyleSheet.create({
  container: {},
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  modal: {
    backgroundColor: theme.colors.light,
    width: '80%',
    height: '40%',
    position: 'absolute',
    borderRadius: 40,
    alignItems: 'center',
    top: 230,
    paddingTop: 40,
  },
  cancel: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.textDark,
    position: 'absolute',
    left: 20,
    top: 20,
  },
});

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  email: string;
}

const ForgotPasswordModal: FC<Props> = ({ visible, setVisible, email }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await authApi.sendResetPasswordEmail(email);

      setLoading(false);

      setVisible(false);

      Toast.show({
        type: 'success',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Password Reset',
        text2: 'Password reset email sent!',
      });
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
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <Box style={styles.modalContainer}>
        <Box style={styles.modal}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.cancel}
          >
            <Icon name="x" color={theme.colors.error} size={24} />
          </TouchableOpacity>

          <Text variant="h2" mt="xxxl" color="textDark" mb="l">
            Recover Password
          </Text>

          <TextInput
            label="Email"
            placeholder={email}
            width={250}
            value={email}
          />

          <Box mt="l">
            <Button
              type="primary"
              label="Confirm"
              width={250}
              onPress={handleSubmit}
              loading={loading}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ForgotPasswordModal;
