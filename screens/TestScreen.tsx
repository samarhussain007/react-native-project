import {View, Text, StyleSheet, SafeAreaView, Animated} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderWithBack from '../Header/HeaderWithBack';

const RenderTwoAvatars = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: '40%',
      alignItems: 'center',
    }}>
    <View
      style={{
        position: 'relative',
      }}>
      <View style={styles.coin}></View>
      <Image
        source={require('../assets/profile3.png')}
        style={styles.profile}
      />
    </View>
    <View>
      <Image
        source={require('../assets/vs.png')}
        style={{
          width: 24,
          height: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </View>
    <View>
      <Image
        source={require('../assets/profile4.png')}
        style={styles.profile}
      />
    </View>
  </View>
);

const TestScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
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

            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={styles.generalText}>Give your best shot!</Text>
          </View>

          {/* <RenderThreeAvatars /> */}
          {/* <RenderFourAvatars /> */}
          {/* <RenderFiveAvatars /> */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 4,
              width: '100%',
            }}>
            <RenderTwoAvatars />
          </View>

          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                paddingHorizontal: 10,
                padding: 5,
                backgroundColor: '#090909',
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#3c3c3c',
              }}
              ref={destination}>
              <Text style={styles.generalText}>WINNER GETS</Text>
              <Text style={{color: '#ff8100'}}>80.00</Text>
            </View>

            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins-Bold',
              }}>
              Waiting time:
              <Text
                style={{
                  color: '#ff8100',
                }}>
                10 Seconds
              </Text>
            </Text>
          </View>
        </View>
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
    width: 60,
    height: 60,

    // resizeMode: 'cover',
  },
  // profileContainer: {
  //   position: 'absolute',
  // },
  coin: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});

export default TestScreen;
