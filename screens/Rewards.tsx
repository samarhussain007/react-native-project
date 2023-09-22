import {View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const Rewards = () => {
  const insets = useSafeAreaInsets();
  const top = insets.top;
  const {width} = Dimensions.get('window');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#090909',
      }}>
      <View
        style={{
          width: '100%',
          height: 254,
          position: 'relative',
          paddingTop: top,
        }}>
        <Image
          source={require('../assets/header2.gif')}
          resizeMode="cover"
          style={{
            width: '100%',
            height: 254,
            position: 'absolute',
          }}
        />
        <View
          style={{
            margin: 16,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-bold',
              fontSize: 32,
            }}>
            REWARDS
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-regular',
              fontSize: 14,
            }}>
            Play games and stand a{'\n'}chance to win rewards {'\n'}daily!
          </Text>
        </View>

        <LinearGradient
          colors={['#FF8100', '#EDDB7F']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            width: width * 0.95,
            height: 92,
            borderRadius: 18,
            bottom: '-20%',
            position: 'absolute',
            alignSelf: 'center',
          }}></LinearGradient>
      </View>
    </View>
  );
};

export default Rewards;
