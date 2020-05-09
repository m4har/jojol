import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {fp, hp, wp} from '../../../utils/scale';
import {color} from '../../../utils/color';
import {animate} from 'utils/animation';

export const ShowService = () => {
  const [show, setShow] = useState(false);
  const onAction = () => {
    setShow(!show);
    animate();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAction} style={styles.viewTitle}>
        <Text style={styles.textTitle}>Lorem Ipsum</Text>
        <Icon
          name={show ? 'chevron-up' : 'chevron-down'}
          size={fp(2)}
          color={'grey'}
        />
      </TouchableOpacity>
      {show && (
        <View style={styles.viewDesc}>
          <Text style={styles.textDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: fp(2.5),
  },
  viewDesc: {
    marginVertical: 10,
    backgroundColor: color.gray,
    padding: 10,
    borderRadius: 10,
  },
  textDesc: {
    fontSize: fp(2),
  },
});
