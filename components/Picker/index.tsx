import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { Feather as Icon } from '@expo/vector-icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import theme, { Box, Text } from '../Themed';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    width: wp(100) - Layout.screenMargin * 2,
    height: 79,
    justifyContent: 'space-between',
  },
  box: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    alignItems: 'center',
  },
  picker: {
    backgroundColor: theme.colors.light,
    width: '100%',
    height: '40%',
    position: 'absolute',
    bottom: 0,
  },
  pickerContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

interface DataProps {
  label: string;
  value: string;
}

interface Props {
  label: string;
  placeholder: string;
  value: string;
  setValue: (state: string) => void;
  data: DataProps[];
}

const Picker: FC<Props> = ({ label, placeholder, value, setValue, data }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { colors } = useTheme();

  return (
    <>
      <Box style={styles.container}>
        <Text variant="p2" style={{ color: colors.text }}>
          {label}
        </Text>

        <TouchableOpacity
          style={[styles.box, { borderColor: colors.text }]}
          activeOpacity={0.7}
          onPress={() => setVisible(!visible)}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: 'Nunito-SemiBold',
              fontSize: 15,
            }}
          >
            {value !== '' ? value : placeholder}
          </Text>
          <Icon name="chevron-down" color={colors.text} size={24} />
        </TouchableOpacity>
      </Box>

      <Box mt="xl" />

      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <Box style={styles.pickerContainer}>
          <Box style={styles.picker}>
            <TouchableOpacity
              style={{ padding: 20 }}
              onPress={() => setVisible(!visible)}
            >
              <Text variant="h4b" color="error">
                close
              </Text>
            </TouchableOpacity>
            <RNPicker
              selectedValue={value}
              onValueChange={(itemValue: string) => setValue(itemValue)}
            >
              {/* eslint-disable-next-line prettier/prettier */}
              {data.map((d) => (
                <RNPicker.Item label={d.label} value={d.value} key={d.value} />
              ))}
            </RNPicker>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Picker;
