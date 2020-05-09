import React from 'react';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {fp, hp, wp} from '../../../utils/scale';
import {color} from '../../../utils/color';

const menu = [
  {
    name: 'Mission',
    icon: 'treasure-chest',
  },
  {
    name: 'Request',
    icon: 'login-variant',
  },
  {
    name: 'History',
    icon: 'history',
  },
  {
    name: 'Withdraw',
    icon: 'credit-card-refund',
  },
  {
    name: 'Bills',
    icon: 'card-text',
  },
  {
    name: 'Pulsa',
    icon: 'cellphone',
  },
  {
    name: 'Promo',
    icon: 'star',
  },
  {
    name: 'Settings',
    icon: 'settings',
  },
  {
    name: 'Help',
    icon: 'help-circle',
  },
  {
    name: '',
    icon: '',
  },
  {
    name: '',
    icon: '',
  },
  {
    name: '',
    icon: '',
  },
];

interface Props {
  onClose?(): any;
  isVisible?: boolean;
}
export const JopayModal = (props: Props) => {
  const img = 'https://img.pilihkartu.com/Promo/Banner-promo-WT.jpg';
  return (
    <Modal
      testID={'modal'}
      isVisible={props.isVisible}
      onSwipeComplete={props.onClose}
      onBackButtonPress={props.onClose}
      swipeThreshold={300}
      swipeDirection={['down']}
      scrollHorizontal
      propagateSwipe
      style={styles.container}>
      <View style={styles.view}>
        <Icon
          name="close"
          style={styles.iconExit}
          size={fp(5)}
          color={color.black}
          onPress={props.onClose}
        />
        <Text style={styles.textTitle}>More JoPay feature!</Text>
        <View style={styles.banner}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <View key={index} style={styles.card}>
                  <Image
                    source={{uri: img}}
                    resizeMode={'stretch'}
                    style={styles.image}
                  />
                  <Text style={styles.textTitleCard}>Lorem Ipsum</Text>
                  <Text style={styles.textDescCard}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor .
                  </Text>
                </View>
              ))}
          </ScrollView>
        </View>
        <View style={styles.viewPromo}>
          <Text style={styles.textPromo}>Checkout Promo</Text>
        </View>
        <FlatList
          data={menu}
          numColumns={4}
          keyExtractor={(_, index) => index.toLocaleString()}
          renderItem={({item}) => (
            <View style={styles.containerMenu}>
              {item.name !== '' && (
                <TouchableOpacity style={styles.menu}>
                  <Material
                    name={item.icon}
                    size={fp(4)}
                    color={color.blueLight}
                  />
                  <Text style={styles.textMenu}>{item.name}</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
        <SafeAreaView />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  view: {
    minHeight: hp(50),
    backgroundColor: color.white,
  },
  iconExit: {
    margin: 10,
  },
  textTitle: {
    fontSize: fp(3),
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textTitleCard: {
    fontSize: fp(2.5),
    fontWeight: 'bold',
    marginVertical: 5,
    marginLeft: 10,
  },
  textDescCard: {
    fontSize: fp(1.5),
    marginLeft: 10,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    height: hp(25),
    width: wp(70),
    marginHorizontal: 20,
  },
  image: {
    height: hp(15),
    width: wp(70),
  },
  textPromo: {
    fontSize: fp(2.5),
    fontWeight: 'bold',
    color: color.white,
    marginLeft: 10,
    marginVertical: 15,
  },
  viewPromo: {
    backgroundColor: color.blue,
    marginHorizontal: 10,
  },
  banner: {
    height: hp(27),
  },
  containerMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  textMenu: {
    fontSize: fp(2),
  },
  menu: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
