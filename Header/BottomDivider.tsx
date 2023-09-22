/* eslint-disable prettier/prettier */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

function BottomDivider() {
  return (
    <LinearGradient
      colors={[
        'rgba(42, 45, 47, 0)',
        'rgba(52, 55, 57, 1)',
        'rgba(42, 45, 47, 0)',
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      locations={[0, 0.5, 1]}
      style={{
        height: 1,
      }}></LinearGradient>
  );
}

export default BottomDivider;
