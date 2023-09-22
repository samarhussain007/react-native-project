/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
// import GamePlayerBGAnimations from 'app/components/GamePlayerBGAnimations';
import HeaderWithBack from '../../Header/HeaderWithBack';
// import {useStore} from 'app/store/index';
// import {getDefaultAvatar, resetToTournamentScreen} from 'app/utils/helpers';
import React, {useCallback, useEffect, useState} from 'react';
import {Image, SafeAreaView, View, Text} from 'react-native';
// import FastImage from 'react-native-fast-image';
// import {Text} from 'react-native-paper';
import styles from './styles';
import CoinAnimation from './CoinAnimations';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// function PlayerImage({imageStyle, player}: any) {
//   // const {nickname: name, profilePic} = player;
//   // const {userId, avatarsList} = useStore();
//   // const playerNameStyle =
//   //   name === userId ? styles.highlightedName : styles.playerName;
//   // const [playerImageLocation, setPlayerImageLocation] = useState(0);
//   // const displayName = name === userId ? 'You' : name;
//   // const avatar = profilePic || getDefaultAvatar(avatarsList);
//   return (
//     <View
//       style={styles.playerAvatar}
//       onLayout={event => {
//         const layout = event.nativeEvent.layout;
//         // console.log(layout);
//         // setPlayerImageLocation({ x: layout.x, y: layout.y });
//       }}>
//       <Image
//         source={require('../../assets/profile1.png')}
//         style={[imageStyle, {borderRadius: 100}]}
//       />
//       <Text style={styles.playerName}>test1</Text>
//     </View>
//   );
// }

// function OneVsOne({players}: any) {
//   const player1 = players[0];
//   const player2 = players[1];
//   return (
//     <View style={styles.onevsoneContainer}>
//       <PlayerImage imageStyle={styles.onevsonePlayer} player={player1} />
//       <Text style={[styles.vsText, styles.vsTextForOne]}>VS</Text>
//       <PlayerImage imageStyle={styles.onevsonePlayer} player={player2} />
//     </View>
//   );
// }

// function ThreePlayers({footerLocation, players}: any) {
//   const player1 = players[0];
//   const player2 = players[1];
//   const player3 = players[2];

//   return (
//     <View style={styles.threePlayersContainer}>
//       <View>
//         <PlayerImage imageStyle={styles.onevsonePlayer} player={player1} />
//       </View>
//       <View style={styles.threePlayersContainerRow2}>
//         <PlayerImage imageStyle={styles.onevsonePlayer} player={player2} />
//         <Text style={[styles.vsText, styles.vsTextForThree]}>VS</Text>
//         <PlayerImage imageStyle={styles.onevsonePlayer} player={player3} />
//       </View>
//     </View>
//   );
// }

// function FourPlayers({players}: any) {
//   const player1 = players[0];
//   const player2 = players[1];
//   const player3 = players[2];
//   const player4 = players[3];

//   return (
//     <View style={styles.fourPlayersContainer}>
//       <View>
//         <PlayerImage imageStyle={styles.fourPlayer} player={player1} />
//       </View>
//       <View style={styles.fourPlayersContainerRow2}>
//         <PlayerImage imageStyle={styles.fourPlayer} player={player2} />
//         <Text style={[styles.vsText, styles.vsTextForFour]}>VS</Text>
//         <PlayerImage imageStyle={styles.fourPlayer} player={player3} />
//       </View>
//       <View>
//         <PlayerImage
//           isYou={true}
//           imageStyle={styles.fourPlayer}
//           player={player4}
//         />
//       </View>
//     </View>
//   );
// }

// function FivePlayers({players}: any) {
//   const player1 = players[0];
//   const player2 = players[1];
//   const player3 = players[2];
//   const player4 = players[3];
//   const player5 = players[4];
//   return (
//     <View style={styles.fourPlayersContainer}>
//       <View style={styles.fivePlayersContainerRow1}>
//         <PlayerImage imageStyle={styles.fivePlayer} player={player1} />
//         <PlayerImage imageStyle={styles.fivePlayer} player={player2} />
//       </View>
//       <View style={styles.fivePlayersContainerRow2}>
//         <PlayerImage imageStyle={styles.fivePlayer} player={player3} />
//         <Text style={[styles.vsText, styles.vsTextForFive]}>VS</Text>
//         <PlayerImage imageStyle={styles.fivePlayer} player={player4} />
//       </View>
//       <View>
//         <PlayerImage
//           isYou={true}
//           imageStyle={styles.fivePlayer}
//           player={player5}
//         />
//       </View>
//     </View>
//   );
// }

