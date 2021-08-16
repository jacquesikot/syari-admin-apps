import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-toast-message';

import theme, { Box, Text } from '../../components/Themed';
import ArrowLeft from '../../svg/ArrowLeft';
import { MeasureNavParamList } from '../../types';
import Layout from '../../constants/Layout';
import TextInput from '../../components/TextInput';
import FormArrow from '../../svg/FormArrow';
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
  inputContainer: {
    marginTop: 24,
  },
  shortInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formArrow1: {
    position: 'absolute',
    left: '26.5%',
    top: '-10%',
  },
  formArrow2: {
    position: 'absolute',
    left: '64.5%',
    top: '-10%',
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

const Shirt = ({
  navigation,
  route,
}: StackScreenProps<MeasureNavParamList, 'Shirt'>): JSX.Element => {
  const { name, email, phone } = route.params;

  const [neck, setNeck] = useState<string>('');
  const [shoulder, setShoulder] = useState<string>('');

  const [sleeveLength, setSleevelength] = useState<string>('');
  const [sleeveLengthLong, setSleevelengthLong] = useState<string>('');
  const [sleeveLengthShort, setSleevelengthShort] = useState<string>('');
  const [sleeveLengthBriga, setSleevelengthBriga] = useState<string>('');

  const [armHole, setArmhole] = useState<string>('');

  const [roundSleeve, setRoundSleeve] = useState<string>('');
  const [roundSleeveLong, setRoundSleeveLong] = useState<string>('');
  const [roundSleeveShort, setRoundSleeveShort] = useState<string>('');
  const [roundSleeveBriga, setRoundSleeveBriga] = useState<string>('');

  const [cuffs, setCuffs] = useState<string>('');
  const [chest, setChest] = useState<string>('');
  const [tummy, setTummy] = useState<string>('');
  const [hip, setHip] = useState<string>('');

  const [shirtLength, setShirtlength] = useState<string>('');
  const [shirtLengthShort, setShirtlengthShort] = useState<string>('');
  const [shirtLengthLong, setShirtlengthLong] = useState<string>('');
  const [shirtLengthBriga, setShirtlengthBriga] = useState<string>('');

  const handleNext = () => {
    if (
      neck === '' ||
      shoulder === '' ||
      sleeveLength === '' ||
      sleeveLengthLong === '' ||
      sleeveLengthShort === '' ||
      sleeveLengthBriga === '' ||
      armHole === '' ||
      roundSleeve === '' ||
      roundSleeveLong === '' ||
      roundSleeveShort === '' ||
      roundSleeveBriga === '' ||
      cuffs === '' ||
      chest === '' ||
      tummy === '' ||
      hip === '' ||
      shirtLength === '' ||
      shirtLengthShort === '' ||
      shirtLengthLong === '' ||
      shirtLengthBriga === ''
    )
      return Toast.show({
        type: 'error',
        visibilityTime: 4000,
        autoHide: true,
        text1: 'Measurement',
        text2: 'Please fill all fields to continue!',
      });

    return navigation.navigate('Trouser', {
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
    });
  };

  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity onPress={() => Keyboard.dismiss()} activeOpacity={1}> */}
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
          Shirt
        </Text>
      </Box>

      <Box style={styles.note}>
        <Text variant="p2" color="textDark">
          Note: For fields not needed, fill in zero(0)
        </Text>
      </Box>

      <ScrollView
        style={styles.inputContainer}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          placeholder="Neck measurement"
          label="Neck"
          keyboardType="number-pad"
          onChangeText={t => setNeck(t)}
        />

        <TextInput
          placeholder="Shoulder measurement"
          label="Shoulder"
          keyboardType="number-pad"
          onChangeText={t => setShoulder(t)}
        />

        <TextInput
          placeholder="Sleeve length"
          label="Sleeve length"
          keyboardType="number-pad"
          onChangeText={t => setSleevelength(t)}
        />

        <Box style={styles.shortInputContainer}>
          <Box style={styles.formArrow1}>
            <FormArrow />
          </Box>

          <Box style={styles.formArrow2}>
            <FormArrow />
          </Box>

          <TextInput
            placeholder=""
            label="Short"
            width={wp(20)}
            keyboardType="number-pad"
            onChangeText={t => setSleevelengthShort(t)}
          />

          <TextInput
            placeholder=""
            label="Long"
            width={wp(20)}
            labelPosition="center"
            keyboardType="number-pad"
            onChangeText={t => setSleevelengthLong(t)}
          />

          <TextInput
            placeholder=""
            label="B/riga"
            width={wp(20)}
            labelPosition="flex-end"
            keyboardType="number-pad"
            onChangeText={t => setSleevelengthBriga(t)}
          />
        </Box>

        <TextInput
          placeholder="Arm hole"
          label="Arm hole"
          keyboardType="number-pad"
          onChangeText={t => setArmhole(t)}
        />

        <TextInput
          placeholder="Round sleeve"
          label="Round sleeve"
          keyboardType="number-pad"
          onChangeText={t => setRoundSleeve(t)}
        />

        <Box style={styles.shortInputContainer}>
          <Box style={styles.formArrow1}>
            <FormArrow />
          </Box>

          <Box style={styles.formArrow2}>
            <FormArrow />
          </Box>

          <TextInput
            placeholder=""
            label="Short"
            width={wp(20)}
            keyboardType="number-pad"
            onChangeText={t => setRoundSleeveShort(t)}
          />

          <TextInput
            placeholder=""
            label="Long"
            width={wp(20)}
            labelPosition="center"
            keyboardType="number-pad"
            onChangeText={t => setRoundSleeveLong(t)}
          />

          <TextInput
            placeholder=""
            label="B/riga"
            width={wp(20)}
            labelPosition="flex-end"
            keyboardType="number-pad"
            onChangeText={t => setRoundSleeveBriga(t)}
          />
        </Box>

        <TextInput
          placeholder="Cuffs"
          label="Cuffs"
          keyboardType="number-pad"
          onChangeText={t => setCuffs(t)}
        />

        <TextInput
          placeholder="Chest"
          label="Chest"
          keyboardType="number-pad"
          onChangeText={t => setChest(t)}
        />

        <TextInput
          placeholder="Tummy"
          label="Tummy"
          keyboardType="number-pad"
          onChangeText={t => setTummy(t)}
        />

        <TextInput
          placeholder="Hip"
          label="Hip"
          keyboardType="number-pad"
          onChangeText={t => setHip(t)}
        />

        <TextInput
          placeholder="Shirt length"
          label="Shirt length"
          keyboardType="number-pad"
          onChangeText={t => setShirtlength(t)}
        />

        <Box style={styles.shortInputContainer} mb="l">
          <Box style={styles.formArrow1}>
            <FormArrow />
          </Box>

          <Box style={styles.formArrow2}>
            <FormArrow />
          </Box>

          <TextInput
            placeholder=""
            label="Short"
            width={wp(20)}
            keyboardType="number-pad"
            onChangeText={t => setShirtlengthShort(t)}
          />

          <TextInput
            placeholder=""
            label="Long"
            width={wp(20)}
            labelPosition="center"
            keyboardType="number-pad"
            onChangeText={t => setShirtlengthLong(t)}
          />

          <TextInput
            placeholder=""
            label="B/riga"
            width={wp(20)}
            labelPosition="flex-end"
            keyboardType="number-pad"
            onChangeText={t => setShirtlengthBriga(t)}
          />
        </Box>

        <Button type="primary" label="Next" arrow onPress={handleNext} />

        <Box style={{ height: 200 }} />
      </ScrollView>
      {/* </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Shirt;
