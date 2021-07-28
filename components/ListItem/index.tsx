import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { useTheme } from '@react-navigation/native';
import theme, { Box, Text } from '../Themed';
import IconContainer from '../IconContainer';
import Layout from '../../constants/Layout';
import useColorScheme from '../../hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100) - Layout.screenMargin * 2,
    borderRadius: 20,
    padding: 15,
  },
  contentContainer: {
    width: '70%',
    marginLeft: 20,
  },
});

interface Props {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  height?: number;
  iconWidth?: number;
}

const ListItem: FC<Props> = ({ icon, title, subTitle, height, iconWidth }) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const backgroundColor =
    scheme === 'light' ? theme.colors.secondary : theme.colors.darkBg;

  return (
    <Box style={[styles.container, { height, backgroundColor }]}>
      <IconContainer
        icon={icon}
        width={iconWidth || 58}
        height={iconWidth || 58}
      />
      <Box style={styles.contentContainer}>
        <Text mb="s" variant="h4" style={{ color: colors.text }}>
          {title}
        </Text>
        <Text variant="p3" numberOfLines={2} style={{ color: colors.text }}>
          {subTitle}
        </Text>
      </Box>
    </Box>
  );
};

export default ListItem;
