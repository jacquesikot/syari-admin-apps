import React, { FC } from 'react';
import { StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { useTheme } from '@react-navigation/native';
import theme, { Box, Text } from '../Themed';
import Button from '../Button';
import layout from '../../constants/Layout';
import useColorScheme from '../../hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    width: wp(100) - layout.screenMargin * 2,
    height: 198,
    borderRadius: 20,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: wp(5.5),
  },
  subTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: wp(4),
  },
  image: {
    width: 181.24,
    height: 135.53,
    position: 'absolute',
    left: wp(40),
    top: wp(13),
  },
});

interface Props {
  title: string;
  subTitle?: string;
  image: number;
}

const LargeCard: FC<Props> = ({ title, subTitle, image }) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const backgroundColor =
    scheme === 'light' ? theme.colors.secondary : theme.colors.darkBg;

  return (
    <Box style={[styles.container, { backgroundColor }]}>
      <Text mb="s" style={[styles.title, { color: colors.text }]}>
        {title}
      </Text>
      {subTitle && (
        <Text mb="xl" style={[styles.subTitle, { color: colors.text }]}>
          {subTitle}
        </Text>
      )}
      <Button
        type="round"
        width={32}
        height={32}
        borderRadius={16}
        iconWidth={14}
        iconHeight={10}
      />
      <Image style={styles.image} source={image} />
    </Box>
  );
};

export default LargeCard;
