import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Entrypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Snackbar from 'react-native-snackbar';
import {fp, hp, wp} from '../../../utils/scale';
import {color} from '../../../utils/color';
import {JopayModal} from './JopayModal';
const menu = [
  {
    name: 'Pay',
    icon: 'share',
  },
  {
    name: 'PayLater',
    icon: 'credit-card',
  },
  {
    name: 'Top Up',
    icon: 'folder-plus',
  },
  {
    name: 'More',
    icon: 'menu',
  },
];
export const Jopay = () => {
  const [state, setState] = useState({showMore: false});
  const onClose = () => setState({...state, showMore: false});
  const onActionMenu = (menu: string) => () => {
    if (menu === 'More') return setState({...state, showMore: true});
    Snackbar.show({text: 'tap more...'});
  };
  return (
    <View style={styles.container}>
      <JopayModal isVisible={state.showMore} onClose={onClose} />
      <View style={styles.money}>
        <View style={styles.containerLogo}>
          <Entrypo name="wallet" color={color.white} size={fp(3)} />
          <Text style={styles.textLogo}>jopay</Text>
        </View>
        <Text style={styles.textMoney}>Rp50.000</Text>
      </View>
      <View style={styles.containerMenu}>
        {menu.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menu}
            onPress={onActionMenu(item.name)}>
            <Feather name={item.icon} size={fp(2.5)} color={color.white} />
            <Text style={styles.textMenu}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.blueLight,
    height: hp(13),
    // width:'100%',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  money: {
    backgroundColor: color.blue,
    height: hp(4),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: fp(2),
    color: color.white,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  textMoney: {
    fontSize: fp(2),
    color: color.white,
    fontWeight: 'bold',
  },
  containerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    height: hp(8),
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMenu: {
    color: color.white,
    fontSize: fp(1.5),
    fontWeight: 'bold',
  },
});
