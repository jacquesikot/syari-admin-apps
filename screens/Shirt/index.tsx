import React from 'react';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';

import { Box, Text } from '../../components/Themed';
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
});

const Shirt = ({
  navigation,
}: StackScreenProps<MeasureNavParamList, 'Shirt'>): JSX.Element => {
  const { colors } = useTheme();
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
            Shirt
          </Text>
        </Box>

        <ScrollView
          style={styles.inputContainer}
          showsVerticalScrollIndicator={false}
        >
          <TextInput placeholder="Neck measurement" label="Neck" />

          <TextInput placeholder="Shoulder measurement" label="Shoulder" />

          <TextInput placeholder="Sleeve length" label="Sleeve length" />

          <Box style={styles.shortInputContainer}>
            <Box style={styles.formArrow1}>
              <FormArrow />
            </Box>

            <Box style={styles.formArrow2}>
              <FormArrow />
            </Box>

            <TextInput placeholder="" label="Short" width={wp(20)} />

            <TextInput
              placeholder=""
              label="Long"
              width={wp(20)}
              labelPosition="center"
            />

            <TextInput
              placeholder=""
              label="B/riga"
              width={wp(20)}
              labelPosition="flex-end"
            />
          </Box>

          <TextInput placeholder="Arm hole" label="Arm hole" />

          <TextInput placeholder="Round sleeve" label="Round sleeve" />

          <Box style={styles.shortInputContainer}>
            <Box style={styles.formArrow1}>
              <FormArrow />
            </Box>

            <Box style={styles.formArrow2}>
              <FormArrow />
            </Box>

            <TextInput placeholder="" label="Short" width={wp(20)} />

            <TextInput
              placeholder=""
              label="Long"
              width={wp(20)}
              labelPosition="center"
            />

            <TextInput
              placeholder=""
              label="B/riga"
              width={wp(20)}
              labelPosition="flex-end"
            />
          </Box>

          <TextInput placeholder="Cuffs" label="Cuffs" />

          <TextInput placeholder="Chest" label="Chest" />

          <TextInput placeholder="Tummy" label="Tummy" />

          <TextInput placeholder="Hip" label="Hip" />

          <TextInput placeholder="Shirt length" label="Shirt length" />

          <Box style={styles.shortInputContainer} mb="l">
            <Box style={styles.formArrow1}>
              <FormArrow />
            </Box>

            <Box style={styles.formArrow2}>
              <FormArrow />
            </Box>

            <TextInput placeholder="" label="Short" width={wp(20)} />

            <TextInput
              placeholder=""
              label="Long"
              width={wp(20)}
              labelPosition="center"
            />

            <TextInput
              placeholder=""
              label="B/riga"
              width={wp(20)}
              labelPosition="flex-end"
            />
          </Box>

          <Button
            type="primary"
            label="Next"
            arrow
            onPress={() => navigation.navigate('Trouser')}
          />

          <Box style={{ height: 200 }} />
        </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Shirt;
