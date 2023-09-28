import {View, Text, Button, StatusBar} from 'react-native';
import React from 'react';

const Home = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0c0c0c',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Text>Home</Text>
      <Button
        title="Spin the wheel"
        onPress={() => {
          navigation.navigate('SpinWheel');
        }}
      />
      {/* <Button
        title="ScreenVideo"
        onPress={() => {
          navigation.navigate('ScreenVideo');
        }}
      /> */}
      <Button
        title="Games Faq"
        onPress={() => {
          navigation.navigate('Faq');
        }}
      />
      <Button
        title="GameStack"
        onPress={() => {
          navigation.navigate('GameStack');
        }}
      />
      {/* <Button
        title="Rewards"
        onPress={() => {
          navigation.navigate('Rewards');
        }}
      />

      <Button
        title="How to screen"
        onPress={() => navigation.navigate('How to screen')}
      /> */}
      {/* <Button
        title="shared transition"
        onPress={() => navigation.navigate('shared transition')}
      /> */}
      {/* <Button
        title="Coin Animation"
        onPress={() => navigation.navigate('Coin Animation')}
      />
      <Button
        title="FreshChatScreen"
        onPress={() => navigation.navigate('FreshchatScreen')}
      />
      <Button
        title="coinAnimationMain"
        onPress={() => navigation.navigate('coinAnimationMain')}
      />
      <Button
        title="SliderScreen"
        onPress={() => navigation.navigate('SliderScreen')}
      />
      <Button
        title="inputScreen"
        onPress={() => navigation.navigate('InputScreen')}
      />*/}
      <Button
        title="HomeScreen"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      {/* <Button
        title="SkeletonLoader"
        onPress={() => navigation.navigate('SkeletonLoader')}
      /> */}
      {/* <Button title="FCM" onPress={() => navigation.navigate('FCM')} /> */}
      <Button title="pacman" onPress={() => navigation.navigate('Pacman')} />
    </View>
  );
};

export default Home;
