import React, { FC } from 'react';
import { StyleSheet, Image } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';

import Layout from '../../constants/Layout';
import { Box, Text } from '../Themed';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: Layout.window.width,
    height: hp(63),
  },
  textContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: hp(43),
  },
  image: {
    alignItems: 'center',
  },
});

interface Props {
  image: number;
  topText: string;
  bottomText: string;
  width: number;
  height: number;
}

const Onboarding: FC<Props> = ({
  image,
  topText,
  bottomText,
  width,
  height,
}) => {
  const { colors } = useTheme();

  return (
    <Box style={styles.container}>
      <Image source={image} style={[styles.image, { width, height }]} />

      <Box style={styles.textContainer}>
        <Text variant="h1" style={{ color: colors.text }}>
          {topText}
        </Text>
        <Text
          mt="l"
          variant="h4"
          style={{ width: '60%', textAlign: 'center', color: colors.text }}
        >
          {bottomText}
        </Text>
      </Box>
    </Box>
  );
};

export default Onboarding;
