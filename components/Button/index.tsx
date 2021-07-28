import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import layout from '../../constants/Layout';

import theme, { Box, Text } from '../Themed';
import ArrowRight from '../../svg/ArrowRight';
import useColorScheme from '../../hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp(100) - layout.screenMargin * 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 27.5,
  },
  arrow: {
    position: 'relative',
    left: wp(27),
  },
});

interface Props {
  type: 'primary' | 'secondary' | 'round';
  arrow?: boolean;
  label: string;
}

const Button: FC<Props> = ({ type, label, arrow }) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const primaryTextColor =
    scheme === 'light' ? theme.colors.secondary : theme.colors.primary;

  const secondaryTextColor =
    scheme === 'light' ? theme.colors.primary : theme.colors.secondary;

  const secondaryBgColor =
    scheme === 'light' ? theme.colors.secondary : theme.colors.primary;

  if (type === 'secondary') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.container,
          {
            backgroundColor: secondaryBgColor,
            borderWidth: 1,
            borderColor: colors.primary,
          },
        ]}
      >
        <Text variant="h4" style={{ color: secondaryTextColor }}>
          {label}
        </Text>
        {arrow && (
          <Box style={styles.arrow}>
            <ArrowRight color={secondaryTextColor} />
          </Box>
        )}
      </TouchableOpacity>
    );
  }
  if (type === 'round') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.container,
          {
            backgroundColor: colors.primary,
            width: 64,
            height: 64,
            borderRadius: 32,
          },
        ]}
      >
        <Box>
          <ArrowRight color={primaryTextColor} />
        </Box>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, { backgroundColor: colors.primary }]}
    >
      <Text variant="h4" style={{ color: primaryTextColor }}>
        {label}
      </Text>
      {arrow && (
        <Box style={styles.arrow}>
          <ArrowRight color={primaryTextColor} />
        </Box>
      )}
    </TouchableOpacity>
  );
};

export default Button;