/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Skeleton} from '@rneui/base';

import {SKLinearGradient} from './TournamentSkeletonLoader';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const TournamentCardSkComponent = () => {
  return (
    <Skeleton
      LinearGradientComponent={SKLinearGradient}
      animation="wave"
      style={{
        marginTop: 20,
        backgroundColor: '#171717',
        borderRadius: 18,
        height: 116,
        width: width * 0.9,
      }}
    />
  );
};

export default TournamentCardSkComponent;
