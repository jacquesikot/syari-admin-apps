/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';
import { View, AnimatePresence } from 'moti';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text } from '../../components/Themed';
import { RootStackParamList } from '../../types';
import Button from '../../components/Button';
import data from './data';
import Onboarding from '../../components/Onboarding';
import Layout from '../../constants/Layout';
import useColorScheme from '../../hooks/useColorScheme';
import ArrowLeft from '../../svg/ArrowLeft';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(100) - Layout.screenMargin * 2,
    marginTop: Layout.screenMarginTop,
    marginBottom: 32,
  },
});

const OnboardingScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'Onboarding'>): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const slidesRef = useRef<any>(null);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.topBar}>
        {currentIndex > 0 ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              slidesRef.current.scrollToIndex({ index: currentIndex - 1 })
            }
          >
            <AnimatePresence>
              <View
                from={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'timing', duration: 500 }}
              >
                <ArrowLeft color={colors.text} />
              </View>
            </AnimatePresence>
          </TouchableOpacity>
        ) : (
          <Box style={{ width: 1 }} />
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Authentication')}>
          <Text variant="h4" style={{ color: colors.text }}>
            Skip
          </Text>
        </TouchableOpacity>
      </Box>

      <Animated.FlatList
        data={data}
        renderItem={({ item }: any) => {
          return (
            <Onboarding
              topText={item.topText}
              bottomText={item.bottomText}
              image={scheme === 'light' ? item.imageLight : item.imageDark}
              width={item.width}
              height={item.height}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item: any) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <Box mt="l">
        <Button
          type="round"
          onPress={() => {
            if (currentIndex === 2) {
              navigation.navigate('Authentication');
            } else {
              slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
            }
          }}
        />
      </Box>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
