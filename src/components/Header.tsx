import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {hp, fp} from 'utils/scale';

interface Props {
  title: String;
}

export const Header = (props: Props) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(5),
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 15,
    fontSize: fp(2),
  },
});
