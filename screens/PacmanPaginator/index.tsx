import {View, Text, Button} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Pacman = ({
  currentIndex,
  noofSlides,
}: {
  currentIndex: number;
  noofSlides: number;
}) => {
  const emptyArray = new Array(noofSlides).fill(0);
  const containerPadding = 10; // You can adjust the container's padding as needed
  const elementWidth = 7; // Width of individual elements
  const elementMargin = 9; // element margin
  const index = useSharedValue(currentIndex);
  const [goingBack, setGoingBack] = React.useState(false);
  const [imageSource, setImageSource] = React.useState(
    require('../../assets/pacOpen.png'),
  );
  console.log('ValueIndex', index.value);
  console.log('currentIndex', currentIndex);

  const handleMouthOpen = () => {
    // Change the image source to the replacement image
    setImageSource(require('../../assets/pacOpen.png'));

    // Set a timer to change it back to the original image after a delay
    setTimeout(() => {
      setImageSource(require('../../assets/pacClose.png'));
    }, 100); // Adjust the delay (in milliseconds) as needed
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

  const movePac = () => {
    console.log(emptyArray.length);
    if (index.value < emptyArray.length) {
      // index.value += 1;

      setGoingBack(false);
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
    }
    if (index.value === 1) {
      setGoingBack(false);
    }
    handleMouthOpen();
  };
  React.useEffect(() => {
    if (index.value < currentIndex) {
      index.value += 1;
      movePac();
    }
    if (index.value > currentIndex) {
      index.value -= 1;
      movePacBack();
    }
    // movePacBack();
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
