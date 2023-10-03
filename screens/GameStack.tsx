/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {HeaderContainer} from './SharedTransition';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {quoteRandomizer} from '../utils/quoteRandomizer';
import ConfettiCannon from 'react-native-confetti-cannon';
import GradientText from '../components/GradientMask';
import Pacman from './PacmanPaginator';
import React, {useState, useRef, useCallback, useMemo} from 'react';
import {LogBox} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';
import IndiaMapBanner from './IndiaMapBanner';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const {width} = Dimensions.get('window');

const gapRow = 38;
const gapColumn = 17;
const padding = 17;
const itemPerRow = 3;
const bannerWidth = width * 0.9;
const SPACING = 10;
const totalGapSize = (itemPerRow - 1) * gapColumn;
const totalpadding = (itemPerRow - 1) * padding;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize - totalpadding) / itemPerRow;
const childHeight = childWidth;
const styles = StyleSheet.create({
  GameIconsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    rowGap: gapRow,
    padding: padding,
    columnGap: gapColumn,
    marginBottom: 24,
  },
});
const items = [
  {
    id: 1,
    name: 'Golf Ace',
    htData: [
      {
        id: '1',
        image: require('../assets/GolfAceStaticScreen.png'),
        modalContent: {
          image: require('../assets/GolfAce1Icon.png'),
          header: 'TEE OFF TO VICTORY',
          contentDescription: (
            <Text>
              The ball must be{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                aimed
              </Text>{' '}
              and potted into the hole. After then, a new landscape will spawn,
              allowing you to re-aim for the pot.
            </Text>
          ),
        },
      },
      {
        id: '2',
        image: require('../assets/GolfAceStaticScreen.png'),
        modalContent: {
          image: require('../assets/GolfAce1Icon.png'),
          header: 'TAP, HOLD, POT!',
          contentDescription: (
            <Text>
              <Text
                style={{
                  color: '#ff8100',
                }}>
                Tap, hold, drag
              </Text>{' '}
              and aim to set the trajectory and pot the ball.
            </Text>
          ),
        },
      },
      {
        id: '4',
        image: require('../assets/GolfAceStaticScreen.png'),
        modalContent: {
          image: require('../assets/GolfAce1Icon.png'),
          header: 'POT WITH PRECISION',
          contentDescription: (
            <Text>
              Pot the ball in the first try to score a bonus point. Score as
              much as possible to break previous records.
            </Text>
          ),
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Paddle Power',
    htData: [
      {
        id: '1',
        image: require('../assets/PaddlePowerStaticScreen.png'),
        modalContent: {
          image: require('../assets/PaddlePower1Icon.png'),
          header: 'Infinite Bounce Feat',
          contentDescription: (
            <Text>
              Objective is to balance the{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                ping pong
              </Text>{' '}
              ball on the paddle and keep it{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                bouncing
              </Text>{' '}
              as long as possible
            </Text>
          ),
        },
      },
      {
        id: '2',
        image: require('../assets/PaddlePowerStaticScreen.png'),
        modalContent: {
          image: require('../assets/PaddlePower1Icon.png'),
          header: 'Swipe and Balance',
          contentDescription: (
            <Text>
              <Text
                style={{
                  color: '#ff8100',
                }}>
                Swipe
              </Text>{' '}
              your finger to control the paddle's{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                direction
              </Text>{' '}
              and keep the bouncing ball balanced for high scores.
            </Text>
          ),
        },
      },
      {
        id: '4',
        image: require('../assets/PaddlePowerStaticScreen.png'),
        modalContent: {
          image: require('../assets/PaddlePower1Icon.png'),
          header: 'Precision Bouncing',
          contentDescription: (
            <Text>
              Aim to hit the exact{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                center of the paddle
              </Text>{' '}
              for{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                bonus scores.
              </Text>{' '}
              Keep the streak going to accumulate increasing bonus points with
              each consecutive precise bounce.
            </Text>
          ),
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Glider',
    htData: [
      {
        id: '1',

        image: require('../assets/GliderStaticScreen.png'),
        modalContent: {
          image: require('../assets/glider1Icon.png'),
          header: 'ROLL, SCORE, CONQUER',
          contentDescription: (
            <Text>
              Glider is a{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                one-touch
              </Text>{' '}
              game where you keep the ball rolling while dodging obstacles that
              come your way.
            </Text>
          ),
        },
      },
      {
        id: '2',

        image: require('../assets/GliderStaticScreen.png'),
        modalContent: {
          image: require('../assets/glider1Icon.png'),
          header: 'AVOID THE OBSTACLES',
          contentDescription: (
            <Text>
              <Text
                style={{
                  color: '#ff8100',
                }}>
                Tap anywhere
              </Text>{' '}
              on the screen to switch the lane of the ball to avoid the
              obstacles.
            </Text>
          ),
        },
      },
      {
        id: '4',

        image: require('../assets/GliderStaticScreen.png'),
        modalContent: {
          image: require('../assets/glider2Icon.png'),
          header: 'CHALLENGE YOURSELF',
          contentDescription: (
            <Text>
              <Text
                style={{
                  color: '#ff8100',
                }}>
                Dodge obstacles
              </Text>
              , score high, and beat your opponent.
            </Text>
          ),
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Hoop Hero',
    htData: [
      {
        id: '1',
        image: require('../assets/HoopHeroStaticScreen.png'),
        modalContent: {
          image: require('../assets/HoopHero1Icon.png'),
          header: 'Bulls-eye Basket',
          contentDescription: (
            <Text>
              Toss the ball{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                into the basket.
              </Text>{' '}
              After doing so a fresh basket will appear for your next try.
            </Text>
          ),
        },
      },
      {
        id: '2',
        image: require('../assets/HoopHeroStaticScreen.png'),
        modalContent: {
          image: require('../assets/HoopHero2Icon.png'),
          header: 'Drag-to-Dunk',
          contentDescription: (
            <Text>
              Set your{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                direction
              </Text>{' '}
              with a{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                drag
              </Text>{' '}
              and dunk the ball effortlessly between the baskets.
            </Text>
          ),
        },
      },
      {
        id: '4',
        image: require('../assets/HoopHeroStaticScreen.png'),
        modalContent: {
          image: require('../assets/HoopHero2Icon.png'),
          header: 'Earn Bonus, Beat Records',
          contentDescription: (
            <Text>
              Dunk the ball into the basket to earn a{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                bonus point.
              </Text>{' '}
              Score as many points as possible to break{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                previous records.
              </Text>{' '}
            </Text>
          ),
        },
      },
    ],
  },
  {
    id: 5,
    name: 'Naifu Whizz',
    htData: [
      {
        id: '1',
        image: require('../assets/NaifuWhizzStaticScreen.png'),
        modalContent: {
          image: require('../assets/NaifuWhizz1Icon.png'),
          header: 'Precision Knife Strikes',
          contentDescription: (
            <Text>
              Your goal is to destroy the wooden board by{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                throwing knives
              </Text>{' '}
              at it. The wooden board will be constantly{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                rotating,
              </Text>{' '}
              making it a challenging task.
            </Text>
          ),
        },
      },
      {
        id: '2',
        image: require('../assets/NaifuWhizzStaticScreen.png'),
        modalContent: {
          image: require('../assets/NaifuWhizz2Icon.png'),
          header: 'Never Miss a Blade',
          contentDescription: (
            <Text>
              Shoot knives at the{' '}
              <Text
                style={{
                  color: '#ff8100',
                }}>
                rotating wooden board
              </Text>{' '}
              to break it, but never miss a single throw in this ultimate test
              of accuracy and skill!{' '}
            </Text>
          ),
        },
      },
      {
        id: '4',
        image: require('../assets/NaifuWhizzStaticScreen.png'),
        modalContent: {
          image: require('../assets/NaifuWhizz3Icon.png'),
          header: 'Sharpen Your Skills',
          contentDescription: (
            <Text>
              Shoot knives at the rotating board to break it, then face new
              challenges with a fresh set of knives on the next board. Stay
              sharp and keep throwing!
            </Text>
          ),
        },
      },
    ],
  },
];

const bannerData = [
  // {key: '0'},
  {key: '1', img: require('../assets/WheelOff.gif')},
  {key: '2', img: require('../assets/WheelOff.gif')},
  {key: '3', img: require('../assets/WheelOff.gif')},
  {key: '4', img: require('../assets/WheelOff.gif')},
  {key: '5', img: require('../assets/WheelOff.gif')},
  {key: '6', img: require('../assets/WheelOff.gif')},
  // {key: '7'},
];

const TournamentCard = () => (
  <View
    style={{
      width: bannerWidth,
      height: 116,
      backgroundColor: '#0c0c0c',
      borderRadius: 18,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {width: 3, height: 5},
      shadowOpacity: 0.25,
      shadowRadius: 4,
      position: 'relative',
      marginBottom: 16,
      // overflow: 'hidden',
    }}>
    <View
      style={{
        padding: 8,
        flexDirection: 'row',
        gap: 14,
      }}>
      <View
        style={{
          width: 84,
          height: 100,
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}>
        <Image
          source={require('../assets/hoophero.png')}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>
      <View
        style={{
          width: bannerWidth - 84 - 8 - 14 - 8,
          // backgroundColor: 'red',
          height: 116 - 20 - 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              gap: 5,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 16,
                letterSpacing: 0.48,
                color: '#FFF9F2',
              }}>
              WIN &#8377; 4000
            </Text>
            <View
              style={{
                width: bannerWidth - 84 - 8 - 14 - 8 - 86,
                ...Platform.select({
                  android: {
                    gap: 8,
                  },
                  ios: {
                    gap: 14,
                  },
                }),
                // backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                  gap: 14,
                  width: '100%',
                  // backgroundColor: 'red',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                  }}>
                  <Image source={require('../assets/TEAM.png')} />
                  <Text
                    style={{
                      color: '#8C8E8F',
                    }}>
                    20/50
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center',
                  }}>
                  {/* <Image source={require('../assets/uis_calender.png')} /> */}
                  <Text
                    style={{
                      color: '#8C8E8F',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Weekly
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#8C8E8F',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 10,
                  }}>
                  Time left: 10m:19s
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              height: '100%',
              paddingBottom: 8,
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                height: 28,
                width: 86,
                // backgroundColor: '#FF8100',
                alignSelf: 'flex-end',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                elevation: 4,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.25,
                shadowRadius: 4,
              }}>
              <LinearGradient
                colors={['#F2A14F', '#FF8100', '#ff8100']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                }}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: 'white',
                }}>
                &#8377; 150
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: 20,
        bottom: 0,
        backgroundColor: '#45392D',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        overflow: 'hidden',
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 4,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '20%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}>
          <Image
            source={require('../assets/tripplehearts.png')}
            style={{
              height: 10,
            }}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 8,
              letterSpacing: 0.48,
              color: '#FFF9F2',
            }}>
            TRIPLE CHANCE
          </Text>
        </View>
        <Text
          style={{
            color: '#fff',
          }}>
          |
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}>
          <Image
            source={require('../assets/Default.png')}
            style={{
              width: 10,
              height: 10,
            }}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 8,
              letterSpacing: 0.48,
              color: '#FFF9F2',
            }}>
            67% WINNERS
          </Text>
        </View>
      </View>
    </View>
  </View>
);
const GameStack = props => {
  const {navigation} = props;
  const [nonChangingState, setNonChangingState] = useState(0);
  const {top, bottom} = useSafeAreaInsets();
  const {quote, author} = useMemo(() => quoteRandomizer(), [nonChangingState]);
  const [currentIndexPaginator, setCurrentIndex] = useState<number>(0);
  // console.log(currentIndexPaginator);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    console.log(viewableItems[0]);
    if (viewableItems[0]) {
      setCurrentIndex(viewableItems[0].index);
    }
    return;
  }).current;
  const lastContentOffset = useSharedValue(0);
  // const isScrolling = useSharedValue(false);
  const [PacDirection, setPacDirection] = useState('right');
  // const AnimatFlatList = Animated.createAnimatedComponent(FlatList);
  console.log('rerendered');
  const viewabilityConfig = {
    // waitForInteraction: true,
    // At least one of the viewAreaCoveragePercentThreshold or itemVisiblePercentThreshold is required.
    // viewAreaCoveragePercentThreshold: 75,
    itemVisiblePercentThreshold: 65,
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#090909',
        paddingTop: top,
        // paddingBottom: bottom,
      }}>
      <HeaderContainer />
      <ScrollView bounces={false}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View style={styles.GameIconsContainer}>
            {items.map(el => {
              return (
                <Pressable
                  // onPress={() =>
                  //   navigation.navigate('How to screen', {
                  //     id: el.name,
                  //     htScreen: el.htData,
                  //   })
                  // }
                  onPress={() => navigation.navigate('Loop')}
                  style={{
                    height: childHeight,
                    width: childWidth,
                  }}>
                  {/* <Text>{el.title}</Text> */}
                  <View
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: 16,
                      overflow: 'hidden',
                    }}>
                    <Image
                      source={require('../assets/paddlepower.png')}
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      resizeMode="cover"
                    />
                  </View>
                  <Text
                    style={{
                      padding: 4,
                      fontFamily: 'Poppins-Regular',
                      color: '#a8a8a8',
                      fontSize: 12,
                    }}>
                    {el.name}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <View
            style={{
              flex: 1,
              marginBottom: 16,
            }}>
            <FlatList
              data={bannerData}
              keyExtractor={item => item.key}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={{width: SPACING, height: '100%'}}></View>
              )}
              // ViewabilityConfig={}
              viewabilityConfig={viewabilityConfig}
              initialNumToRender={2}
              removeClippedSubviews={true}
              getItemLayout={(data, index) => ({
                length: bannerWidth,
                offset: bannerWidth * index,
                index,
              })}
              snapToInterval={bannerWidth + SPACING}
              decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
              renderToHardwareTextureAndroid
              snapToAlignment="start"
              contentContainerStyle={{
                padding: 17,
              }}
              onScroll={({nativeEvent}) => {
                if (nativeEvent.contentOffset.x > lastContentOffset.value) {
                  setPacDirection('right');
                }
                lastContentOffset.value = nativeEvent.contentOffset.x;
                if (nativeEvent.contentOffset.x < lastContentOffset.value) {
                  setPacDirection('left');
                }
              }}
              bounces={false}
              // scrollEventThrottle={32}
              renderItem={({item}) => {
                if (!item.img) {
                  return (
                    <View
                      style={{
                        width: (width - bannerWidth - SPACING) / 2,
                        height: '100%',
                      }}></View>
                  );
                }
                return (
                  <View
                    style={{
                      // marginHorizontal: 10,

                      // padding: SPACING * 2,
                      // height: '100%',
                      height: 192,
                      width: bannerWidth,

                      // backgroundColor: 'blue',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.img}
                      resizeMode="contain"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </View>
                );
              }}
              onViewableItemsChanged={viewableItemsChanged}
            />
            <Pacman
              currentIndex={currentIndexPaginator}
              noofSlides={bannerData.length}
              pacDirection={PacDirection}
            />
          </View>

          <View
            style={{
              marginBottom: 33,
            }}>
            <TournamentCard />
            <TournamentCard />
          </View>
          <IndiaMapBanner />
          <View
            style={{
              width: '70%',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}>
              {/* QuoteContainer */}
              <Image
                source={require('../assets/apos.png')}
                style={{
                  width: 13,
                  height: 13,
                  marginBottom: 10,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: 'Poppins-medium',
                  fontSize: 12,
                  color: '#FFFFFF78',
                  textAlign: 'center',
                  marginBottom: 5,
                }}>
                {quote}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-bold',
                  color: '#FFFFFF78',
                  textAlign: 'center',
                }}>
                - {author}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 20,
              }}>
              {/* Play Different */}
              <GradientText
                colors={['#ff8100', '#252525']}
                style={{
                  fontFamily: 'Humane-Bold',
                  fontSize: 84,
                }}>
                PLAY DIFFERENT
              </GradientText>
            </View>
          </View>
          {/* <ConfettiCannon
            count={200}
            origin={{x: 0, y: 0}}
            colors={[
              '#ff8100',
              '#ff8100',
              '#ff8100',
              '#ff8100',
              '#ff8100',
              '#ff8100',
              '#ff8100',
              '#ff8100',
              '#ff8100',
              '#ff8100',
              '#ff8100',
            ]}
            autoStart={true}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default GameStack;
