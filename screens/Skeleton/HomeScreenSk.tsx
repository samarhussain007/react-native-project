/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Skeleton} from '@rneui/themed';
import {View, Dimensions, StyleSheet, ScrollView} from 'react-native';

import TournamentCardSkComponent from './TournamentCardSkComponent';
import {SKLinearGradient} from './TournamentSkeletonLoader';
const {width} = Dimensions.get('window');
const gapRow = 16;
const gapColumn = 17;
const padding = 17;
const itemPerRow = 3;
const bannerWidth = width - padding * 2;
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
  },
});

const HomeScreenSk = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#090909',
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View style={styles.GameIconsContainer}>
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={{
              borderRadius: 16,
              height: childHeight,
              width: childWidth,
              backgroundColor: '#171717',
            }}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={{
              borderRadius: 16,
              height: childHeight,
              width: childWidth,
              backgroundColor: '#171717',
            }}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={{
              borderRadius: 16,
              height: childHeight,
              width: childWidth,
              backgroundColor: '#171717',
            }}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={{
              borderRadius: 16,
              height: childHeight,
              width: childWidth,
              backgroundColor: '#171717',
            }}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={{
              borderRadius: 16,
              height: childHeight,
              width: childWidth,
              backgroundColor: '#171717',
            }}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={{
              borderRadius: 16,
              height: childHeight,
              width: childWidth,
              backgroundColor: '#171717',
            }}
          />
        </View>
        <Skeleton
          LinearGradientComponent={SKLinearGradient}
          animation="wave"
          style={{
            width: bannerWidth,
            height: 192,
            margin: 10,
            borderRadius: 16,
            backgroundColor: '#171717',
          }}
        />
        <TournamentCardSkComponent />
        <TournamentCardSkComponent />
        <TournamentCardSkComponent />
        <TournamentCardSkComponent />
      </View>
    </ScrollView>
  );
};

export default HomeScreenSk;
