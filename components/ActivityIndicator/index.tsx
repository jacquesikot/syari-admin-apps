import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
});

interface Props {
  visible: boolean;
  // eslint-disable-next-line react/require-default-props
  opacity?: number;
}

const ActivityIndicator = ({ visible, opacity }: Props): JSX.Element | null => {
  if (!visible) return null;

  return (
    <View style={[styles.container, { opacity: opacity || 0.8 }]}>
      <LottieView
        autoPlay
        loop
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        // eslint-disable-next-line import/extensions
        source={require('../../assets/loading.json')}
      />
    </View>
  );
};

export default ActivityIndicator;
