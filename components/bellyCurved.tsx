import React from 'react';
import {View} from 'react-native';

const BellyCurvedRectangle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.trapezoid} />
      <View style={styles.middleCurved} />
      <View style={[styles.trapezoid, styles.rotatedtrapezoid]} />
    </View>
  );
};

const styles = {
  container: {
    width: 272,
    height: 390,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topFlat: {
    height: 25,
    width: 154,
    backgroundColor: 'blue',
  },
  middleCurved: {
    // flex: 1,
    height: 340,
    backgroundColor: 'red',
    borderRadius: 400,
    width: 20,
    transform: [{scaleX: 10}], // Adjust scaleX value to modify the curvature
  },
  bottomFlat: {
    height: 25,
    width: 150,
    backgroundColor: 'red',
  },
  trapezoid: {
    width: 200,
    height: 0,
    borderBottomWidth: 100,
    borderBottomColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
  },
  rotatedtrapezoid: {
    transform: [{rotate: '180deg'}],
  },
  gradientMask: {
    width: '150%',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
};

export default BellyCurvedRectangle;
