import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { Text, Box } from '../Themed';
import Button from '../Button';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: hp(60),
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  visible: boolean;
  // eslint-disable-next-line react/require-default-props
  opacity?: number;
  refetch: () => void;
  loading: boolean;
}

const ScreenError = ({
  visible,
  opacity,
  refetch,
  loading,
}: Props): JSX.Element | null => {
  if (!visible) return null;

  return (
    <View style={[styles.container, { opacity: opacity || 1 }]}>
      <LottieView
        autoPlay
        loop
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: wp(50),
          marginTop: hp(4),
        }}
        // eslint-disable-next-line import/extensions
        source={require('../../assets/error_lottie.json')}
      />
      <Text style={{ marginTop: hp(5) }} variant="h2" color="primary">
        Error Loading resources
      </Text>

      <Box mt="xxxl">
        <Button
          type="primary"
          onPress={refetch}
          label="Retry"
          loading={loading}
        />
      </Box>
    </View>
  );
};

export default ScreenError;
