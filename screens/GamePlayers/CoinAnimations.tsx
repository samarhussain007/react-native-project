/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  withSpring,
  runOnUI,
  runOnJS,
  measure,
} from 'react-native-reanimated';

// import HeaderWithBack from 'app/components/HeaderWithBack';
import footerStyles from './styles';
// import RupeeIcon from 'app/components/RupeeIcon';
import GradientText from '../../components/GradientMask';
import HeaderWithBack from '../../Header/HeaderWithBack';
// import {useStore} from 'app/store/index';
// import {getDefaultAvatar} from 'app/utils/helpers';
// import FastImage from 'react-native-fast-image';
// import images from 'app/config/images';

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

function Avatar({refer, player, AVATAR_STYLE}: any) {
  // const {nickname: name, profilePic} = player;
  // const {userId, avatarsList} = useStore();
  // const playerNameStyle =
  //   name === userId ? footerStyles.highlightedName : footerStyles.playerName;
  // const displayName = name === userId ? 'You' : name;
  // const avatar = profilePic || getDefaultAvatar(avatarsList);
  return (
    <Animated.View ref={refer}>
      <Image
        source={require('../../assets/profile1.png')}
        style={[AVATAR_STYLE, {borderRadius: 100}]}
      />
      <Text style={footerStyles.playerName}>hello world</Text>
    </Animated.View>
  );
}

