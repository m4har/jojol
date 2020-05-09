import React from 'react';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fp, hp, wp} from '../../../utils/scale';
import {color} from '../../../utils/color';
import {ShowService} from './ShowService';

const menu = [
  {
    name: 'JoCar',
    color: color.green,
    icon: 'car',
  },
  {
    name: 'JoFood',
    color: color.red,
    icon: 'silverware-fork-knife',
  },
  {
    name: 'JoShop',
    color: color.red,
    icon: 'bag-personal',
  },
  {
    name: 'JoSend',
    color: color.green,
    icon: 'toolbox',
  },
  {
    name: 'JoMart',
    color: color.red,
    icon: 'cart',
  },
  {
    name: 'JoMed',
    color: color.red,
    icon: 'medical-bag',
  },
  {
    name: 'JoGive',
    color: color.blue,
    icon: 'paper-cut-vertical',
  },
  {
    name: 'More',
    color: color.gray,
    icon: 'more',
  },
];
interface Props {
  onClose?(): any;
  isVisible?: boolean;
}
export const MainMenuModal = (props: Props) => {
  return (
    <Modal
      testID={'modal'}
      isVisible={props.isVisible}
      onSwipeComplete={props.onClose}
      swipeThreshold={300}
      swipeDirection={['down']}
      onBackButtonPress={props.onClose}
      style={styles.container}>
      <View style={styles.view}>
        <SafeAreaView>
          <View style={styles.viewDrag}>
            <View style={styles.drag} />
            <View style={styles.drag} />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>Your Favorites</Text>
            <View style={styles.editBox}>
              <Text style={styles.editText}>Edit</Text>
            </View>
          </View>
          <View style={styles.flatlistMenu}>
            <FlatList
              numColumns={4}
              scrollEnabled
              data={menu}
              bounces={false}
              keyExtractor={(item, index) => index.toLocaleString()}
              renderItem={({item, index}) => (
                <View style={styles.containerMenu}>
                  <TouchableOpacity style={styles.menuButton}>
                    <View
                      style={[styles.iconMenu, {backgroundColor: item.color}]}>
                      <Icon name={item.icon} size={fp(3)} color={'#fff'} />
                    </View>
                    <Text style={styles.textMenu}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>Other Service</Text>
          </View>
          <View style={styles.viewService}>
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <ShowService key={index} />
              ))}
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  viewService: {
    minHeight: hp(30),
  },
  view: {
    minHeight: '100%',
    backgroundColor: color.white,
  },
  viewDrag: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drag: {
    backgroundColor: 'grey',
    width: wp(10),
    height: hp(0.5),
    borderRadius: hp(1),
    marginTop: 3,
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: fp(2.5),
  },
  editBox: {
    width: wp(15),
    height: hp(4),
    borderWidth: 2,
    borderRadius: 10,
    borderColor: color.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editText: {
    fontSize: fp(2),
    color: color.green,
  },
  containerMenu: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  menuButton: {
    alignItems: 'center',
  },
  iconMenu: {
    borderRadius: hp(7),
    height: hp(5),
    width: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  textMenu: {
    fontSize: fp(1.8),
  },
  flatlistMenu: {
    marginVertical: 20,
  },
});
