import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import theme, { Text, Box } from '../components/Themed';
import LargeCard from '../components/LargeCard';
import useColorScheme from '../hooks/useColorScheme';
import ListItem from '../components/ListItem';
import ProfileIcon from '../svg/ProfileIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HomeScreen(): JSX.Element {
  const { colors } = useTheme();
  const scheme = useColorScheme();
  return (
    <Box style={[styles.container, { backgroundColor: colors.background }]}>
      <ListItem
        icon={
          <ProfileIcon
            color={
              scheme === 'light' ? theme.colors.secondary : theme.colors.primary
            }
          />
        }
        title="35 Minutes"
        subTitle="Your longest meditation session so far since you have started"
      />
    </Box>
  );
}
