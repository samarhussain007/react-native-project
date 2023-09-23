/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import SpinWheel from './screens/SpinWheel';
import ScreenVideo from './screens/ScreenVideo';
import GameStack from './screens/GameStack';
import Faq from './screens/Faq';

import SharedTransition from './screens/SharedTransition';
import Audio from './screens/Audio';
import ProfileSettings from './screens/ProfileSettings';
import Rewards from './screens/Rewards';
import CoinAnimation from './screens/CoinAnimation';
import SkeletonLoader from './screens/Skeleton/TournamentSkeletonLoader';
import TestScreen from './screens/TestScreen';
import Firebase from './screens/Firebase';
import HowtoScreen from './screens/HowtoScreen';
import FreshchatScreen from './screens/FreshchatScreen';
import GamePlayers from './screens/GamePlayers';
import SliderScreen from './screens/SliderScreen';
// import InputScreen from './screens/InputScreen';
import InputScreen from './screens/InputScreen';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SpinWheel"
          component={SpinWheel}
          options={{
            title: 'Spin the wheel',
            headerStyle: {
              backgroundColor: '#0c0c0c',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="ScreenVideo" component={ScreenVideo} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen
          name="GameStack"
          component={GameStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Audio" component={Audio} />
        {/* <Stack.Screen
          name="shared transition"
          component={SharedTransition}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="ProfileSettings"
          component={ProfileSettings}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="Rewards"
          component={Rewards}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Coin Animation"
          component={CoinAnimation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SkeletonLoader"
          component={SkeletonLoader}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="FCM"
          component={Firebase}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="How to screen"
          component={HowtoScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FreshchatScreen"
          component={FreshchatScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="coinAnimationMain"
          component={GamePlayers}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SliderScreen"
          component={SliderScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View

    //   style={{
    //     backgroundColor: 'black',
    //     alignItems: 'center',
    //     flex: 1,
    //     justifyContent: 'center',
    //   }}>
    //   {/* <SimpleLottie /> */}
    // </View>
  );
}

export default App;
