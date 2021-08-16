import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

import theme, { Box, Text } from '../../components/Themed';
import Layout from '../../constants/Layout';
import ArrowLeft from '../../svg/ArrowLeft';
import { MeasureNavParamList } from '../../types';
import TextInput from '../../components/TextInput';
import Picker from '../../components/Picker';
import Button from '../../components/Button';

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
  note: {
    width: '100%',
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.light,
    marginTop: hp(2),
  },
});

const Trouser = ({
  navigation,
  route,
}: StackScreenProps<MeasureNavParamList, 'Trouser'>): JSX.Element => {
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
  } = route.params;

  const { colors } = useTheme();

  const data = [
    {
      label: 'Rope',
      value: 'Rope',
    },
    {
      label: 'Standard',
      value: 'Standard',
    },
  ];

  const [waist, setWaist] = useState<string>('');
  const [lap, setLap] = useState<string>('');
  const [knee, setKnee] = useState<string>('');
  const [base, setBase] = useState<string>('');
  const [length, setLength] = useState<string>('');

  const handleNext = () => {
    if (
      waist === '' ||
      lap === '' ||
      knee === '' ||
      base === '' ||
      length === ''
    )
      return Toast.show({
        type: 'error',
        visibilityTime: 4000,
        autoHide: true,
        text1: 'Measurement',
        text2: 'Please fill all fields to continue!',
      });

    return navigation.navigate('Instructions', {
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
    });
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
            Trouser
          </Text>
        </Box>

        <Box style={styles.note}>
          <Text variant="p2" color="textDark">
            Note: For fields not needed, fill in zero(0)
          </Text>
        </Box>

        <ScrollView
          style={{ marginTop: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <Picker
            label="Waist"
            placeholder="Set waist type"
            value={waist}
            setValue={setWaist}
            data={data}
          />

          <TextInput
            placeholder="Lap measurement"
            label="Lap"
            keyboardType="number-pad"
            onChangeText={t => setLap(t)}
          />

          <TextInput
            placeholder="Knee measurement"
            label="Knee"
            keyboardType="number-pad"
            onChangeText={t => setKnee(t)}
          />

          <TextInput
            placeholder="Base measurement"
            label="Base"
            keyboardType="number-pad"
            onChangeText={t => setBase(t)}
          />

          <TextInput
            placeholder="Length measurement"
            label="Length"
            keyboardType="number-pad"
            onChangeText={t => setLength(t)}
          />

          <Box style={{ marginTop: hp(1) }}>
            <Button type="primary" label="Next" arrow onPress={handleNext} />
          </Box>
        </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Trouser;
