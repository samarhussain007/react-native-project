/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated as DefaultAnimated,
  Image,
  Easing,
  Platform,
  StatusBar,
  useWindowDimensions, //Changes for discret slider 1) import Platform to have seperate css for android and ios
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '../Slider';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import {SharedValue} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper';
import Sound from 'react-native-sound';

interface Item {
  tier: string;
  icon: any;
  color: string;
  category: string;
  value?: string;
}

interface DoorData {
  spinned: boolean;
  boxes: Item[];
  translateY: DefaultAnimated.Value;
}

const items = [
  {
    tier: 'bronze',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
    value: '25% Off',
  },
  {
    tier: 'noob',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '25% Off',
  },
  {
    tier: 'silver',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '25% Off',
  },
  {
    tier: 'gold',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '50% Off',
  },
  {
    tier: 'plat',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
  },
  {
    tier: 'diamond',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '75% Off',
  },
  {
    tier: 'ascendent',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '75% Off',
  },
  {
    tier: 'radiant',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '75% Off',
  },
  {
    tier: 'bronze',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
    value: '25% Off',
  },
  {
    tier: 'noob',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '25% Off',
  },
  {
    tier: 'silver',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '25% Off',
  },
  {
    tier: 'gold',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '50% Off',
  },
  {
    tier: 'plat',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
  },
  {
    tier: 'diamond',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '75% Off',
  },
  {
    tier: 'ascendent',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '75% Off',
  },
  {
    tier: 'radiant',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '75% Off',
  },
  {
    tier: 'bronze',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
    value: '25% Off',
  },
  {
    tier: 'noob',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '25% Off',
  },
  {
    tier: 'silver',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '25% Off',
  },
  {
    tier: 'gold',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '50% Off',
  },
  {
    tier: 'plat',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
  },
  {
    tier: 'diamond',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '75% Off',
  },
  {
    tier: 'ascendent',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '75% Off',
  },
  {
    tier: 'radiant',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '75% Off',
  },
  {
    tier: 'bronze',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
    value: '25% Off',
  },
  {
    tier: 'noob',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '25% Off',
  },
  {
    tier: 'silver',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '25% Off',
  },
  {
    tier: 'gold',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '50% Off',
  },
  {
    tier: 'plat',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
  },
  {
    tier: 'diamond',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '75% Off',
  },
  {
    tier: 'ascendent',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '75% Off',
  },
  {
    tier: 'radiant',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '75% Off',
  },
];

const initItems = [
  {
    tier: 'bronze',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
    value: '25% Off',
  },
  {
    tier: 'noob',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '25% Off',
  },
  {
    tier: 'silver',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '25% Off',
  },
  {
    tier: 'gold',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '50% Off',
  },
  {
    tier: 'plat',
    icon: require('../assets/VoucherIcon.png'),
    color: '#0c0c0c',
    category: 'EXCLUSIVE COUPON',
  },
  {
    tier: 'diamond',
    icon: require('../assets/CashIcon.png'),
    color: '#0c0c0c',
    category: 'INSTANT BONUS CASH',
    value: '75% Off',
  },
  {
    tier: 'ascendent',
    icon: require('../assets/EntryIcon.png'),
    color: '#0c0c0c',
    category: 'SPECIAL TOURNAMENT ENTRY',
    value: '75% Off',
  },
  {
    tier: 'radiant',
    icon: require('../assets/BetterLuckIcon.png'),
    color: '#0c0c0c',
    category: 'BETTER LUCK NEXT TIME',
    value: '75% Off',
  },
];

