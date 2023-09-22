/* eslint-disable prettier/prettier */
// import AppStyles from 'app/config/styles';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
    // backgroundColor: AppStyles.color.PRIMARY_BG,
  },
  bgStyle: {
    position: 'absolute',
    bottom: 0,
    top: Platform.OS === 'ios' ? 60 : 0,
    right: 0,
    left: 0,
  },
  heading: {
    // ...AppStyles.fonts.fontFamilySemiBold,
    fontSize: 14,
    // color: AppStyles.color.SOLID_WHITE,
    // marginTop: 68,
    textAlign: 'center',
  },
  playerAvatar: {
    alignItems: 'center',
  },
  highlightedName: {
    // ...AppStyles.fonts.fontFamilyBold,
    fontSize: 10,
    // color: AppStyles.color.SOLID_ORANGE,
    marginTop: 8,
    textAlign: 'center',
  },
  playerName: {
    // ...AppStyles.fonts.fontFamilyBold,
    fontSize: 10,
    // color: AppStyles.color.SOLID_WHITE,
    marginTop: 8,
    textAlign: 'center',
  },
  onevsoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 155,
  },
  onevsonePlayer: {
    height: 100,
    width: 100,
  },
  vsText: {
    // ...AppStyles.fonts.fontFamilyMontageRegular,
    fontSize: 24,
    // color: AppStyles.color.SOLID_ORANGE,
  },
  vsTextForOne: {
    marginHorizontal: 39,
  },

  threePlayersContainer: {
    marginTop: 71,
  },
  threePlayersContainerRow2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 32,
  },
  vsTextForThree: {
    marginHorizontal: 39,
    marginTop: 5,
  },

  fourPlayersContainer: {
    marginTop: 71,
  },
  fourPlayersContainerRow2: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 30,
  },
  vsTextForFour: {
    marginHorizontal: 71,
    marginBottom: 20,
  },
  fourPlayer: {
    height: 80,
    width: 80,
  },

  fivePlayersContainerRow1: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    marginTop: 8,
  },
  fivePlayersContainerRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 59,
    marginBottom: 17,
  },
  vsTextForFive: {
    marginHorizontal: 81,
  },
  fivePlayer: {
    height: 60,
    width: 60,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  winnerCard: {
    height: 46,
    width: 98,
    marginBottom: 50,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    // backgroundColor: AppStyles.color.PRIMARY_BG,
    borderRadius: 7.7,
    alignItems: 'center',
  },
  winnerText: {
    // ...AppStyles.fonts.fontFamilyBold,
    fontSize: 10,
    // color: AppStyles.color.SOLID_WHITE,
    lineHeight: 15,
    marginTop: 3,
  },
  gameTimer: {
    marginBottom: 34,
    flexDirection: 'row',
  },
  amount: {
    // ...AppStyles.fonts.fontFamilyBold,
    fontSize: 18,
    lineHeight: 27,
  },
  gameText: {
    // ...AppStyles.fonts.fontFamilyMedium,
    fontSize: 16,
    // color: AppStyles.color.SOLID_WHITE,
  },
  timer: {
    // ...AppStyles.fonts.fontFamilySemiBold,
    fontSize: 16,
    // color: AppStyles.color.SOLID_ORANGE,
  },
});

export default styles;
