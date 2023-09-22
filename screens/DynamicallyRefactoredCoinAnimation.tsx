import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderWithBack from '../Header/HeaderWithBack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  measure,
  runOnJS,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const NO_OF_AVATARS: number = 5;
const AVATAR_SIZE = 120 - NO_OF_AVATARS * 10;

const CoinAnimation = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  interface aPoint {
    x: number;
    y: number;
    width: number;
    height: number;
    pageX: number;
    pageY: number;
  }

  interface valuesType {
    currentOriginX: number;
    currentOriginY: number;
    currentWidth: number;
    currentHeight: number;
    currentGlobalOriginX: number;
    currentGlobalOriginY: number;
  }

  const [pointA, setPointA] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const [pointB, setPointB] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const [pointC, setPointC] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const [pointD, setPointD] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const [pointE, setPointE] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const aref = useAnimatedRef();
  const a2ref = useAnimatedRef();
  const a3ref = useAnimatedRef();
  const a4ref = useAnimatedRef();
  const a5ref = useAnimatedRef();
  const vsRef = useAnimatedRef();

  const bref = useAnimatedRef();
  const [alreadyRender, setAlreadyRender] = useState<boolean>(false);
  const opacityCoin = alreadyRender ? 1 : 0;

  useEffect(() => {
    if (!alreadyRender) return;
    console.log('componentMounted');
    setTimeout(
      () =>
        runOnUI(() => {
          'worklet';

          if (NO_OF_AVATARS === 2) {
            const measurementsCoin3 = measure(a3ref);
            const measurementsCoin4 = measure(a4ref);
            coinAnimation3.value = measurementsCoin3!;
            coinAnimation4.value = measurementsCoin4!;
          } else if (NO_OF_AVATARS === 3) {
            const measurementsCoin1 = measure(aref);
            const measurementsCoin3 = measure(a3ref);
            const measurementsCoin4 = measure(a4ref);

            coinAnimation.value = measurementsCoin1!;
            coinAnimation3.value = measurementsCoin3!;
            coinAnimation4.value = measurementsCoin4!;
          } else if (NO_OF_AVATARS === 4) {
            const measurementsCoin1 = measure(aref);

            const measurementsCoin3 = measure(a3ref);
            const measurementsCoin4 = measure(a4ref);
            const measurementsCoin5 = measure(a5ref);

            coinAnimation.value = measurementsCoin1!;

            coinAnimation3.value = measurementsCoin3!;
            coinAnimation4.value = measurementsCoin4!;
            coinAnimation5.value = measurementsCoin5!;
          } else if (NO_OF_AVATARS === 5) {
            const measurementsCoin1 = measure(aref);
            const measurementsCoin2 = measure(a2ref);
            const measurementsCoin3 = measure(a3ref);
            const measurementsCoin4 = measure(a4ref);
            const measurementsCoin5 = measure(a5ref);

            coinAnimation.value = measurementsCoin1!;
            coinAnimation2.value = measurementsCoin2!;
            coinAnimation3.value = measurementsCoin3!;
            coinAnimation4.value = measurementsCoin4!;
            coinAnimation5.value = measurementsCoin5!;
          }

          const measurementsB = measure(bref);
          const vsMeasurement = measure(vsRef);

          destinationCords.value = measurementsB!;
          vsCords.value = vsMeasurement!;
          runOnJS(coinMove)();
        })(),
      10,
    );
  }, [alreadyRender]);

  const coinAnimation = useSharedValue<aPoint>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const coinAnimation2 = useSharedValue<aPoint>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const coinAnimation3 = useSharedValue<aPoint>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const coinAnimation4 = useSharedValue<aPoint>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const coinAnimation5 = useSharedValue<aPoint>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });

  const destinationCords = useSharedValue<aPoint>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const vsCords = useSharedValue<aPoint>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });

  const opacity = useSharedValue(1);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const centerX = screenWidth / 2 - 12;
  const centerY = screenHeight / 2 - statusBarHeight - 24;

  const transition = useAnimatedStyle(() => {
    return {
      left: destinationCords.value.pageX,
      top: destinationCords.value.pageY,
    };
  });
  console.log(`transition ${transition}`);

  const coinMove = () => {
    setPointA(coinAnimation.value);
    setPointB(coinAnimation2.value);
    setPointC(coinAnimation3.value);
    setPointD(coinAnimation4.value);
    setPointE(coinAnimation5.value);
  };

  const RenderTwoAvatars = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '40%',
        alignItems: 'center',
      }}>
      <Animated.View ref={a3ref}>
        <Image
          source={require('../assets/profile3.png')}
          style={styles.profile}
        />
      </Animated.View>
      <Animated.View ref={vsRef}>
        <Image
          source={require('../assets/vs.png')}
          style={{
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </Animated.View>
      <Animated.View ref={a4ref}>
        <Image
          source={require('../assets/profile4.png')}
          style={styles.profile}
        />
      </Animated.View>
    </View>
  );

  const RenderThreeAvatars = () => (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          height: '30%',
          alignItems: 'center',
          // backgroundColor: '#ff8100',
        }}>
        <Animated.View ref={aref}>
          <Image
            source={require('../assets/profile1.png')}
            style={styles.profile}
          />
        </Animated.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: '40%',
          alignItems: 'center',
        }}>
        <Animated.View ref={a3ref}>
          <Image
            source={require('../assets/profile3.png')}
            style={styles.profile}
          />
        </Animated.View>
        <Animated.View ref={vsRef}>
          <Image
            source={require('../assets/vs.png')}
            style={{
              width: 24,
              height: 24,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Animated.View>
        <Animated.View ref={a4ref}>
          <Image
            source={require('../assets/profile4.png')}
            style={styles.profile}
          />
        </Animated.View>
      </View>
    </>
  );

  const RenderFourAvatars = () => (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          height: '30%',
          alignItems: 'center',
          // backgroundColor: '#ff8100',
        }}>
        <Animated.View ref={aref}>
          <Image
            source={require('../assets/profile1.png')}
            style={styles.profile}
          />
        </Animated.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: '40%',
          alignItems: 'center',
        }}>
        <Animated.View ref={a3ref}>
          <Image
            source={require('../assets/profile3.png')}
            style={styles.profile}
          />
        </Animated.View>
        <Animated.View ref={vsRef}>
          <Image
            source={require('../assets/vs.png')}
            style={{
              width: 24,
              height: 24,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Animated.View>
        <Animated.View ref={a4ref}>
          <Image
            source={require('../assets/profile4.png')}
            style={styles.profile}
          />
        </Animated.View>
      </View>
      <View
        style={{
          width: '100%',
          height: '30%',
          alignItems: 'center',

          justifyContent: 'center',
        }}>
        <Animated.View ref={a5ref}>
          <Image
            source={require('../assets/profile5.png')}
            style={styles.profile}
          />
        </Animated.View>
      </View>
    </>
  );
  const RenderFiveAvatars = () => (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          height: '30%',
          alignItems: 'center',
          // position: 'relative',
          // backgroundColor: '#ff8100',
        }}>
        <Animated.View ref={aref}>
          <Image
            source={require('../assets/profile1.png')}
            style={styles.profile}
          />
        </Animated.View>
        <Animated.View ref={a2ref}>
          <Image
            source={require('../assets/profile2.png')}
            style={styles.profile}
          />
        </Animated.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: '40%',
          alignItems: 'center',
        }}>
        <Animated.View ref={a3ref}>
          <Image
            source={require('../assets/profile3.png')}
            style={styles.profile}
          />
        </Animated.View>
        <Animated.View ref={vsRef}>
          <Image
            source={require('../assets/vs.png')}
            style={{
              width: 24,
              height: 24,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Animated.View>
        <Animated.View ref={a4ref}>
          <Image
            source={require('../assets/profile4.png')}
            style={styles.profile}
          />
        </Animated.View>
      </View>
      <View
        style={{
          width: '100%',
          height: '30%',
          alignItems: 'center',
          // backgroundColor: '#046A38',
          justifyContent: 'center',
        }}>
        <Animated.View ref={a5ref}>
          <Image
            source={require('../assets/profile5.png')}
            style={styles.profile}
          />
        </Animated.View>
      </View>
    </>
  );

  function CustomLayoutTransition(values: valuesType) {
    'worklet';

    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1000}),
          withTiming(destinationCords.value.pageX + 45, {
            duration: 1100,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1000,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation.value.width),
        height: withSpring(coinAnimation.value.height),
      },
      initialValues: {
        originX: coinAnimation.value.pageX + 20,
        originY: coinAnimation.value.pageY - statusBarHeight - 50,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransitionChildCoin1(values: valuesType) {
    'worklet';

    return {
      animations: {
        originX: withSequence(
          withTiming(centerX - 20, {duration: 1000}),
          withTiming(destinationCords.value.pageX + 45, {
            duration: 1200,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1100,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation.value.width),
        height: withSpring(coinAnimation.value.height),
      },
      initialValues: {
        originX: coinAnimation.value.pageX + 20,
        originY: coinAnimation.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransitionChildCoin2(values: valuesType) {
    'worklet';

    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1000}),
          withTiming(destinationCords.value.pageX + 45, {
            duration: 1300,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1200,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation.value.width),
        height: withSpring(coinAnimation.value.height),
      },
      initialValues: {
        originX: coinAnimation.value.pageX,
        originY: coinAnimation.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }

  function CustomLayoutTransition2(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1100}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1100,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1000,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation2.value.width),
        height: withSpring(coinAnimation2.value.height),
      },
      initialValues: {
        originX: coinAnimation2.value.pageX,
        originY: coinAnimation2.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition2childCoin1(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX + 20, {duration: 1100}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1200,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1100,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation2.value.width),
        height: withSpring(coinAnimation2.value.height),
      },
      initialValues: {
        originX: coinAnimation2.value.pageX,
        originY: coinAnimation2.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition2childCoin2(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1100}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1100,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1000,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation2.value.width),
        height: withSpring(coinAnimation2.value.height),
      },
      initialValues: {
        originX: coinAnimation2.value.pageX,
        originY: coinAnimation2.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition3(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1200}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1100,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1000,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation3.value.width),
        height: withSpring(coinAnimation3.value.height),
      },
      initialValues: {
        originX: coinAnimation3.value.pageX,
        originY: coinAnimation3.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition3childCoin1(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX - 20, {duration: 1200}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1200,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1100,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation3.value.width),
        height: withSpring(coinAnimation3.value.height),
      },
      initialValues: {
        originX: coinAnimation3.value.pageX,
        originY: coinAnimation3.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition3childCoin2(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1200}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1300,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1200,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation3.value.width),
        height: withSpring(coinAnimation3.value.height),
      },
      initialValues: {
        originX: coinAnimation3.value.pageX,
        originY: coinAnimation3.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition4(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1500}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1100,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1000,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation4.value.width),
        height: withSpring(coinAnimation4.value.height),
      },
      initialValues: {
        originX: coinAnimation4.value.pageX,
        originY: coinAnimation4.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition4childCoin1(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX + 20, {duration: 1500}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1200,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1100,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation4.value.width),
        height: withSpring(coinAnimation4.value.height),
      },
      initialValues: {
        originX: coinAnimation4.value.pageX,
        originY: coinAnimation4.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition4childCoin2(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1500}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1300,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1200,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation4.value.width),
        height: withSpring(coinAnimation4.value.height),
      },
      initialValues: {
        originX: coinAnimation4.value.pageX,
        originY: coinAnimation4.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition5(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1600}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1100,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1000,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation5.value.width),
        height: withSpring(coinAnimation5.value.height),
      },
      initialValues: {
        originX: coinAnimation5.value.pageX,
        originY: coinAnimation5.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition5childCoin1(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX - 20, {duration: 1600}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1200,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1100,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation5.value.width),
        height: withSpring(coinAnimation5.value.height),
      },
      initialValues: {
        originX: coinAnimation5.value.pageX,
        originY: coinAnimation5.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }
  function CustomLayoutTransition5childCoin2(values: valuesType) {
    'worklet';
    opacity.value = 0;
    return {
      animations: {
        originX: withSequence(
          withTiming(centerX, {duration: 1600}),
          withTiming(destinationCords.value.pageX + 50, {
            duration: 1300,
          }),
        ),
        originY: withSequence(
          withTiming(centerY - statusBarHeight - 24, {
            duration: 1200,
          }),

          withTiming(
            destinationCords.value.pageY -
              statusBarHeight -
              destinationCords.value.height -
              10,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation5.value.width),
        height: withSpring(coinAnimation5.value.height),
      },
      initialValues: {
        originX: coinAnimation5.value.pageX,
        originY: coinAnimation5.value.pageY - statusBarHeight - 50,
        // originX: values.currentOriginX,
        // originY: values.currentOriginY,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }

  return (
    <SafeAreaView style={[styles.screen, {paddingTop: statusBarHeight}]}>
      <HeaderWithBack title={'HELLO WORLD'} navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            alignItems: 'center',
            height: '100%',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={styles.generalText}>Give your best shot!</Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 4,
              width: '100%',
            }}
            onLayout={() => setAlreadyRender(true)}>
            {NO_OF_AVATARS === 2 && <RenderTwoAvatars />}
            {NO_OF_AVATARS === 3 && <RenderThreeAvatars />}
            {NO_OF_AVATARS === 4 && <RenderFourAvatars />}
            {NO_OF_AVATARS === 5 && <RenderFiveAvatars />}
          </View>

          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Animated.View
              ref={bref}
              style={{
                paddingHorizontal: 10,
                padding: 5,
                backgroundColor: '#090909',
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#3c3c3c',
              }}>
              <Text style={styles.generalText}>WINNER GETS</Text>
              <Text style={{color: '#ff8100'}}>80.00</Text>
            </Animated.View>

            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins-Bold',
              }}>
              Waiting time :
              <Text
                style={{
                  color: '#ff8100',
                }}>
                {' '}
                10 Seconds
              </Text>
            </Text>
          </View>
        </View>
        {NO_OF_AVATARS === 5 && (
          <>
            <Animated.View
              layout={CustomLayoutTransition}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransitionChildCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransitionChildCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Second avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition2childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition2childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Third avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition3}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition3childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition3childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Four avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition4}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition4childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition4childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Five avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition5}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition5childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition5childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
          </>
        )}
        {NO_OF_AVATARS === 4 && (
          <>
            <Animated.View
              layout={CustomLayoutTransition}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransitionChildCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransitionChildCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Third avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition3}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition3childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition3childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Four avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition4}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition4childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition4childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Five avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition5}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition5childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition5childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
          </>
        )}
        {NO_OF_AVATARS === 3 && (
          <>
            <Animated.View
              layout={CustomLayoutTransition}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransitionChildCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransitionChildCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Third avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition3}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition3childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition3childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Four avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition4}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition4childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition4childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
          </>
        )}
        {NO_OF_AVATARS === 2 && (
          <>
            {/* Third avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition3}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition3childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition3childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
            {/* Four avatar coins */}
            <Animated.View
              layout={CustomLayoutTransition4}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition4childCoin1}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Animated.View>
            <Animated.View
              layout={CustomLayoutTransition4childCoin2}
              style={[
                {
                  position: 'absolute',
                  borderRadius: 50,
                  left: destinationCords.value.pageX,
                  top: destinationCords.value.pageY,
                  opacity: opacityCoin,
                  zIndex: -99,
                },
              ]}>
              <Image
                source={require('../assets/coinNew.png')}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Animated.View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#090909',
  },
  generalText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  profile: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  },
});

export default CoinAnimation;
