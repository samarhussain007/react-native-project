import React from 'react';
import {
  Animated,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0c0c',
    width: 343,
    height: 216,
    borderRadius: 16,
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    paddingHorizontal: 36,
    textAlign: 'center',
  },
  innerContainer: {
    width: '99%',
    height: '99%',
    margin: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 16,
  },
  button: {
    width: 319,
    height: 40,
    backgroundColor: '#ff8100',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  gradientMask: {
    width: '150%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

const BlackCard = () => {
  const START_DEFAULT = {x: 1, y: 1};
  const END_DEFAULT = {x: 0, y: 0};
  const START_HORIZONTAL = {x: 0, y: 0.5};
  const END_HORIZONTAL = {x: 1, y: 0.5};
  const GRADIENT_COLORS = [
    '#000',
    '#000',
    '#000',
    '#000',
    '#000',
    '#ff8100',
    '#000',
  ];
  const GRADIENT_LOCATIONS = [0, 0.2, 0.4, 0.6, 0.8, 1, 1];
  const MOVEMENT = GRADIENT_LOCATIONS[1] / 20;
  const INTERVAL = 30;

  let timeout = undefined;

  let [gradientOptions, setGradientOptions] = React.useState({
    colors: GRADIENT_COLORS,
    locations: GRADIENT_LOCATIONS,
    start: START_DEFAULT,
    end: END_DEFAULT,
  });
  const gradientOptionsRef = React.useRef(gradientOptions);
  gradientOptionsRef.current = gradientOptions;

  let infiniteRainbow = () => {
    if (gradientOptionsRef.current.locations[1] - MOVEMENT <= 0) {
      // Shift colours and reset locations
      let gradientColors = [...gradientOptionsRef.current.colors];
      gradientColors.shift();
      gradientColors.push(gradientColors[1]);

      setGradientOptions({
        colors: gradientColors,
        locations: GRADIENT_LOCATIONS,
        start: START_DEFAULT,
        end: END_DEFAULT,
      });
    } else {
      let updatedLocations = gradientOptionsRef.current.locations.map(
        (item, index) => {
          if (index === gradientOptionsRef.current.locations.length - 1) {
            return 1;
          }
          console.log(parseFloat(Math.max(0, item - MOVEMENT).toFixed(2)));

          return parseFloat(Math.max(0, item - MOVEMENT).toFixed(2));
        },
      );

      setGradientOptions({
        colors: [...gradientOptionsRef.current.colors],
        locations: updatedLocations,
        start: START_DEFAULT,
        end: END_DEFAULT,
      });
    }

    timeout = setTimeout(infiniteRainbow, INTERVAL);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientMask}
        colors={gradientOptions.colors}
        locations={gradientOptions.locations}
        start={gradientOptions.start}
        end={gradientOptions.end}
      />
      <View style={styles.innerContainer}>
        <Image source={require('../assets/Blitz.png')} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => infiniteRainbow()}>
          <Text>PLAY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlackCard;
