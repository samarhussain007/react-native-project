import {
  View,
  Text,
  FlatList,
  Platform,
  Image,
  Dimensions,
  Animated,
  Pressable,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.7 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 3;

const HomeScreen = () => {
  const [screen1, screen2, screen3] = [
    require('../../assets/screen1.png'),
    require('../../assets/screen2.png'),
    require('../../assets/screen3.png'),
  ];

  const screens = [
    {key: 'empty-left'},
    screen1,
    screen2,
    screen3,
    {key: 'empty-right'},
  ];
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={screens}
        renderItem={({item, index}) => {
          if (item.key === 'empty-left' || item.key === 'empty-right') {
            return (
              <View
                style={{
                  width: EMPTY_ITEM_SIZE,
                  height: '100%',
                  backgroundColor: 'red',
                }}
              />
            );
          }
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={{
                marginHorizontal: SPACING,
                // padding: SPACING * 2,
                alignItems: 'center',
                transform: [{translateY}],
              }}>
              <Image
                source={item}
                resizeMode="contain"
                style={{
                  width: ITEM_SIZE,
                }}
              />
            </Animated.View>
          );
        }}
        snapToInterval={ITEM_SIZE}
        keyExtractor={item => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        snapToAlignment="start"
        contentContainerStyle={{alignItems: 'center'}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />
      {/* Content Bottom */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: height * 0.35,
          alignItems: 'center',
          paddingBottom: 20,
          justifyContent: 'flex-end',
        }}>
        <LinearGradient
          colors={[
            'transparent',
            '#090909',
            '#090909',
            '#090909',
            '#090909',
            '#090909',
            '#090909',
            '#090909',
          ]}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            bottom: 0,
            alignItems: 'center',
          }}
        />
        <View
          style={{
            width: '90%',
            marginBottom: 20,
          }}>
          <Text style={[styles.boldText, {marginBottom: 16}]}>
            Unlock the Power of{'\n'} Earnings. Play and Earn!
          </Text>
          <Text style={styles.regularText}>
            Play your way to earnings! Join in, have fun, and see your income
            rise. Ready to EARN?
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            justifyContent: 'center',
          }}>
          {/* Primary Button */}
          <Pressable
            style={{
              borderRadius: 30,
              overflow: 'hidden',
              height: 48,
              backgroundColor: 'red',
              marginBottom: 16,
            }}>
            <LinearGradient
              colors={['#F2A14F', '#FF8100']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.mediumText}>Sign up & Get Bonus $500</Text>
            </LinearGradient>
          </Pressable>
          {/* SecondaryButton */}
          <Pressable>
            <Text style={[styles.regularText]}>
              Already an user{' '}
              <Text
                style={[
                  styles.mediumText,
                  {
                    fontFamily: 'Poppins-medium',
                    color: '#ff8100',
                    fontSize: 12,
                  },
                ]}>
                Login
              </Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
