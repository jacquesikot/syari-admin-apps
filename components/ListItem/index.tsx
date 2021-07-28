import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import theme, { Box, Text } from '../Themed';
import IconContainer from '../IconContainer';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100) - Layout.screenMargin * 2,
  },
  contentContainer: {},
});

interface Props {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
}

const ListItem: FC<Props> = ({ icon, title, subTitle }) => {
  return (
    <Box style={styles.container}>
      <IconContainer icon={icon} width={58} height={58} />
      <Box style={styles.contentContainer}>
        <Text>{title}</Text>
        <Text numberOfLines={2}>{subTitle}</Text>
      </Box>
    </Box>
  );
};

export default ListItem;
