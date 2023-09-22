import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  SafeAreaView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Value} from 'react-native-reanimated';
import {Image} from '@rneui/base';

const InputScreen = () => {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;
  const paddingBottom = insets.bottom;
  const [test, setTest] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [focused, setFocused] = useState(false);
  const [placeholder, setPlaceHolder] = useState('Enter the number');

  const validate = () => {
    // Keyboard.dismiss();
    let valid = true;
    if (!value) {
      handleError('Enter the mobile number');
      setTest(true);
      valid = false;
    } else if (!value.match(/^[6-9]\d{9}$/)) {
      handleError('Mobile Number is invalid');
      setTest(true);
      valid = false;
    } else {
      setTest(false);
      handleError('');
    }
  };

  const handleError = error => {
    setError(error);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          backgroundColor: '#090909',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <TextInput
                  // placeholder="Username"
                  keyboardType="numeric"
                  textAlign="center"
                  placeholderTextColor={'#A8A8A8'}
                  cursorColor={'#ff8100'}
                  maxLength={10}
                  onFocus={() => setPlaceHolder('')}
                  onSelectionChange={() => {
                    if (focused) {
                      validate();
                    }
                  }}
                  placeholder={placeholder}
                  onChangeText={value => {
                    // console.log(value.length);
                    setValue(value);
                  }}
                  onEndEditing={() => {
                    validate();
                    setFocused(true);
                  }}
                  style={{
                    width: 343,
                    height: 48,
                    backgroundColor: '#171717',
                    borderRadius: 30,
                    fontSize: 16,
                    color: '#FFF9F2',
                    borderColor: test ? 'red' : 'transparent',
                    borderWidth: 2,
                    fontFamily: 'Poppins-medium',
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    margin: 12,
                  }}>
                  {/* <Image
                    source={require('../assets/indiaFlag.png')}
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 4.5,
                    }}
                  /> */}
                  <Text
                    style={{
                      fontFamily: 'Poppins-medium',
                      fontSize: 16,
                      color: '#A8A8A8',
                      marginRight: 8,
                    }}>
                    +91
                  </Text>
                  <View
                    style={{
                      width: 1,
                      height: 28,
                      backgroundColor: '#333',
                    }}></View>
                </View>
              </View>
              <Text
                style={{
                  color: 'red',
                  fontFamily: 'Poppins-regular',
                  opacity: test ? 1 : 0,
                }}>
                {error}
              </Text>
            </View>
            <Button onPress={() => null} title="submit" />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InputScreen;
