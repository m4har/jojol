import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {fp, hp, wp} from '../../../utils/scale';
import {color} from '../../../utils/color';

export const Header = () => {
  const actionPress = () => Snackbar.show({text: 'tap more..'});
  return (
    <>
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />
      <SafeAreaView />
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchBox} onPress={actionPress}>
          <Ionicons name="md-search" color="#000" size={fp(3)} />
          <Text style={styles.textSearch}>{`Coffe, anyone ?`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.voucherBox} onPress={actionPress}>
          <Material name="brightness-percent" color={color.gold} size={fp(4)} />
          <Text style={styles.textPromo}>Promos</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchBox: {
    width: wp(65),
    height: hp(5),
    borderWidth: 1,
    borderRadius: hp(5),
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#cecece',
    paddingHorizontal: 10,
  },
  textSearch: {
    paddingLeft: 10,
    fontSize: fp(1.8),
    fontWeight: '300',
  },
  textPromo: {
    paddingLeft: 5,
    fontSize: fp(1.8),
    fontWeight: '300',
  },
  voucherBox: {
    minWidth: wp(20),
    height: hp(5),
    backgroundColor: '#ecf0f1',
    borderRadius: hp(5),
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
});
