import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import theme, { Box, Text } from '../Themed';
import useColorScheme from '../../hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  icon: React.ReactNode;
  width: number;
  height: number;
}

const IconContainer: FC<Props> = ({ icon, width, height }) => {
  const scheme = useColorScheme();

  const backgroundColor =
    scheme === 'light' ? theme.colors.primary : theme.colors.secondary;

  return (
    <Box
      style={[
        styles.container,
        { backgroundColor, width, height, borderRadius: width / 2 },
      ]}
    >
      {icon}
    </Box>
  );
};

export default IconContainer;
