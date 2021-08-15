import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import theme, { Box, Text } from '../../components/Themed';
import { MeasureNavParamList } from '../../types';
import Layout from '../../constants/Layout';
import ArrowLeft from '../../svg/ArrowLeft';
import Picker from '../../components/Picker';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import measurementsApi from '../../firebase/measurements';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Layout.screenMargin,
  },
  topBar: {
    flexDirection: 'row',
    marginTop: Layout.screenMarginTop,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    right: '92%',
  },
});

const Instructions = ({
  navigation,
  route,
}: StackScreenProps<MeasureNavParamList, 'Instructions'>): JSX.Element => {
  const {
    name,
    email,
    phone,
    neck,
    shoulder,
    sleeveLength,
    sleeveLengthLong,
    sleeveLengthShort,
    sleeveLengthBriga,
    armHole,
    roundSleeve,
    roundSleeveLong,
    roundSleeveShort,
    roundSleeveBriga,
    cuffs,
    chest,
    tummy,
    hip,
    shirtLength,
    shirtLengthShort,
    shirtLengthLong,
    shirtLengthBriga,
    waist,
    lap,
    knee,
    base,
    length,
  } = route.params;

  const { colors } = useTheme();

  const data1 = [
    {
      label: 'Double cuffs',
      value: 'Joggers',
    },
    {
      label: 'Traditional',
      value: 'Traditional',
    },
    {
      label: 'Belt hole',
      value: 'Belt hole',
    },
  ];

  const data2 = [
    {
      label: 'Double cuffs',
      value: 'Double cuffs',
    },
    {
      label: 'Free Hand',
      value: 'Free Hand',
    },
    {
      label: 'Single cuffs',
      value: 'Single cuffs',
    },
  ];

  const [waistStyle, setWaistStyle] = useState<string>('');
  const [handStyle, setHandStyle] = useState<string>('');
  const [buttons, setButtons] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const handleFinish = async () => {
    try {
      setLoading(true);

      await measurementsApi.addMeasurement({
        name,
        email,
        phone,
        neck,
        shoulder,
        sleeveLength,
        sleeveLengthLong,
        sleeveLengthShort,
        sleeveLengthBriga,
        armHole,
        roundSleeve,
        roundSleeveLong,
        roundSleeveShort,
        roundSleeveBriga,
        cuffs,
        chest,
        tummy,
        hip,
        shirtLength,
        shirtLengthShort,
        shirtLengthLong,
        shirtLengthBriga,
        waist,
        lap,
        knee,
        base,
        length,
        waistStyle,
        handStyle,
        buttons,
        notes,
      });

      setLoading(false);

      navigation.navigate('AddMeasurementScreen');

      Toast.show({
        type: 'success',
        visibilityTime: 2000,
        autoHide: true,
        text1: 'Measurement Success',
        text2: 'Measurement addedd successfully',
      });
    } catch (error) {
      setLoading(false);

      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        autoHide: true,
        text1: 'Measurement Error',
        text2: error.message,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => Keyboard.dismiss()} activeOpacity={1}>
        <Box style={styles.topBar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrow}
          >
            <ArrowLeft color={colors.text} />
          </TouchableOpacity>

          <Text
            variant="h1"
            style={{
              color: colors.text,
              width: 183,
              textAlign: 'center',
            }}
          >
            Instructions
          </Text>
        </Box>

        <ScrollView
          style={{ marginTop: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <Picker
            label="Waist Style"
            placeholder="Set waist style"
            value={waistStyle}
            setValue={setWaistStyle}
            data={data1}
          />

          <Picker
            label="Hand Style"
            placeholder="Set hand type"
            value={handStyle}
            setValue={setHandStyle}
            data={data2}
          />

          <TextInput
            placeholder="Buttons"
            label="No of Buttons"
            keyboardType="number-pad"
            onChangeText={t => setButtons(t)}
          />

          <TextInput
            placeholder="Extra notes"
            label="Notes"
            numberOfLines={4}
            multiline
            height={120}
            onChangeText={t => setNotes(t)}
          />

          <Button
            type="primary"
            label="Finish"
            arrow
            onPress={handleFinish}
            loading={loading}
          />
        </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Instructions;
