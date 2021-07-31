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
    width: 161.24,
    height: 125.53,
    position: 'absolute',
  },
});

interface Props {
  title: string;
  subtitle?: string;
  image: number;
  onPress: () => void;
  height?: number;
  imageWidth?: number;
  imageHeight?: number;
  imageLeft?: number;
  imageTop?: number;
}

const LargeCard: FC<Props> = ({
  title,
  subtitle,
  image,
  onPress,
  height,
  imageWidth = 161.24,
  imageHeight = 125.53,
  imageLeft = wp(40),
  imageTop = wp(5),
}) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const backgroundColor =
    scheme === 'light' ? theme.colors.secondary : theme.colors.darkBg;

  return (
    <Box style={[styles.container, { backgroundColor, height }]}>
      <Text mb="s" mt="l" style={[styles.title, { color: colors.text }]}>
        {title}
      </Text>
      {subtitle && (
        <Text mb="xl" style={[styles.subTitle, { color: colors.text }]}>
          {subtitle}
        </Text>
      )}
      <Button
        type="round"
        width={32}
        height={32}
        borderRadius={16}
        iconWidth={14}
        iconHeight={10}
        onPress={onPress}
      />
      <Image
        style={[
          styles.image,
          {
            width: imageWidth,
            height: imageHeight,
            left: imageLeft,
            top: imageTop,
          },
        ]}
        source={image}
      />
    </Box>
  );
};

export default LargeCard;