// function Heading() {
//   return <Text style={styles.heading}>Give your best shot!</Text>;
// }

// function Footer(props: any) {
//   const [startTimer, setStartTimer] = useState(false);

//   const {setShowPlayerWaitingScreen, isGameReady, winningAmount} = props || {};

//   const [timer, setTimer] = useState(3);
//   const timeOutCallback = useCallback(
//     () => setTimer(currTimer => currTimer - 1),
//     [],
//   );

//   useEffect(() => {
//     if (startTimer) {
//       timer > 0 && setTimeout(timeOutCallback, 1000);
//     }
//   }, [timer, timeOutCallback, startTimer]);

//   useEffect(() => {
//     console.log('isGameReady', isGameReady);
//     if (isGameReady) {
//       setStartTimer(true);
//     } else {
//       setStartTimer(false);
//     }
//   }, [isGameReady]);

//   // console.log(timer);

//   useEffect(() => {
//     if (timer === 0) {
//       console.log('timer stopped');
//       setShowPlayerWaitingScreen(false);
//     }
//   }, [timer]);

//   function BottomText() {
//     if (startTimer) {
//       return (
//         <View style={styles.gameTimer}>
//           <Text style={styles.gameText}>Game starts in : </Text>
//           <Text style={styles.timer}>{timer}</Text>
//         </View>
//       );
//     }
//     if (!startTimer) {
//       return (
//         <View style={styles.gameTimer}>
//           <Text style={styles.gameText}>Game will begin shortly...</Text>
//         </View>
//       );
//     }
//     return null;
//   }

//   return (
//     <View style={styles.footer}>
//       <BottomText />
//     </View>
//   );
// }

const GamePlayers = (props: any) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  // const [footerLocation, setFooterLocation] = useState(0);

  // const {gameId, gameTitle, winningAmount, players: po} = props || {};

  const players = [
    {
      __typename: 'MemberStatus',
      id: '4652',
      latitude: 12.8772411,
      latitudeDelta: 5,
      longitude: 74.8290403,
      longitudeDelta: 5,
      member: 273,
      nickname: 'gduser273',
      profilePic: null,
      tournamentUserId: 5147,
    },
    {
      __typename: 'MemberStatus',
      id: '4653',
      latitude: 12.8772415,
      latitudeDelta: 5,
      longitude: 74.8290428,
      longitudeDelta: 5,
      member: 73,
      nickname: 'Malik45',
      profilePic: null,
      tournamentUserId: 5148,
    },
    {
      __typename: 'MemberStatus',
      id: '4653',
      latitude: 12.8772415,
      latitudeDelta: 5,
      longitude: 74.8290428,
      longitudeDelta: 5,
      member: 73,
      nickname: 'Malik45',
      profilePic: null,
      tournamentUserId: 5148,
    },
    {
      __typename: 'MemberStatus',
      id: '4653',
      latitude: 12.8772415,
      latitudeDelta: 5,
      longitude: 74.8290428,
      longitudeDelta: 5,
      member: 73,
      nickname: 'Malik45',
      profilePic: null,
      tournamentUserId: 5148,
    },
    {
      __typename: 'MemberStatus',
      id: '4653',
      latitude: 12.8772415,
      latitudeDelta: 5,
      longitude: 74.8290428,
      longitudeDelta: 5,
      member: 73,
      nickname: 'Malik45',
      profilePic: null,
      tournamentUserId: 5148,
    },
  ];

  // function getPlayerBoxes() {
  //   if (players.length == 2) {
  //     return <OneVsOne players={players} />;
  //   } else if (players.length == 3) {
  //     return <ThreePlayers players={players} />;
  //   } else if (players.length == 4) {
  //     return <FourPlayers players={players} />;
  //   } else if (players.length == 5) {
  //     return <FivePlayers players={players} />;
  //   }
  // }

  return (
    <SafeAreaView style={(styles.container, {paddingTop: statusBarHeight})}>
      <HeaderWithBack
        title={'Testing'}
        custombackAction={() => navigation.goBack()}
        // noWallet
      />
      {/* <GamePlayerBGAnimations /> */}
      <CoinAnimation players={players} winningAmount={100} />
      {/* The coin Animation was inside teh absoluted View ,hence the measure was not able to detect the exact position of the elements */}
      {/* <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          // backgroundColor: "red",
        }}></View> */}
      {/* <Heading /> */}
      {/* {getPlayerBoxes()} */}
      {/* <Footer
        // saveFooterLocation={(x, y) => setFooterLocation({ x, y })}
        {...props}
      /> */}
    </SafeAreaView>
  );
};

export default GamePlayers;
