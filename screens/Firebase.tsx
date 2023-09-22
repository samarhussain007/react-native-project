// import React, {useEffect} from 'react';
// import {Alert, Text, SafeAreaView} from 'react-native';
// import messaging from '@react-native-firebase/messaging';

// const Firebase = () => {
//   //   useEffect(() => {
//   //     const unsubscribe = messaging().onMessage(async remoteMessage => {
//   //       console.log(remoteMessage);
//   //       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//   //     });

//   //     return unsubscribe;
//   //   }, []);
//   messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
//   });
//   return (
//     <SafeAreaView>
//       <Text>Testing Firebase</Text>
//     </SafeAreaView>
//   );
// };

// export default Firebase;
