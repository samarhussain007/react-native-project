import {View, Text, StyleSheet} from 'react-native';

import React, {useEffect} from 'react';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
const INDICATOR_WIDTH = 70;

const Indicator = ({percentage}: {percentage: number}) => {
  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: withSpring((INDICATOR_WIDTH * percentage) / 100, {
        overshootClamping: true,
      }),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.innerContainer, animatedWidth]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: INDICATOR_WIDTH,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#333333',
  },
  innerContainer: {
    height: 8,
    borderRadius: 10,
    backgroundColor: '#888888',
  },
});

export default Indicator;
