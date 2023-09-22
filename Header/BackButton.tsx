/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function BackButton(props) {
  const {containerStyle, navigation} = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => navigation.goBack()}
      activeOpacity={1}>
      <Icon name={'arrow-back-ios'} size={24} color="#fff" />
    </TouchableOpacity>
  );
}

BackButton.defaultProps = {
  containerStyle: {},
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
});

export default BackButton;
