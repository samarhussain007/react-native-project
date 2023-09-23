/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  useWindowDimensions,
  Image,
  Text,
} from 'react-native';

import HeaderWithBack from '../Header/HeaderWithBack';

interface ModalType {
  modalContent: {
    image: any;
    header: string;
    contentDescription: ReactNode;
  };
}

// console.log(process.env.API_URL);

// const item = {};

const Modal = ({modalContent}: ModalType) => {
  const {image, header, contentDescription} = modalContent;
  return (
    <View
      style={{
        width: '90%',
        backgroundColor: '#111111',
        borderRadius: 18,
        // height: 228,
        position: 'absolute',
        top: '10%',
        zIndex: 999,
        overflow: 'hidden',
        alignItems: 'center',
      }}>
      <View
        style={{
          padding: 15,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#FFF9FE9F',
            fontFamily: 'Poppins-Bold',
            fontSize: 15,
            textTransform: 'uppercase',
          }}>
          {header}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#333',
        }}
      />
      <View
        style={{
          padding: 16,
          alignItems: 'center',
        }}>
        <Image
          source={image}
          style={{
            width: 61,
            height: 61,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Poppins-regular',
            // padding: 10,
          }}>
          {contentDescription}
        </Text>
      </View>
    </View>
  );
};
const ImageScreenContaier = ({image, width, modalContent}) => {
  return (
    <View
      style={{
        width: width * 0.9,
        height: '100%',
        borderRadius: 18,
        marginRight: 15,
        overflow: 'hidden',
        position: 'relative',
        alignItems: 'center',
      }}>
      {modalContent ? <Modal modalContent={modalContent} /> : null}
      <Image
        source={image}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      />
    </View>
  );
};

const HowtoScreen = props => {
  // console.log(props);
  const {navigation, route} = props;
  const {id, htScreen} = route.params;
  const {width} = useWindowDimensions();
  // const {id, htScreen} = route;
  // console.log(htScreen);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#090909',
      }}>
      <StatusBar backgroundColor="#090909" barStyle={'dark-content'} />
      <HeaderWithBack
        navigation={navigation}
        title={'How to Play'}
        subtitle={id}
        noWallet={true}
      />
      <FlatList
        data={htScreen}
        renderItem={({item}) => (
          <ImageScreenContaier
            image={item.image}
            width={width}
            modalContent={item.modalContent}
          />
        )}
        keyExtractor={item => item.id}
        snapToInterval={width * 0.9 + 15}
        decelerationRate={'fast'}
        horizontal
        contentContainerStyle={{
          padding: 16,
          paddingRight: 0,
        }}
      />
    </SafeAreaView>
  );
};

export default HowtoScreen;
