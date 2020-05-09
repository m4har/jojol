import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Jopay, MainMenu, TopPick, Banner} from './Components';

export const HomeScreen = () => {
  const listHeaderComponent = () => <Jopay />;
  const listFooterComponent = () => (
    <>
      <TopPick />
      <Banner />
      <Banner />
    </>
  );
  return (
    <View style={styles.container}>
      <Header />
      <MainMenu
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
