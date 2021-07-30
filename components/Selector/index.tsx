import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import theme, { Box, Text } from '../Themed';
import useColorScheme from '../../hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderRadius: 27.5,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

interface Props {
  label: string;
  width: number;
  active: boolean;
}

const Selector: FC<Props> = ({ label, width, active }) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  let borderColor;

  if (active && scheme === 'light') {
    borderColor = theme.colors.primary;
  }
  if (active && scheme === 'dark') {
    borderColor = theme.colors.secondary;
  }
  if (!active && scheme === 'light') {
    borderColor = theme.colors.light;
  }
  if (!active && scheme === 'dark') {
    borderColor = theme.colors.light;
  }

  let dotContainerColor;

  if (active && scheme === 'light') {
    dotContainerColor = theme.colors.primary;
  }
  if (active && scheme === 'dark') {
    dotContainerColor = theme.colors.secondary;
  }
  if (!active && scheme === 'light') {
    dotContainerColor = theme.colors.secondary;
  }
  if (!active && scheme === 'dark') {
    dotContainerColor = theme.colors.primary;
  }

  let borderWidth;

  if (active) {
    borderWidth = 2;
  }
  if (!active) {
    borderWidth = 1;
  }

  let dotColor;

  if (scheme === 'light') {
    dotColor = theme.colors.secondary;
  } else {
    dotColor = theme.colors.primary;
  }

  let backgroundColor;

  if (scheme === 'light') {
    backgroundColor = theme.colors.secondary;
  } else {
    backgroundColor = theme.colors.primary;
  }

  return (
    <Box
      style={[
        styles.container,
        { width, borderColor, borderWidth, backgroundColor },
      ]}
    >
      <Text variant="h4b" style={{ color: colors.text }}>
        {label}
      </Text>

      <Box style={{ flex: 1 }} />

      <Box
        style={[
          styles.dot,
          { borderColor, backgroundColor: dotContainerColor },
        ]}
      >
        {active && (
          <Box style={[styles.innerDot, { backgroundColor: dotColor }]} />
        )}
      </Box>
    </Box>
  );
};

export default Selector;
