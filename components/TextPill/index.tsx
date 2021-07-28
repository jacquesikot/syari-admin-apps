import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import theme, { Box, Text } from '../Themed';

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});

interface Props {
  content: string;
  color: 'error' | 'success';
}

const TextPill: FC<Props> = ({ content, color }) => {
  return (
    <Box style={[styles.container, { borderColor: theme.colors[color] }]}>
      <Text variant="p3" style={{ color: theme.colors[color] }}>
        {content}
      </Text>
    </Box>
  );
};

export default TextPill;
