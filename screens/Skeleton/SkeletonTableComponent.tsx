/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {Skeleton} from '@rneui/themed';
import {SKLinearGradient} from './TournamentSkeletonLoader';
import {Dimensions, StyleSheet, View} from 'react-native';

const {width} = Dimensions.get('window');
const SkeletonTableComponent = () => (
  <Skeleton
    LinearGradientComponent={SKLinearGradient}
    animation="wave"
    style={{
      width: '100%',
      backgroundColor: '#171717',
      borderRadius: 18,
      marginTop: 16,
      height: 455,
    }}
  />
);

export const TournamentComponent = () => (
  <View
    style={{
      flex: 1,
    }}>
    <View
      style={{
        width: width * 0.9,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignSelf: 'flex-end',
          }}>
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={[styles.smallCircle, styles.skeletonStyleColor]}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={[styles.PrimaryText, styles.skeletonStyleColor]}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={[styles.secondaryText, styles.skeletonStyleColor]}
          />
        </View>
        <View>
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={[styles.bigCircle, styles.skeletonStyleColor]}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={[styles.PrimaryText, styles.skeletonStyleColor]}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={[styles.secondaryText, styles.skeletonStyleColor]}
          />
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
          }}>
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={[styles.smallCircle, styles.skeletonStyleColor]}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={[styles.PrimaryText, styles.skeletonStyleColor]}
          />
          <Skeleton
            LinearGradientComponent={SKLinearGradient}
            animation="wave"
            style={[styles.secondaryText, styles.skeletonStyleColor]}
          />
        </View>
      </View>
      <SkeletonTableComponent />
    </View>
  </View>
);

const styles = StyleSheet.create({
  PrimaryText: {
    marginTop: 8,
    height: 15,
    borderRadius: 15,
  },
  secondaryText: {
    marginTop: 8,
    height: 10,
    borderRadius: 15,
  },
  smallCircle: {
    height: 65,
    width: 65,
    borderRadius: 50,
  },
  bigCircle: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  skeletonStyleColor: {
    backgroundColor: '#171717',
  },
});
export default TournamentComponent;
