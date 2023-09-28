import {View, Text, Button, Image} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

const Pacman = ({
  currentIndex,
  noofSlides,
  pacDirection,
}: {
  currentIndex: number;
  noofSlides: number;
  pacDirection: string;
}) => {
  const emptyArray = new Array(noofSlides).fill(0);
  // console.log(emptyArray);

  const containerPadding = 10; // You can adjust the container's padding as needed
  const elementWidth = 7; // Width of individual elements
  const elementMargin = 9; // element margin
  const index = useSharedValue(currentIndex);
  const [goingBack, setGoingBack] = React.useState(false);
  const [imageSource, setImageSource] = React.useState(
    require('../../assets/pacOpen.png'),
  );

  const handleMouthOpen = () => {
    // Change the image source to the replacement image
    setImageSource(require('../../assets/pacOpen.png'));

    setTimeout(() => {
      setImageSource(require('../../assets/pacClose.png'));
    }, 100); // Adjust the delay (in milliseconds) as needed
    // Set a timer to change it back to the original image after a delay
    setTimeout(() => {
      setImageSource(require('../../assets/pacOpen.png'));
    }, 250); // Adjust the delay (in milliseconds) as needed
  };

  const animatedLeft = useAnimatedStyle(() => {
    return {
      left: withSpring(
        containerPadding + index.value * (elementWidth + elementMargin),
      ),
    };
  });

  const rotateStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: goingBack ? '180deg' : '0deg'}],
    };
  });

  React.useEffect(() => {
    console.log('-------------');
    console.log('initialValue', index.value);
    console.log('initialCurrent', currentIndex);
    console.log('-------------');
    index.value = currentIndex;
    if (pacDirection === 'left' || currentIndex === emptyArray.length - 1) {
      setGoingBack(true);
    } else {
      setGoingBack(false);
    }
    if (currentIndex === 0) {
      setGoingBack(false);
    }
    handleMouthOpen();
  }, [currentIndex]);
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#1a1a1a',
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
              borderRadius: 50,
              zIndex: 999,
            },
            animatedLeft,
            rotateStyles,
          ]}>
          <FastImage
            style={{width: '100%', height: '100%'}}
            source={imageSource}
            resizeMode={FastImage.resizeMode.contain}
          />
        </Animated.View>
        {emptyArray.map((_, idx) => {
          const distanceFromSelected = Math.abs(index.value - idx);

          const getWidth = () => {
            let pacWidth;

            if (distanceFromSelected > 2) {
              pacWidth = '60%';
            } else if (distanceFromSelected > 1) {
              pacWidth = '80%';
            } else {
              pacWidth = '100%';
            }

            return pacWidth;
          };
          return (
            <View
              key={idx}
              style={{
                width: elementWidth,
                height: elementWidth,
                overflow: 'hidden',
                marginHorizontal: elementMargin / 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  borderRadius: 50,
                  width: getWidth(),
                  height: getWidth(),
                  backgroundColor:
                    distanceFromSelected > 1 ? '#6D644A' : '#FFE395',
                  opacity: index.value === idx ? 0 : 1,
                }}></View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Pacman;
