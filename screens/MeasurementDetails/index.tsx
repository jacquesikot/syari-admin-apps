import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import theme, { Box, Text } from '../../components/Themed';
import Layout from '../../constants/Layout';
import ArrowLeft from '../../svg/ArrowLeft';
import { WorkStationNavParamList } from '../../types';

const screenWidth = wp(100) - Layout.screenMargin * 2;

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
  customerCard: {
    width: wp(100) - Layout.screenMargin * 2,
    marginTop: hp(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(10),
  },
  hr: {
    width: wp(100) - Layout.screenMargin * 2,
    height: 2,
    backgroundColor: theme.colors.light,
    marginVertical: hp(3),
  },
  item: {
    flexDirection: 'row',
    width: screenWidth,
    justifyContent: 'space-between',
  },
});

const MeasurementDetails = ({
  navigation,
  route,
}: StackScreenProps<
  WorkStationNavParamList,
  'MeasurementDetails'
>): JSX.Element => {
  const { colors } = useTheme();

  const { measurement } = route.params;

  return (
    <SafeAreaView style={styles.container}>
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
            width: 250,
            textAlign: 'center',
          }}
        >
          Measurement Details
        </Text>
      </Box>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 200 }}
      >
        <Box style={styles.customerCard}>
          <Text variant="h3" style={{ color: colors.text }}>
            {measurement.name}
          </Text>
          <Text variant="p1" style={{ color: colors.text }}>
            {measurement.email ? measurement.email : 'N/A'}
          </Text>
          <Text variant="p1" style={{ color: colors.text }}>
            {measurement.phone}
          </Text>
        </Box>

        <Box style={styles.hr} />

        <Box>
          <Text
            variant="h1"
            style={{
              color: colors.text,
              alignSelf: 'flex-start',
              width: screenWidth,
            }}
            mb="l"
          >
            Shirt
          </Text>

          <Box style={styles.item} mb="xl">
            <Box>
              <Text variant="h3" mb="s">
                Neck
              </Text>
              <Text variant="p2">{measurement.neck}</Text>
            </Box>

            <Box>
              <Text style={{ textAlign: 'right' }} variant="h3" mb="s">
                Shoulder
              </Text>
              <Text style={{ textAlign: 'right' }} variant="p2">
                {measurement.shoulder}
              </Text>
            </Box>
          </Box>

          <Box style={styles.item} mb="xl">
            <Box>
              <Text variant="h3" mb="s">
                Chest
              </Text>
              <Box style={{ flexDirection: 'row' }}>
                <Text variant="p2">{measurement.chest}</Text>
              </Box>
            </Box>

            <Box>
              <Text style={{ textAlign: 'right' }} variant="h3" mb="s">
                Tummy
              </Text>
              <Text style={{ textAlign: 'right' }} variant="p2">
                {measurement.tummy}
              </Text>
            </Box>
          </Box>

          <Box style={styles.item} mb="xl">
            <Box>
              <Text variant="h3" mb="s">
                Sleeve Length
              </Text>
              <Box style={{ flexDirection: 'row' }}>
                <Text mr="m" variant="p2">
                  short - {measurement.sleeveLengthShort}
                </Text>
                <Text mr="m" variant="p2">
                  long - {measurement.sleeveLengthLong}
                </Text>
                <Text variant="p2">
                  B/riga - {measurement.sleeveLengthBriga}
                </Text>
              </Box>
            </Box>

            <Box>
              <Text style={{ textAlign: 'right' }} variant="h3" mb="s">
                Arm Hole
              </Text>
              <Text style={{ textAlign: 'right' }} variant="p2">
                {measurement.armHole}
              </Text>
            </Box>
          </Box>

          <Box style={styles.item} mb="xl">
            <Box>
              <Text variant="h3" mb="s">
                Round Sleeve
              </Text>
              <Box style={{ flexDirection: 'row' }}>
                <Text mr="m" variant="p2">
                  short - {measurement.roundSleeveShort}
                </Text>
                <Text mr="m" variant="p2">
                  long - {measurement.roundSleeveLong}
                </Text>
                <Text variant="p2">
                  B/riga - {measurement.roundSleeveBriga}
                </Text>
              </Box>
            </Box>

            <Box>
              <Text style={{ textAlign: 'right' }} variant="h3" mb="s">
                Cuffs
              </Text>
              <Text style={{ textAlign: 'right' }} variant="p2">
                {measurement.cuffs}
              </Text>
            </Box>
          </Box>

          <Box style={styles.item} mb="xl">
            <Box>
              <Text variant="h3" mb="s">
                Shirt Length
              </Text>
              <Box style={{ flexDirection: 'row' }}>
                <Text mr="m" variant="p2">
                  short - {measurement.shirtLengthShort}
                </Text>
                <Text mr="m" variant="p2">
                  long - {measurement.shirtLengthLong}
                </Text>
                <Text variant="p2">
                  B/riga - {measurement.shirtLengthBriga}
                </Text>
              </Box>
            </Box>

            <Box>
              <Text style={{ textAlign: 'right' }} variant="h3" mb="s">
                Hips
              </Text>
              <Text style={{ textAlign: 'right' }} variant="p2">
                {measurement.hip}
              </Text>
            </Box>
          </Box>

          <Text
            variant="h1"
            style={{
              color: colors.text,
              alignSelf: 'flex-start',
              width: screenWidth,
            }}
            mb="l"
            mt="xl"
          >
            Trouser
          </Text>

          <Box style={styles.item} mb="xl">
            <Box>
              <Text variant="h3" mb="s">
                Waist
              </Text>
              <Text variant="p2">{measurement.waist}</Text>
            </Box>

            <Box>
              <Text style={{ textAlign: 'right' }} variant="h3" mb="s">
                Lap
              </Text>
              <Text style={{ textAlign: 'right' }} variant="p2">
                {measurement.lap}
              </Text>
            </Box>
          </Box>

          <Box style={styles.item} mb="xl">
            <Box>
              <Text variant="h3" mb="s">
                Knee
              </Text>
              <Text variant="p2">{measurement.knee}</Text>
            </Box>

            <Box>
              <Text style={{ textAlign: 'right' }} variant="h3" mb="s">
                Base
              </Text>
              <Text style={{ textAlign: 'right' }} variant="p2">
                {measurement.base}
              </Text>
            </Box>
          </Box>

          <Box>
            <Text variant="h3" mb="s">
              Length
            </Text>
            <Text variant="p2">{measurement.length}</Text>
          </Box>

          <Text
            variant="h1"
            style={{
              color: colors.text,
              alignSelf: 'flex-start',
              width: screenWidth,
            }}
            mb="l"
            mt="xxl"
          >
            Instructions
          </Text>

          <Box style={styles.item} mb="xl">
            <Box>
              <Text variant="h3" mb="s">
                Waist style
              </Text>
              <Text variant="p2">{measurement.waistStyle}</Text>
            </Box>

            <Box>
              <Text style={{ textAlign: 'right' }} variant="h3" mb="s">
                Hand Style
              </Text>
              <Text style={{ textAlign: 'right' }} variant="p2">
                {measurement.handStyle}
              </Text>
            </Box>
          </Box>

          <Box style={styles.item} mb="xl">
            <Box>
              <Text variant="h3" mb="s">
                No of buttons
              </Text>
              <Text variant="p2">{measurement.buttons}</Text>
            </Box>
          </Box>

          <Text
            variant="h1"
            style={{
              color: colors.text,
              alignSelf: 'flex-start',
              width: screenWidth,
            }}
            mb="l"
            mt="xl"
          >
            Notes
          </Text>
          <Text variant="p1">{measurement.notes}</Text>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MeasurementDetails;
