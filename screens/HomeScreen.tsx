import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import theme, { Text, Box } from '../components/Themed';
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
    <Box
      style={[styles.container, { backgroundColor: theme.colors.secondary }]}
    >
      <ListItem
        icon={
          <ProfileIcon
            color={
              scheme === 'light' ? theme.colors.secondary : theme.colors.primary
            }
          />
        }
        title="Gbenga Daniels"
        subTitle="jimmy@gmail.com"
        iconWidth={48}
      />
    </Box>
  );
}
