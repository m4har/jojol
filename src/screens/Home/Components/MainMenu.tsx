import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Snackbar from 'react-native-snackbar';
import {fp, hp, wp} from '../../../utils/scale';
import {color} from '../../../utils/color';
import {MainMenuModal} from './MainMenuModal';
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
  ListHeaderComponent(): any;
  ListFooterComponent(): any;
}
export const MainMenu = (props: Props) => {
  const [state, setState] = useState({showMore: false});
  const onClose = () => setState({...state, showMore: false});
  const onActionPress = (menu: string) => () => {
    if (menu === 'More') return setState({...state, showMore: true});
    Snackbar.show({text: 'tap more ...'});
  };
  return (
    <View style={styles.container}>
      <MainMenuModal onClose={onClose} isVisible={state.showMore} />
      <FlatList
        numColumns={4}
        scrollEnabled
        data={menu}
        bounces={false}
        keyExtractor={(item, index) => index.toLocaleString()}
        ListHeaderComponent={props.ListHeaderComponent}
        ListFooterComponent={props.ListFooterComponent}
        renderItem={({item, index}) => (
          <View style={styles.containerMenu}>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={onActionPress(item.name)}>
              <View style={[styles.iconMenu, {backgroundColor: item.color}]}>
                <Icon name={item.icon} size={fp(3)} color={'#fff'} />
              </View>
              <Text style={styles.textMenu}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
