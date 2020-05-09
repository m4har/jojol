import React from 'react';
import {View, Text, StyleSheet, Image, Alert, ScrollView} from 'react-native';
import {fp, hp, wp} from '../../../utils/scale';
import {color} from '../../../utils/color';

export const Banner = () => {
  const img = 'https://img.pilihkartu.com/Promo/Banner-promo-WT.jpg';
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Special</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <Image
              key={index}
              source={{uri: img}}
              resizeMode="stretch"
              style={styles.bannerImage}
            />
          ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textTitle: {
    fontSize: fp(3),
    fontWeight: 'bold',
    margin: 10,
  },
  bannerImage: {
    width: wp(80),
    height: hp(20),
    marginHorizontal: 10,
    borderRadius: 20,
  },
});
