import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import layout from '../../constants/Layout';

import theme, { Box, Text } from '../Themed';
import ArrowRight from '../../svg/ArrowRight';
import useColorScheme from '../../hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 27.5,
  },
  arrow: {
    position: 'absolute',
    left: wp(72),
  },
});

interface Props {
  type: 'primary' | 'secondary' | 'round';
  arrow?: boolean;
  label?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  iconWidth?: number;
  iconHeight?: number;
  onPress: () => void;
  loading?: boolean;
}

const Button: FC<Props> = ({
  type,
  label,
  arrow,
  width,
  height,
  borderRadius,
  iconWidth,
  iconHeight,
  onPress,
  loading,
}) => {
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
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          styles.container,
          {
            backgroundColor: secondaryBgColor,
            borderWidth: 1,
            borderColor: colors.primary,
            width: width || wp(100) - layout.screenMargin * 2,
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text variant="h4" style={{ color: secondaryTextColor }}>
              {label}
            </Text>
            {arrow && (
              <Box style={styles.arrow}>
                <ArrowRight color={secondaryTextColor} />
              </Box>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  }
  if (type === 'round') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          styles.container,
          {
            backgroundColor: colors.primary,
            width: width || 64,
            height: height || 64,
            borderRadius: borderRadius || 32,
          },
        ]}
      >
        <Box>
          <ArrowRight
            color={primaryTextColor}
            width={iconWidth}
            height={iconHeight}
          />
        </Box>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
          width: width || wp(100) - layout.screenMargin * 2,
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text variant="h4" style={{ color: primaryTextColor }}>
            {label}
          </Text>
          {arrow && (
            <Box style={styles.arrow}>
              <ArrowRight color={primaryTextColor} />
            </Box>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
