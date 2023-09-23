import * as React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  StatusBar,
  Platform,
  Image,
  SafeAreaView,
} from 'react-native';
import {useRef, useEffect, useState} from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Animated, {
  SharedTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomDivider from '../Header/BottomDivider';
import LottieView from 'lottie-react-native';

import ProfileSettings from './ProfileSettings';
import GameStack from './GameStack';
import styles from '../components/Accordion/styles';
// import HowtoScreen from './HowtoScreen';
import SkeletonLoader from './Skeleton/TournamentSkeletonLoader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type StackParamList = {
  Profiles: undefined;
  Home: {tag: Tag};
  ProfileSettings: undefined;
};

const springOptions = {
  damping: 19,
};

// const transition = SharedTransition.custom(values => {
//   'worklet';
//   return {
//     width: withSpring(values.targetWidth, springOptions),
//     height: withSpring(values.targetHeight, springOptions),
//     originX: withSpring(values.targetOriginX, springOptions),
//     originY: withSpring(values.targetOriginY, springOptions),
//   };
// });

const Stack = createNativeStackNavigator<StackParamList>();

const profiles = {
  dog: {
    image: require('../assets/logo.png'),
    title: 'Maria',
  },
} as const;

type Tag = keyof typeof profiles;

function ProfilesScreen({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Profiles'>) {
  const [animationDone, setAnimationDone] = useState<boolean>(false);
  const goToDetails = (tag: Tag) => {
    navigation.navigate('Home', {tag});
  };
  // const animationRef = useRef<LottieView>(null);
  // useEffect(() => {
  //   animationRef.current?.play();
  // }, []);
  const gifDuration = 4500; // Duration of the GIF in milliseconds

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationDone(!animationDone);
      setTimeout(() => goToDetails('dog' as Tag), 500);
    }, gifDuration);

    return () => {
      clearTimeout(timeout); // Clear the timeout when the component unmounts
    };
  }, []);

  return (
    <SafeAreaView style={profilesStyles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#090909" />

      <View style={commonStyles.row}>
        <Pressable onPress={() => {}} style={profilesStyles.profileWrapper}>
          {!animationDone ? (
            // <LottieView
            //   source={require('../assets/gdAnimation.json')}
            //   // autoPlay
            //   loop={false}
            //   ref={animationRef}
            //   onAnimationFinish={() => {
            //     setAnimationDone(true);
            //     setTimeout(() => goToDetails('dog' as Tag), 500);
            //   }}
            //   style={{
            //     width: '100%',
            //     height: '100%',
            // width: windowWidth,
            // height: windowHeight,
            //   }}

            <Image
              source={require('../assets/GAMEDUELSLOGO.gif')}
              style={{
                width: windowWidth,
                height: windowHeight,
              }}
              resizeMode="contain"
              // onLoadEnd={() => setAnimationDone(!animationDone)}
            />
          ) : (
            <Animated.Image
              source={profiles['dog' as Tag].image}
              style={profilesStyles.profile}
              resizeMode="contain"
              sharedTransitionTag={'dog'}
              sharedTransitionStyle={transition}
            />
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const profilesStyles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'ios' ? 100 : 25,
    backgroundColor: '#090909',
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    opacity: 0.6,
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#f0fdf4',
    marginBottom: 20,
  },
  profileWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  profile: {
    // height: '100%',
    // width: '100%',
    height: 55,
    width: 55,
    marginBottom: 8,
  },
  profileLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#f0fdf4',
  },
  gdLogo: {
    width: 156,
    height: 18,
    transform: [
      {
        translateX: -100,
      },
    ],
  },
});

export function HeaderContainer() {
  const [isInitialLoad, setInitialLoad] = useState(false);

  const positionX = useSharedValue(-156);
  const handlePress = () => {
    positionX.value = withTiming(positionX.value + 156, {
      duration: 1000,
    });
  };
  useEffect(() => {
    setTimeout(handlePress, 500);
  }, [isInitialLoad]);

  return (
    <View style={{justifyContent: 'center'}}>
      <View style={homeStyles.headerContainer}>
        <Pressable style={homeStyles.pressable}>
          <View
            style={{
              backgroundColor: '#090909',
              zIndex: 9999,
              paddingLeft: 16,
            }}>
            <Animated.Image
              source={profiles['dog' as Tag].image}
              style={homeStyles.profile}
              resizeMode="contain"
            />
          </View>
          <Animated.Image
            source={require('../assets/gdtext.png')}
            style={[homeStyles.gdLogo]}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable>
          <Image
            source={require('../assets/profileimage.png')}
            style={{
              width: 34,
              height: 34,
            }}
          />
        </Pressable>
      </View>
      <BottomDivider />
    </View>
  );
}

export function HomeScreen({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Home'>) {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  });

  return (
    <View
      style={[
        homeStyles.container,
        {
          ...Platform.select({
            ios: {
              paddingTop: statusBarHeight,
            },
          }),
        },
      ]}>
      <StatusBar barStyle={'light-content'} />
      <HeaderContainer />

      {!isLoading ? <GameStack navigation={navigation} /> : <SkeletonLoader />}
    </View>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
  },
  gdLogo: {
    width: 156,
    height: 18,
    // transform: [
    //   {
    //     translateX: -156,
    //   },
    // ],
  },

  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingRight: 16,
  },
  header: {
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
    color: '#1e293b',
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    width: 35,
    height: 35,
    marginRight: 5,
  },
  image: {
    height: 200,
    width: 150,
    marginBottom: 8,
    borderRadius: 10,
  },
  imageLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#1e293b',
  },
  title: {
    fontSize: 40,
    flex: 1,
    color: '#1e293b',
    fontFamily: 'Poppins-Medium',
  },
  subTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#334155',
    marginBottom: 15,
    marginLeft: 20,
  },
  margin: {
    marginLeft: 10,
  },
  marginHorizontal: {
    marginHorizontal: 10,
  },
});

export default function ProfilesExample() {
  // hide header of parent stack
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    if (Platform.OS !== 'web') {
      navigation.setOptions({headerShown: false});
    }
  }, [navigation]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profiles" component={ProfilesScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
    </Stack.Navigator>
  );
}

const commonStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 25,
  },
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gdLogo: {
    width: 156,
    height: 18,
    transform: [
      {
        translateX: -100,
      },
    ],
  },
});
