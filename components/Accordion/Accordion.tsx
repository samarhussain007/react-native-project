import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function ExapndedSection({isExpanded}: any) {
  //   const [currentRate, setCurrentRate] = useState('');
  //   const THUMB_UP = 'thumb-up';
  //   const THUMB_DOWN = 'thumb-down';
  if (isExpanded)
    return (
      <View>
        <Text style={styles.content}>
          Lorem ispum donor septium karen due Lorem ispum donor septium karen
          due Lorem ispum donor septium karen due Lorem ispum donor septium
          karen due Lorem ispum donor septium karen due Lorem ispum donor
          septium karen due Lorem ispum donor septium karen due Lorem ispum
          donor septium karen due
        </Text>
        {/* <View style={styles.rateSection}>
          <Text style={styles.helpText}>Was this article helpful?</Text>
          <View style={styles.actionIconContainer}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setCurrentRate(THUMB_UP)}>
              <Icon
                color={
                  currentRate === THUMB_UP
                    ? AppStyles.color.SOLID_ORANGE
                    : AppStyles.color.BLACK_TEXT
                }
                name={THUMB_UP}
                size={24}
              />
            </TouchableOpacity>
            <View style={{width: 13}}></View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setCurrentRate(THUMB_DOWN)}>
              <Icon
                color={
                  currentRate === THUMB_DOWN
                    ? AppStyles.color.SOLID_ORANGE
                    : AppStyles.color.BLACK_TEXT
                }
                name={THUMB_DOWN}
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View> */}
      </View>
    );

  return null;
}

function Accordian({title}: any) {
  const [expanded, setIsExpanded] = useState(false);
  return (
    // <CustomDropShadow>
    <View style={styles.accodianBlock}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.accodianHeader}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setIsExpanded(!expanded);
        }}>
        <Text style={styles.title}>{title}</Text>
        <Icon
          name="chevron-right"
          size={24}
          style={{
            transform: [{rotate: !expanded ? '0deg' : '-90deg'}],
            color: 'white',
          }}
        />
      </TouchableOpacity>
      <ExapndedSection isExpanded={expanded} />
    </View>
    // </CustomDropShadow>
  );
}

// function GamesFaq(props: any) {
//   const {queryType} = props.route.params || {};
//   const header = queryType ? queryType.toUpperCase() : '';
//   return (
//     <SafeAreaView style={styles.container}>
//       <HeaderWithBack title={`${header} FAQ`} noWallet />
//       <ScrollView>
//         <Accordian title="How does GD App works xyzez." />
//         <Accordian title="How does GD App works xyzez." />
//         <Accordian title="How does GD App works xyzez." />
//         <Accordian title="How does GD App works xyzez." />
//         <Accordian title="How does GD App works xyzez." />
//         <Accordian title="How does GD App works xyzez." />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// GamesFaq.defaultProps = {};
export default Accordian;
