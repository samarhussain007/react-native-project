import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

const HeaderBackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../assets/Left.png')} />
    </TouchableOpacity>
  );
};

export default HeaderBackButton;
