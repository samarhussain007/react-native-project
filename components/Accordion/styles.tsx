// import AppStyles from 'app/config/styles';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accodianHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: "red",
    height: 48,
    paddingHorizontal: 23,
  },

  accodianBlock: {
    backgroundColor: '#111',
    marginHorizontal: 16,
    borderRadius: 18,
    // paddingHorizontal: 23,
    // paddingVertical: 16,
    // borderColor: AppStyles.color.SOLID_DARK_GREY,
    // borderWidth: 1,
    marginTop: 16,
  },
  title: {
    // ...AppStyles.fonts.fontFamilySemiBold,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: '#A8A8A8',
  },
  content: {
    // ...AppStyles.fonts.fontFamilyRegular,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '400',

    fontSize: 12,
    // color: AppStyles.color.SOLID_GREY,
    color: '#A8A8A8',
    // paddingHorizontal: 16,
    paddingHorizontal: 23,
    paddingBottom: 10,
  },
  //   rateSection: {
  //     // backgroundColor: "blue",
  //     borderTopColor: AppStyles.color.SOLID_DARK_GREY,
  //     borderTopWidth: 1,
  //     borderStyle: 'dashed',
  //     marginTop: 12,
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     paddingHorizontal: 16,
  //     paddingVertical: 12,
  //   },
  actionIconContainer: {
    flexDirection: 'row',
  },
  //   helpText: {
  //     ...AppStyles.fonts.fontFamilyRegular,
  //     fontSize: 12,
  //     color: AppStyles.color.SOLID_GREY,
  //   },
});

export default styles;
