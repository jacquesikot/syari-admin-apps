import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import theme, { Box, Text } from '../Themed';
import SuitcaseIcon from '../../svg/SuitcaseIcon';
import RocketIcon from '../../svg/RocketIcon';
import BookIcon from '../../svg/BookIcon';
import ProfileIcon from '../../svg/ProfileIcon';
import useColorScheme from '../../hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    width: wp(38),
    height: wp(38),
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
  },
  content: {
    marginTop: 20,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: wp(5),
  },
  subTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: wp(4),
  },
});

interface Props {
  type: 'jobs' | 'measurements' | 'customers' | 'users';
  title: string;
  subTitle: string;
}

const SmallCard: FC<Props> = ({ type, title, subTitle }) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const iconColor =
    scheme === 'light' ? theme.colors.primary : theme.colors.secondary;

  const backgroundColor =
    scheme === 'light' ? theme.colors.secondary : theme.colors.darkBg;

  const returnIcon = (): JSX.Element => {
    if (type === 'jobs') {
      return <SuitcaseIcon color={iconColor} />;
    }
    if (type === 'measurements') {
      return <BookIcon color={iconColor} />;
    }
    if (type === 'customers') {
      return <ProfileIcon color={iconColor} />;
    }
    return <RocketIcon color={iconColor} />;
  };

  return (
    <Box style={[styles.container, { backgroundColor }]}>
      {returnIcon()}
      <Box style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text mt="s" style={[styles.subTitle, { color: colors.text }]}>
          {subTitle}
        </Text>
      </Box>
    </Box>
  );
};

export default SmallCard;
