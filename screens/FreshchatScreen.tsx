import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {APP_ID, API_KEY} from '@env';
import {
  Freshchat,
  FreshchatConfig,
  ConversationOptions,
  FreshchatUser,
  FaqOptions,
} from 'react-native-freshchat-sdk';
import {FreshchatMessage} from 'react-native-freshchat-sdk';
import {Button} from '@rneui/base';

const FreshchatScreen = () => {
  useEffect(() => {
    var freshchatConfig = new FreshchatConfig(APP_ID, API_KEY);
    freshchatConfig.domain = 'msdk.in.freshchat.com';
    freshchatConfig.teamMemberInfoVisible = true;
    freshchatConfig.cameraCaptureEnabled = false;
    freshchatConfig.gallerySelectionEnabled = true;
    freshchatConfig.responseExpectationEnabled = true;
    freshchatConfig.showNotificationBanner = true; //iOS only
    freshchatConfig.notificationSoundEnabled = true;
    Freshchat.init(freshchatConfig);
  }, []);

  // Freshchat.getUser(user => {
  //   console.log(user);
  // });
  // Freshchat.getFreshchatUserId(data => {
  //   console.log(data);
  // });

  const handlePress = () => {
    Freshchat.showConversations();
    var freshchatUser = new FreshchatUser();
    freshchatUser.firstName = 'Samar';
    freshchatUser.lastName = 'Hussain';
    freshchatUser.email = 'Samar@dev.man';
    freshchatUser.phoneCountryCode = '+91';
    freshchatUser.phone = '1234234123';
    Freshchat.setUser(freshchatUser, error => {
      console.log(error);
    });

    // Freshchat.getUnreadCountAsync(data => {
    //   console.log(data);
    // });

    var faqOptions = new FaqOptions();
    faqOptions.tags = ['premium'];
    faqOptions.filteredViewTitle = 'Tags';
    faqOptions.filterType = FaqOptions.FilterType.ARTICLE;
    Freshchat.showFAQs(faqOptions);
  };
  const resetUser = () => {
    Freshchat.resetUser();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0c0c0c',
        paddingTop: StatusBar.currentHeight,
      }}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Button onPress={handlePress} title="click me" />
      <Button onPress={resetUser} title="click delete" />
    </SafeAreaView>
  );
};

export default FreshchatScreen;
