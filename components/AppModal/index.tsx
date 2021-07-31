import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import theme, { Box, Text } from '../Themed';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    borderRadius: 40,
    width: wp(100) - Layout.screenMargin * 2,
    height: wp(20),
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  content: React.ReactNode;
  show: boolean;
  onRequestClose: () => void;
}

const AppModal: FC<Props> = ({ content, show, onRequestClose }) => {
  return (
    <Box style={styles.container}>
      <Modal
        style={styles.modal}
        onBackdropPress={onRequestClose}
        useNativeDriver
        useNativeDriverForBackdrop
        isVisible={show}
      >
        {content}
      </Modal>
    </Box>
  );
};

export default AppModal;
