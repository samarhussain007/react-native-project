import {
  View,
  Text,
  StyleSheet,
  Image,
  Easing,
  Pressable,
  Animated,
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {useFocusEffect} from '@react-navigation/native';
// import Animated, {
//   useSharedValue,
//   withTiming,
//   Easing as ReanimatedEasing,
//   withRepeat,
//   interpolate,
// } from 'react-native-reanimated';

// import Animated from 'react-native-reanimated';
const styles = StyleSheet.create({
  yellowText: {
    color: '#FFCE45',
  },
  whiteText: {
    color: '#fff',
  },
  medium: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
  },
  extraBold: {
    fontSize: 15,
    fontFamily: 'Gilroy-ExtraBold',
  },
});

const IndiaMapBanner = () => {
  // const positionY = useSharedValue(-156);
  // const handlePress = () => {
  //   positionY.value = withTiming(positionY.value + 156, {
  //     duration: 1000,
  //   });
  // };
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  useFocusEffect(
    React.useCallback(() => {
      startAnimation(); // Start the animation when the component is focused

      return () => {
        // Cleanup: Stop or pause the animation when the component is not focused
        animatedValue.stopAnimation(); // Stop the animation
      };
    }, []),
  );

  const startAnimation = () => {
    console.log('animation');
    Animated.spring(animatedValue, {
      toValue: 1, // Adjust the final value as needed
      damping: 19,
      stiffness: 80, // Adjust stiffness for desired spring effect
      overshootClamping: true, // Adjust overshoot behavior
      restDisplacementThreshold: 0.01, // Adjust threshold for animation completion
      restSpeedThreshold: 0.01,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        requestAnimationFrame;
        setTimeout(() => {
          animatedValue.setValue(0);
          startAnimation();
        }, 3000);
      }
    });
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0], // Adjust the range as needed
  });

  return (
    <View
      style={{
        width: '100%',
        height: 200,
        backgroundColor: '#090909',
        marginBottom: 32,
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            transform: [{translateY}],
          }}>
          <FastImage
            source={require('../../assets/MAP.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </Animated.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '5%',
          // backgroundColor: 'red',
        }}>
        <View
          style={{
            width: 80,
            height: 80,
          }}>
          <FastImage
            source={require('../../assets/BlitzMatch.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View
          style={{
            height: 60,
            width: 2,
            backgroundColor: '#FFCE45',
            marginRight: 12,
          }}></View>
        <View>
          <Text
            style={[
              styles.yellowText,
              styles.extraBold,
              {
                marginBottom: 0.5,
              },
            ]}>
            01 VS 01
          </Text>
          <Text style={[styles.whiteText, {lineHeight: 16}]}>
            Get matched by {'\n'}players across{'\n'}
            <Text
              style={[
                styles.yellowText,
                {
                  fontSize: 11,
                  fontFamily: 'Poppins-Bold',
                },
              ]}>
              INDIA
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          zIndex: 999,
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.whiteText,
            {
              fontFamily: 'Boska-Bolditalic',
              fontSize: 14,
            },
          ]}>
          <Text
            style={[
              styles.yellowText,
              {
                fontFamily: 'Boska-Bolditalic',
              },
            ]}>
            90 seconds
          </Text>{' '}
          mein paisa double
        </Text>
      </View>
      <LinearGradient
        colors={['transparent', '#090909']}
        style={{
          height: 50,
          width: '100%',
          bottom: 0,
          position: 'absolute',
        }}
      />
    </View>
  );
};

export default IndiaMapBanner;
