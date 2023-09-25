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
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Indicator from './Indicator';

const {width, height} = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.7 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [screen1, screen2, screen3] = [
    require('../../assets/screen1.png'),
    require('../../assets/screen2.png'),
    require('../../assets/screen3.png'),
  ];

  const screens = [
    {key: 'empty-left'},
    {key: 'screen1', screen: screen1},
    {key: 'screen2', screen: screen2},
    {key: 'screen3', screen: screen3},
    {key: 'empty-right'},
  ];
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View
        style={{
          flex: 1,
          height: '100%',
          // backgroundColor: 'red',
          alignItems: 'center',
          // justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'black',
            marginTop: '10%',
          }}>
          <Image
            source={require('../../assets/Gameduels.png')}
            style={{width: 174}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 6,
              letterSpacing: 0.72,
              color: '#ffffff',
              opacity: 0.6,
            }}>
            INDIA’S NEWEST MOBILE GAMING DESTINATION
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: 'green',
            flex: 4,
          }}>
          <FlatList
            data={screens}
            renderItem={({item, index}) => {
              if (item.key === 'empty-left' || item.key === 'empty-right') {
                return (
                  <View
                    style={{
                      width: EMPTY_ITEM_SIZE,
                      // height: '100%',
                      justifyContent: 'center',
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
                    top: -50,
                    // padding: SPACING * 2,
                    // height: '100%',
                    height: height * 0.7,

                    // backgroundColor: 'blue',
                    alignItems: 'center',
                    transform: [{translateY}],
                  }}>
                  <Image
                    source={item.screen}
                    resizeMode="contain"
                    style={{
                      width: ITEM_SIZE,
                      height: '100%',
                      // backgroundColor: 'red',
                    }}
                  />
                </Animated.View>
              );
            }}
            snapToInterval={ITEM_SIZE + SPACING * 2}
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
            onViewableItemsChanged={viewableItemsChanged}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: height * 0.4,
            alignItems: 'center',
            // paddingBottom: 28,
            justifyContent: 'space-evenly',
          }}>
          <LinearGradient
            colors={[
              'rgba(9, 9, 9, 0)',
              'rgba(9, 9, 9, 1)',
              'rgba(9, 9, 9, 1)',
              'rgba(9, 9, 9, 1)',
              'rgba(9, 9, 9, 1)',
            ]}
            style={{
              position: 'absolute',
              width: '100%',
              height: '120%',
              bottom: 0,
              alignItems: 'center',
            }}
          />
          <View
            style={{
              width: '90%',
              // marginBottom: 26,
            }}>
            <Text style={[styles.boldText, {marginBottom: 16}]}>
              Unlock the Power of{'\n'} Earnings. Play and Earn!
            </Text>
            <Text style={styles.regularText}>
              Play your way to earnings! Join in, have fun, and {'\n'}see your
              income rise. Ready to EARN?
            </Text>
          </View>

          <Indicator percentage={(currentIndex + 1) * (100 / 3)} />

          <View
            style={{
              width: '90%',
              justifyContent: 'center',
            }}>
            <Pressable
              style={{
                borderRadius: 30,
                overflow: 'hidden',
                height: 48,
                backgroundColor: 'red',
                marginBottom: 16,
              }}>
              <LinearGradient
                colors={['#F2A14F', '#FF8100', '#FF8100']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.mediumText}>Sign up & Get Bonus $500</Text>
              </LinearGradient>
            </Pressable>

            <Pressable>
              <Text style={[styles.regularText]}>
                Already an user{' '}
                <Text
                  style={[
                    {
                      fontFamily: 'Poppins-Bold',
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
    </View>
  );
};

export default HomeScreen;
