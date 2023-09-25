import {View, Text, Button} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Image} from '@rneui/base';
import {ImageStore} from 'react-native';

const Pacman = () => {
  const emptyArray = new Array(7).fill(0);
  const containerPadding = 10; // You can adjust the container's padding as needed
  const elementWidth = 7; // Width of individual elements
  const elementMargin = 10; // element margin
  const index = useSharedValue(0);
  const [goingBack, setGoingBack] = React.useState(false);
  const [imageSource, setImageSource] = React.useState(
    require('../../assets/pacClose.png'),
  );

  const handleMouthOpen = () => {
    // Change the image source to the replacement image
    setImageSource(require('../../assets/pacOpen.png'));

    // Set a timer to change it back to the original image after a delay
    setTimeout(() => {
      setImageSource(require('../../assets/pacClose.png'));
    }, 100); // Adjust the delay (in milliseconds) as needed
  };

  const animatedLeft = useAnimatedStyle(() => {
    return {
      left: withSpring(
        containerPadding + index.value * (elementWidth + elementMargin),
        {
          overshootClamping: true,
        },
      ),
    };
  });

  const rotateStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: goingBack ? '180deg' : '0deg'}],
    };
  });

  const movePac = () => {
    if (index.value < emptyArray.length - 1) {
      //   setIndex(index + 1);
      index.value += 1;
      setGoingBack(false);
      console.log('true');
    }
    if (index.value === emptyArray.length - 1) {
      setGoingBack(true);
    }
    handleMouthOpen();
  };

  const movePacBack = () => {
    if (index.value > 0) {
      //   setIndex(index - 1);
      index.value -= 1;
      setGoingBack(true);
      console.log('false');
    }
    if (index.value === 0) {
      setGoingBack(false);
    }
    handleMouthOpen();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#1a1a1a',
          //   width: 80,
          padding: 10,
          height: 24,
          borderRadius: 21,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              width: 16,
              height: 16,
              //   backgroundColor: '#FFE395',
              borderRadius: 50,
              zIndex: 999,
            },
            animatedLeft,
          ]}>
          <Animated.Image
            source={imageSource}
            style={[
              {
                width: '100%',
                height: '100%',
              },
              rotateStyles,
            ]}
            resizeMode="contain"
          />
        </Animated.View>
        {emptyArray.map(() => (
          <View
            style={{
              width: elementWidth,
              height: elementWidth,
              backgroundColor: '#FFE395',
              borderRadius: 50,
              marginHorizontal: elementMargin / 2,
            }}></View>
        ))}
      </View>

      <Button onPress={movePac} title="move" />
      <Button onPress={movePacBack} title="moveBack" />
    </View>
  );
};

export default Pacman;
