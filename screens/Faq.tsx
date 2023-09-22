import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import Accordian from '../components/Accordion/Accordion';

// width of the screen

const AccordionContainer = () => (
  <View style={styles.AccordionContainer}>
    <Text style={styles.accordianTitle}>Frequently asked questions</Text>
    <Accordian
      title="What is Triple attempt tournament?"
      data="Lorem ispum donor septium karen due Lorem affect ispum donor septium karen due Lorem ispum kuris donor septium karen due Lorem ispum donor pol septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due septium karen due karen due."
    />
    <Accordian
      title="What is Triple attempt tournament?"
      data="Lorem ispum donor septium karen due Lorem affect ispum donor septium karen due Lorem ispum kuris donor septium karen due Lorem ispum donor pol septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due septium karen due karen due."
    />
    <Accordian
      title="What is Triple attempt tournament?"
      data="Lorem ispum donor septium karen due Lorem affect ispum donor septium karen due Lorem ispum kuris donor septium karen due Lorem ispum donor pol septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due septium karen due karen due."
    />
    <Accordian
      title="What is Triple attempt tournament?"
      data="Lorem ispum donor septium karen due Lorem affect ispum donor septium karen due Lorem ispum kuris donor septium karen due Lorem ispum donor pol septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due septium karen due karen due."
    />
    <Accordian
      title="What is Triple attempt tournament?"
      data="Lorem ispum donor septium karen due Lorem affect ispum donor septium karen due Lorem ispum kuris donor septium karen due Lorem ispum donor pol septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due Lorem ispum donor septium karen due septium karen due karen due."
    />
  </View>
);

const Faq = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Left.png')} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.headerTitle}>HOW IT WORKS</Text>,
      headerStyle: {
        opacity: 1,
        backgroundColor: '#0c0c0c',
      },
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.primaryText}>
            Real games, <Text style={{color: '#ff8100'}}>real</Text> money!
          </Text>
          <Text style={styles.secondaryText}>
            Nulla maecenas consequat {`\n`}sendfsswqectus faucibus. Massa morbi
            {`\n`}
            proin molestie lorem velit faucibus
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/placeHolder.png')}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
                zIndex: 999,
              }}
              resizeMode="contain"
            />
            <View style={styles.glassmorphicContainer} />
            <Image
              source={require('../assets/final2.png')}
              style={[styles.gradientBlob, {right: '-10%', top: '24%'}]}
            />
            <Image
              source={require('../assets/final2.png')}
              style={[styles.gradientBlob, {left: '-20%', bottom: '-10%'}]}
            />
          </View>
        </View>
        <AccordionContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
  },
  TextStyle: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 16,
    color: 'white',
    // fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: 'Poppins-SemiBold',
  },
  primaryText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    // fontWeight: '700',
    color: '#fff',
    letterSpacing: -0.408,
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'center',
    gap: 6,
  },
  secondaryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    // fontWeight: '400',
    letterSpacing: -0.408,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
  },
  imageContainer: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
    width: '90%',
    height: 400,
    position: 'relative',
  },
  glassmorphicContainer: {
    width: 295,
    height: 260,
    backgroundColor: '#141414',
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    zIndex: -1,
    borderRadius: 14,
  },
  gradientBlob: {
    // backgroundColor: 'red',
    width: 200,
    height: 200,
    zIndex: 99,
    position: 'absolute',
  },
  AccordionContainer: {
    marginTop: 52,
  },
  accordianTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    // fontWeight: '700',
    color: '#fff9f2',
    textAlign: 'center',
    letterSpacing: -0.408,
    lineHeight: 22,
  },
});

export default Faq;
