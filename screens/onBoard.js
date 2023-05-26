import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react';
import slides from './slides';
import OnBoardingItem from './OnBoardingItem';

export default OnBoard = () => {


  return (
    <View style={styles.container}>
      <FlatList 
        data={slides}  
        renderItem={({ item }) => <OnBoardingItem item={ item } />}
        horizontal
        pagingEnabled
        bounces={false}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})