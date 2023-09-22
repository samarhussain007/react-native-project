/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View} from 'react-native';
import HomeScreenSk from './HomeScreenSk';
import LinearGradient from 'react-native-linear-gradient';
import {TournamentComponent} from './SkeletonTableComponent';
import TournamentCardSkComponent from './TournamentCardSkComponent';

export const SKLinearGradient = () => (
  <LinearGradient
    colors={['#171717', '#222', '#171717']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      height: '100%',
    }}
  />
);

const SkeletonLoader = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#090909',
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TournamentComponent />
        <TournamentCardSkComponent />
        <HomeScreenSk />
      </View>
    </ScrollView>
  );
};

export default SkeletonLoader;
