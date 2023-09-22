import React, {useEffect, useRef} from 'react';
import {
  View,
  StatusBar,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import BlackCard from '../components/BlackCard';
import {useHeaderHeight} from '@react-navigation/elements';
import Slider from '@react-native-community/slider';

const data = Array.from({length: 31}, (_, index) => ({
  id: index + 1,
  title: String(index + 1),
}));

const FlexCard = () => (
  <View
    style={{
      width: '90%',
      backgroundColor: 'white',
      height: 100,
      marginBottom: 10,
    }}
  />
);

const ScreenVideo = ({navigation}) => {
  const headerHeight = useHeaderHeight();
  const yOffset = useRef(new Animated.Value(0)).current;

  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  console.log(headerHeight);

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Left.png')} />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/smallLogo.png')} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => console.warn('hellow ')}>
          <Image source={require('../assets/Question.png')} />
        </TouchableOpacity>
      ),

      headerStyle: {
        opacity: headerOpacity,
      },
      headerBackground: () => (
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'red',
            opacity: headerOpacity,
          }}
        />
      ),
      headerTransparent: true,
    });
  }, [headerOpacity, navigation]);

  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor="transparent"
      />

      <Animated.ScrollView
        style={{
          backgroundColor: '#0c0c0c',
          position: 'relative',
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: yOffset}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <LinearGradient
          colors={['#000', 'transparent']}
          style={{
            position: 'absolute',
            top: 0,
            width: width,
            height: headerHeight,
            zIndex: 999,
          }}
        />
        {/* <Image
          source={require('../assets/lineargradient.png')}
          style={{
            position: 'absolute',
            top: 0,
            width: width,
            height: headerHeight,
            zIndex: 999,
          }}
        /> */}
        <View
          style={{
            width: width,
            height: 350,
            position: 'relative',
          }}>
          <Video
            source={require('../assets/video.mp4')} // the video file
            paused={false} // make it start
            style={{
              height: '100%',
              width: '110%',
              left: -10,
            }} // any style you want
            repeat={true} // make it a loop
            resizeMode={'cover'} // important stuff
          />
          <LinearGradient
            colors={['transparent', '#0c0c0c']}
            style={{
              position: 'absolute',
              bottom: 0,
              width: width,
              height: 300,
            }}
          />
        </View>

        <View
          style={{
            top: -40,
            alignItems: 'center',
            gap: 20,
            width: width,
          }}>
          <BlackCard />
          {data.map(item => (
            <FlexCard key={item.id} />
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default ScreenVideo;
