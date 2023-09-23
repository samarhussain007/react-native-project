import {View, Text, StyleSheet, Platform, Pressable} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderWithoutText from '../Header/HeaderWithoutText';
import Animated, {SharedTransition, withSpring} from 'react-native-reanimated';

const springOptions = {
  damping: 19,
};

// const transition = SharedTransition.custom(values => {
//   'worklet';
//   return {
//     width: withSpring(values.targetWidth, springOptions),
//     height: withSpring(values.targetHeight, springOptions),
//     originX: withSpring(values.targetOriginX, springOptions),
//     originY: withSpring(values.targetOriginY, springOptions),
//   };
// });

const ProfileSettings = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View
      style={[
        styles.screen,
        {
          ...Platform.select({
            ios: {
              paddingTop: statusBarHeight,
            },
          }),
        },
      ]}>
      <HeaderWithoutText navigation={navigation} noWallet={true} />
      <View style={styles.headerOverviewContainer}>
        <View>
          <Text style={styles.primaryText}>flyingductchman</Text>
          <Text style={styles.secondaryText}>Royson D</Text>
          <Text style={styles.linkText}>View Profile</Text>
        </View>

        <Pressable onPress={() => navigation.goBack()}>
          <Animated.Image
            sharedTransitionTag={'cat'}
            sharedTransitionStyle={transition}
            source={require('../assets/profileimage.png')}
            style={{
              width: 64,
              height: 64,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#090909',
  },
  primaryText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#FFF9F2',
    marginBottom: 4,
  },
  secondaryText: {
    color: '#A8A8A8',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
  },
  linkText: {
    color: '#ff8100',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    marginVertical: 4,
  },
  headerOverviewContainer: {
    padding: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 64,
    height: 64,
  },
});

export default ProfileSettings;
