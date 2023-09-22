import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Slider from '../Slider';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const sliderGradientWidth: number = 244;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['transparent', '#ff8100', 'transparent']}
        style={{
          borderRadius: 16,
          width: sliderGradientWidth,
          zIndex: 999,
          height: 30,
          // marginBottom: !isSmallDevice ? 16 : 0,
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
          <View style={styles.slider_container}>
            <Slider
              style={styles.slider} // Added style to the slider to have different styles for android and ios
              // disabled={spinning ? true : false}
              minimumValue={0}
              value={0}
              maximumValue={100}
              step={10} // Added step to make the slider move in steps of boxHeight
              // onValueChange={value => {
              //   playSound();
              //   // add a haptic feedback
              //   translateY.value = withSpring(-value, {
              //     damping: 20,
              //     stiffness: 90,
              //     mass: 1,
              //   });
              //   setSliderValue(value);
              // }}
              // onSlidingComplete={value => {
              //   setActualSliderValue(value);
              // }}
              // thumbStyle
              minimumTrackTintColor="transparent" // Added minimumTrackTintColor to make the slider transparent
              maximumTrackTintColor="transparent" // Added maximumTrackTintColor to make the slider transparent
              thumbImage={require('../assets/finalThumbImage.png')}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider_container: {
    //Changes made here for discret slider 2) Added slider_container to have seperate css for android and ios
    // ...Platform.select({
    //   android: {
    //     transform: [{scaleX: 3}],
    //   },
    // }),
  },
  slider: {
    //Changes made here for discret slider 3) Added slider to have seperate css for android and ios
    ...Platform.select({
      android: {
        // flex: 0,
        width: 100,
        height: 30,
      },
      ios: {
        width: 600,
        height: 20,
      },
    }),
  },
});

export default App;