const RenderTwoAvatars = ({
  a3ref,
  vsRef,
  a4ref,
  AVATAR_STYLE,
  players,
}: any) => (
  <View style={styles.centerBlock}>
    <Avatar refer={a3ref} player={players[0]} AVATAR_STYLE={AVATAR_STYLE} />
    <Animated.View ref={vsRef}>
      <Image source={require('../../assets/vs.png')} style={styles.vsPng} />
    </Animated.View>
    <Avatar refer={a4ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
  </View>
);

const RenderThreeAvatars = ({
  aref,
  a3ref,
  a4ref,
  vsRef,
  AVATAR_STYLE,
  players,
}: any) => (
  <>
    <View style={styles.upperBlock}>
      <Avatar refer={aref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
    </View>
    <View style={styles.centerBlock}>
      <Avatar refer={a3ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
      <Animated.View ref={vsRef}>
        <Image source={require('../../assets/vs.png')} style={styles.vsPng} />
      </Animated.View>

      <Avatar refer={a4ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
    </View>
  </>
);

const RenderFourAvatars = ({
  aref,
  a3ref,
  a4ref,
  vsRef,
  a5ref,
  AVATAR_STYLE,
  players,
}: any) => (
  <>
    <View style={styles.upperBlock}>
      <Avatar refer={aref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
    </View>
    <View style={styles.centerBlock}>
      <Avatar refer={a3ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
      <Animated.View ref={vsRef}>
        <Image source={require('../../assets/vs.png')} style={styles.vsPng} />
      </Animated.View>
      <Avatar refer={a4ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
    </View>
    <View style={styles.bottomBlock}>
      <Avatar refer={a5ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
    </View>
  </>
);

const RenderFiveAvatars = ({
  aref,
  a3ref,
  a4ref,
  vsRef,
  a5ref,
  a2ref,
  AVATAR_STYLE,
  players,
}: any) => (
  <>
    <View style={styles.upperBlock}>
      <Avatar refer={aref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
      <Avatar refer={a2ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
    </View>
    <View style={styles.centerBlock}>
      <Avatar refer={a3ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
      <Animated.View ref={vsRef}>
        <Image source={require('../../assets/vs.png')} style={styles.vsPng} />
      </Animated.View>
      <Avatar refer={a4ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
    </View>
    <View style={styles.bottomBlock}>
      <Avatar refer={a5ref} player={players[1]} AVATAR_STYLE={AVATAR_STYLE} />
    </View>
  </>
);

const CoinAnimation = ({navigation, winningAmount, players}: any) => {
  const insets = useSafeAreaInsets();
  const {height} = useWindowDimensions();
  const WINDOW_HEIGHT = height - 60; // calculate the height of the coinanimation component negating the height of the headercomponent

  const NO_OF_AVATARS: number = players.length;
  const AVATAR_SIZE = 120 - NO_OF_AVATARS * 10;
  const AVATAR_STYLE = {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
  };

  const statusBarHeight = insets.top; //insets.top;

  const aref = useAnimatedRef();
  const a2ref = useAnimatedRef();
  const a3ref = useAnimatedRef();
  const a4ref = useAnimatedRef();
  const a5ref = useAnimatedRef();
  const vsRef = useAnimatedRef();
  const bref = useAnimatedRef();

  const [alreadyRender, setAlreadyRender] = useState<boolean>(false);
  const opacityCoin = alreadyRender ? 1 : 0;

  const [pointA, setPointA] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });

  useEffect(() => {
    if (!alreadyRender) {
      return;
    }
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

  const coinMove = () => {
    setPointA(coinAnimation.value);
  };

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
              destinationCords.value.height,
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
              destinationCords.value.height,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation.value.width),
        height: withSpring(coinAnimation.value.height),
      },
      initialValues: {
        originX: coinAnimation.value.pageX,
        originY: coinAnimation.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation2.value.width),
        height: withSpring(coinAnimation2.value.height),
      },
      initialValues: {
        originX: coinAnimation2.value.pageX,
        originY: coinAnimation2.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation2.value.width),
        height: withSpring(coinAnimation2.value.height),
      },
      initialValues: {
        originX: coinAnimation2.value.pageX,
        originY: coinAnimation2.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation2.value.width),
        height: withSpring(coinAnimation2.value.height),
      },
      initialValues: {
        originX: coinAnimation2.value.pageX,
        originY: coinAnimation2.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation3.value.width),
        height: withSpring(coinAnimation3.value.height),
      },
      initialValues: {
        originX: coinAnimation3.value.pageX,
        originY: coinAnimation3.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation3.value.width),
        height: withSpring(coinAnimation3.value.height),
      },
      initialValues: {
        originX: coinAnimation3.value.pageX,
        originY: coinAnimation3.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation3.value.width),
        height: withSpring(coinAnimation3.value.height),
      },
      initialValues: {
        originX: coinAnimation3.value.pageX,
        originY: coinAnimation3.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation4.value.width),
        height: withSpring(coinAnimation4.value.height),
      },
      initialValues: {
        originX: coinAnimation4.value.pageX,
        originY: coinAnimation4.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation4.value.width),
        height: withSpring(coinAnimation4.value.height),
      },
      initialValues: {
        originX: coinAnimation4.value.pageX,
        originY: coinAnimation4.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation4.value.width),
        height: withSpring(coinAnimation4.value.height),
      },
      initialValues: {
        originX: coinAnimation4.value.pageX,
        originY: coinAnimation4.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation5.value.width),
        height: withSpring(coinAnimation5.value.height),
      },
      initialValues: {
        originX: coinAnimation5.value.pageX,
        originY: coinAnimation5.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation5.value.width),
        height: withSpring(coinAnimation5.value.height),
      },
      initialValues: {
        originX: coinAnimation5.value.pageX,
        originY: coinAnimation5.value.pageY - statusBarHeight - 50,
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
              destinationCords.value.height,
            {duration: 1000},
          ),
        ),
        width: withSpring(coinAnimation5.value.width),
        height: withSpring(coinAnimation5.value.height),
      },
      initialValues: {
        originX: coinAnimation5.value.pageX,
        originY: coinAnimation5.value.pageY - statusBarHeight - 50,
        width: values.currentWidth,
        height: values.currentHeight,
      },
    };
  }

  return (
    <SafeAreaView>
      {/* <HeaderWithBack title={'HELLO WORLD'} navigation={navigation} /> */}
      <View
        style={{
          // height: '100%',
          height: WINDOW_HEIGHT,
          alignItems: 'center',
          backgroundColor: 'black',
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
            <Text style={footerStyles.heading}>Give your best shot!</Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 4,
              width: '100%',
            }}
            onLayout={() => setAlreadyRender(true)}>
            {NO_OF_AVATARS === 2 && (
              <RenderTwoAvatars
                a3ref={a3ref}
                a4ref={a4ref}
                vsRef={vsRef}
                players={players}
                AVATAR_STYLE={AVATAR_STYLE}
              />
            )}
            {NO_OF_AVATARS === 3 && (
              <RenderThreeAvatars
                aref={aref}
                a3ref={a3ref}
                a4ref={a4ref}
                vsRef={vsRef}
                players={players}
                AVATAR_STYLE={AVATAR_STYLE}
              />
            )}
            {NO_OF_AVATARS === 4 && (
              <RenderFourAvatars
                aref={aref}
                a3ref={a3ref}
                a4ref={a4ref}
                vsRef={vsRef}
                a5ref={a5ref}
                players={players}
                AVATAR_STYLE={AVATAR_STYLE}
              />
            )}
            {NO_OF_AVATARS === 5 && (
              <RenderFiveAvatars
                aref={aref}
                a3ref={a3ref}
                a4ref={a4ref}
                vsRef={vsRef}
                a5ref={a5ref}
                a2ref={a2ref}
                players={players}
                AVATAR_STYLE={AVATAR_STYLE}
              />
            )}
          </View>

          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Animated.View ref={bref} style={footerStyles.winnerCard}>
              <Text style={footerStyles.winnerText}>WINNER GETS</Text>
              {/* <GradientText style={footerStyles.amount}>
              <RupeeIcon size={17} /> {winningAmount}
            </GradientText> */}
              <GradientText
                colors={['#FEA858', '#FF4D00']}
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 18,
                }}>
                80.00
              </GradientText>
            </Animated.View>
          </View>
        </View>
        {NO_OF_AVATARS === 5 && (
          <>
            {/* First avatar coins */}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
                source={require('../../assets/coinNew.png')}
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
  // profile: {
  //   width: AVATAR_SIZE,
  //   height: AVATAR_SIZE,
  // },
  centerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '40%',
    alignItems: 'center',
  },
  upperBlock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
  bottomBlock: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vsPng: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CoinAnimation;
