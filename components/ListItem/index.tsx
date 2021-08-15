import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Feather as Icon } from '@expo/vector-icons';

import { useTheme } from '@react-navigation/native';
import theme, { Box, Text } from '../Themed';
import IconContainer from '../IconContainer';
import Layout from '../../constants/Layout';
import useColorScheme from '../../hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100) - Layout.screenMargin * 2,
    borderRadius: 20,
    padding: 15,
    borderWidth: 1.5,
  },
  contentContainer: {
    width: '70%',
    marginLeft: 20,
  },
  trash: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  height?: number;
  iconWidth?: number;
  selected?: boolean;
  trash?: () => void;
  complete?: boolean | 'none';
}

const ListItem: FC<Props> = ({
  icon,
  title,
  subTitle,
  height,
  iconWidth,
  selected,
  trash,
  complete,
}) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();

  const backgroundColor =
    scheme === 'light' ? theme.colors.secondary : theme.colors.darkBg;

  const borderColor = selected ? theme.colors.primary : theme.colors.secondary;

  return (
    <Box style={[styles.container, { height, backgroundColor, borderColor }]}>
      <IconContainer
        icon={icon}
        width={iconWidth || 58}
        height={iconWidth || 58}
      />
      <Box style={styles.contentContainer}>
        <Text mb="s" variant="h4" style={{ color: colors.text }}>
          {title}
        </Text>
        <Text
          mb="s"
          variant="p3"
          numberOfLines={2}
          style={{ color: colors.text }}
        >
          {subTitle}
        </Text>
        {complete !== 'none' && (
          <Text
            variant="p3"
            numberOfLines={2}
            color={complete ? 'success' : 'error'}
          >
            {`Status: ${complete ? 'Complete' : 'In Progress'}`}
          </Text>
        )}
      </Box>

      {trash && (
        <TouchableOpacity
          onPress={trash}
          style={[styles.trash, { backgroundColor: colors.background }]}
        >
          <Icon name="trash-2" color={theme.colors.error} size={24} />
        </TouchableOpacity>
      )}
    </Box>
  );
};

export default ListItem;
