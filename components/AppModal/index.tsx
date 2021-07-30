import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import theme, { Box, Text } from '../Themed';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    width: wp(100) - Layout.screenMargin * 2,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  content: React.ReactNode;
  height: number;
  show: boolean;
  onRequestClose: () => void;
}

const AppModal: FC<Props> = ({ content, height, show, onRequestClose }) => {
  return (
    <Modal
      style={styles.container}
      onBackdropPress={onRequestClose}
      useNativeDriver
      isVisible={show}
    >
      <Box style={{ height }}>{content}</Box>
    </Modal>
  );
};

export default AppModal;