function shuffle(arr: Item[]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

function indexplacedinposition(arr: Array<Item>, tier: string) {
  // filter out the element that is in the index position
  const element = arr.filter(item => item.tier === tier);

  // change the element in the second position of array and return the updated Array
  const updatedArray = arr.map((item, i) => {
    if (i === 1) {
      return element[0];
    }
    return item;
  });
  return updatedArray;
}

const widthOfOuterGrill: number = 398;
const sliderGradientWidth: number = 244;
const boxHeight: number = 130;
let SMALLEST_DEVICE_SIZE = 670; // added small Height screen threshold (CHANGE MADE HERE)

// const {width, height} = useWindowDimensions();

function Spinner() {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [doors, setDoors] = useState<Array<DoorData>>([]);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [actualSliderValue, setActualSliderValue] = useState<number>(0);
  const {width, height} = useWindowDimensions();
  const isSmallDevice = height < SMALLEST_DEVICE_SIZE; //true if the height is lesser than the smallest device (CHANGE MADE HERE)
  //create a default shared value of 0
  const translateY: SharedValue<number> = useSharedValue(0);
  // let sound: any;
  useEffect(() => {
    init();
  }, []);

  // Sound.setCategory('Playback');
  // sound = new Sound('sound1.mp3', Sound.MAIN_BUNDLE, error => {
  //   if (error) {
  //     console.log('Failed to load the sound', error);
  //     return;
  //   }
  //   // console.log('Duration in seconds : ' + sound.getDuration());x
  // });
  // const playSound = () => {
  //   sound.play(success => {
  //     if (success) {
  //       console.log('successfully finished playing');
  //     } else {
  //       console.log('playback failed due to audio decoding errors');
  //     }
  //   });
  //   //  SET THE VOLUME
  //   sound.setVolume(1);
  // };

  const updatedArray: Item[] = indexplacedinposition(items, 'gold');

  const init = (): void => {
    const doorData = Array.from({length: 1}).map(() => ({
      spinned: false,
      boxes: shuffle(initItems),
      translateY: new DefaultAnimated.Value(0), // Initial translateY value set to 0
    }));
    setDoors(doorData);
  };

  const spin = async (): Promise<void> => {
    if (sliderValue > 0) {
      setActualSliderValue(0);
      translateY.value = 0;
    }

    setSpinning(true);

    const updatedDoors = doors.map(door => ({
      ...door,
      spinned: true,
      boxes: updatedArray,
    }));
    setDoors(updatedDoors);

    const animations = updatedDoors.map(door =>
      DefaultAnimated.timing(door.translateY, {
        toValue: -boxHeight * (door.boxes.length - 3), // Translate to the correct position
        duration: 6000,
        useNativeDriver: true,
        easing: Easing.bezier(0.2, 0.6, 0.6, 1),
      }),
    );

    DefaultAnimated.sequence(animations).start(async (): Promise<void> => {
      await new Promise<void>(resolve => setTimeout(resolve, 5000)); // Wait for animation sequence to complete and then reset
      init();
      setSpinning(false);
    });
  };

  const animatedSliderStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <View
        style={[
          styles.slotContainer,
          {flex: isSmallDevice ? 4 : 0, marginBottom: !isSmallDevice ? 35 : 0}, //changes made here, added flex for responsivity (CHANGE MADE HERE)
        ]}>
        <View style={styles.doors}>
          <Image
            source={require('../assets/grilleffect.png')}
            style={styles.innerGrill}
          />
          <LottieView
            source={require('../assets/spin weel grill 05 F new.json')}
            autoPlay
            loop
            style={styles.gradientGlow}
          />
          {doors.map(({boxes, translateY}, index) => (
            <Animated.View key={index} style={animatedSliderStyles}>
              <DefaultAnimated.View
                style={[styles.boxes, {transform: [{translateY}]}]}>
                {boxes.map(box => (
                  <View style={styles.box}>
                    <Image style={styles.Icon} source={box.icon} />
                    <View style={styles.textContainer}>
                      <Text style={styles.category}>{box.category}</Text>
                    </View>
                  </View>
                ))}
              </DefaultAnimated.View>
            </Animated.View>
          ))}
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          flex: isSmallDevice ? 1 : 0, //changes made here (CHANGE MADE HERE)
          justifyContent: isSmallDevice ? 'space-around' : 'center', //changes made here (CHANGE MADE HERE)
        }}>
        <LinearGradient
          colors={['transparent', '#ff8100', 'transparent']}
          style={{
            borderRadius: 16,
            width: sliderGradientWidth,
            zIndex: 999,
            height: 30,
            marginBottom: !isSmallDevice ? 16 : 0, //(CHANGE MADE HERE)
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0c0c0c',
              borderRadius: 16,
              width: '99%',
              margin: 1,
              height: 28,
              overflow: 'hidden',
            }}>
            <LinearGradient
              colors={['#0c0c0c', 'transparent']}
              style={{
                position: 'absolute',
                left: 0,
                width: '10%',
                height: '100%',
                zIndex: 999,
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            />
            <LinearGradient
              colors={['transparent', '#0c0c0c']}
              style={{
                position: 'absolute',
                right: 0,
                width: '10%',
                height: '100%',
                zIndex: 999,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            />
            {/* Added Slider container to scale the slider for the android devices[Platform] */}
            <Slider
              style={styles.slider} // Added style to the slider to have different styles for android and ios
              disabled={spinning ? true : false}
              minimumValue={0}
              value={actualSliderValue}
              maximumValue={(initItems.length - 3) * boxHeight}
              step={boxHeight} // Added step to make the slider move in steps of boxHeight
              onValueChange={value => {
                translateY.value = withSpring(-value, {
                  damping: 20,
                  stiffness: 90,
                  mass: 1,
                });
                setSliderValue(value);
              }}
              onSlidingComplete={value => {
                setActualSliderValue(value);
              }}
              // thumbStyle
              minimumTrackTintColor="transparent" // Added minimumTrackTintColor to make the slider transparent
              maximumTrackTintColor="transparent" // Added maximumTrackTintColor to make the slider transparent
              thumbImage={require('../assets/finalThumbImage.png')}
            />
          </View>
        </LinearGradient>

        <Text
          // marginBottom added to non small devices (CHANGE MADE HERE)
          style={[styles.scrollText, {marginBottom: !isSmallDevice ? 42 : 0}]}>
          Scroll to see what you could win!
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={spin}
            disabled={spinning}>
            <Text style={styles.buttonText}>SPIN NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0c0c',
  },
  slotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    width: '100%',
  },

  doors: {
    flexDirection: 'row',
    height: widthOfOuterGrill,
    width: 273,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },

  boxes: {
    flexDirection: 'column-reverse',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 130,
  },
  boxText: {
    fontSize: 30,
  },
  buttons: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    width: 154,
    height: 42,
    backgroundColor: '#ff8100',
    borderRadius: 29,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#fff',
  },
  value: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  gradientMask: {
    width: '150%',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },

  Icon: {fontSize: 30, color: 'white', marginBottom: 10},
  scrollText: {
    fontSize: 12,
    color: '#484848',
  },

  // Black Linear gradient
  blackLinearGradient: {
    position: 'absolute',
    width: '70%',
    height: '30%',
    zIndex: 999,
  },

  // Gradient Glow moving around
  gradientGlow: {
    position: 'absolute',
    height: widthOfOuterGrill + 96, //width of the outer grill + padding of the whole lottie
    zIndex: 1000,
  },
  innerGrill: {
    position: 'absolute',
    width: 272,
    zIndex: 1000,
  },

  slider: {
    //changes made below (CHANGE MADE HERE)
    width: 220,
    height: 20,
  },
});

export default Spinner;
