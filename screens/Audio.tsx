import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Sound from 'react-native-sound';

let sound: any;
const Audio = () => {
  useEffect(() => {
    Sound.setCategory('Playback');
    sound = new Sound('sound1.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      console.log('Duration in seconds : ' + sound.getDuration());
    });
  });
  const playSound = () => {
    sound.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    //  SET THE VOLUME
    sound.setVolume(1);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => playSound()}
        style={{
          padding: 20,
          backgroundColor: 'red',
        }}>
        <Text>SOUND ME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Audio;
