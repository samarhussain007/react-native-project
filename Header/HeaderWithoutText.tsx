/* eslint-disable prettier/prettier */
// import images from 'app/config/images';
// import AppStyles from 'app/config/styles';
// import {clearToken} from 'app/utils/helpers';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Text} from 'react-native-paper';
// import {useStore} from '../store';
import BackButton from './BackButton';
import BottomDivider from './BottomDivider';
// import RupeeIcon from './RupeeIcon';
// import WalletIcon from './WalletIcon';

function getSubtitleIfAvailable(subtitle: string) {
  if (subtitle) {
    return <Text style={styles.subheading}>{subtitle}</Text>;
  }
  return null;
}

function Wallet({noWallet}) {
  if (noWallet) {
    return <View style={[styles.walletBtn, {marginRight: 30}]} />;
  }

  return <Text>Wallet</Text>;
}

function BackBlock({noBack, custombackAction, navigation}: any) {
  if (noBack) {
    return <View style={{height: 40, width: 40}} />;
  }
  return (
    <BackButton
      containerStyle={{marginTop: 0}}
      custombackAction={custombackAction}
      navigation={navigation}
    />
  );
}

const HeaderWithoutText = ({
  title,
  subtitle,
  noBack,
  custombackAction,
  navigation,
  noWallet,
}: //

any) => {
  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <BackBlock
          noBack={noBack}
          custombackAction={custombackAction}
          navigation={navigation}
        />
        <View style={styles.centerHeading}>
          <Text style={styles.heading}>{title}</Text>
          {getSubtitleIfAvailable(subtitle)}
        </View>
        <Wallet noWallet={noWallet} />
      </View>
      {/* <BottomDivider /> */}
    </View>
  );
};

HeaderWithoutText.defaultProps = {
  noBack: false,
  custombackAction: null,
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#090909',
  },
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#090909',
    elevation: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  wallet: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    marginRight: 3.5,
  },
  walletBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    backgroundColor: '#444',
    // backgroundColor: AppStyles.color.SOLID_GREEN,
    marginVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginRight: 10,
  },
  // amount: {
  //   ...AppStyles.fonts.fontFamilySemiBold,
  //   color: AppStyles.color.SOLID_WHITE,
  //   fontSize: 12,
  //   lineHeight: 35,
  // },
  heading: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: 16,
  },
  subheading: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 12,
  },
  centerHeading: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HeaderWithoutText;
