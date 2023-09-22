import {View, Text, Button} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
const SimpleLottie = () => {
  const animationRef = useRef<LottieView>(null);

  const animationStart = () => {
    animationRef.current?.play();
  };
  return (
    <>
      {/* <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}></View> */}
      <View
        style={{
          flex: 1,

          position: 'relative',
          width: '90%',
          height: 500,
          top: -60,
        }}>
        <LottieView
          ref={animationRef}
          source={require('../assets/newLogoLoader.json')}
          autoPlay
          loop
        />
      </View>
    </>
  );
};

export default SimpleLottie;
