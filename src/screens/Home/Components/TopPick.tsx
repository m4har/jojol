import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {fp, hp, wp} from '../../../utils/scale';
import {color} from '../../../utils/color';
const list = [
  'All',
  'Mie sehat',
  'Ketoprak',
  'Bubur',
  'Telor gulung',
  'Cilok bakar',
  'Cuankqie',
];
export const TopPick = () => {
  const [state, setState] = useState({select: 'All'});
  const onActionSetList = (menu: string) => () =>
    setState({...state, select: menu});
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Top picks for you</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {list.map((item, index) => (
          <TouchableOpacity
            onPress={onActionSetList(item)}
            style={[
              styles.listButton,
              {
                backgroundColor:
                  item === state.select ? color.green : color.gray,
              },
            ]}
            key={index}>
            <Text
              style={[
                styles.textList,
                {color: item === state.select ? '#fff' : '#000'},
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  titleText: {
    fontSize: fp(2.5),
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  listButton: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  textList: {
    fontSize: fp(1.5),
  },
});
