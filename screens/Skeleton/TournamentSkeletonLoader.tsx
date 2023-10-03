/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TournamentComponent} from './SkeletonTableComponent';
import {Skeleton} from '@rneui/base';

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
  const emptyArray = new Array(5).fill(0);
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
        <Skeleton
          style={{
            width: '90%',
            height: 200,
            backgroundColor: '#171717',
            borderRadius: 16,
            marginBottom: 16,
          }}
          animation="wave"
          LinearGradientComponent={SKLinearGradient}
        />

        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            width: '90%',
            justifyContent: 'space-between',
          }}>
          {emptyArray.map(() => (
            <Skeleton
              animation="wave"
              LinearGradientComponent={SKLinearGradient}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundColor: '#171717',
              }}
            />
          ))}
        </View>
        <TournamentComponent />
      </View>
    </ScrollView>
  );
};

export default SkeletonLoader;
