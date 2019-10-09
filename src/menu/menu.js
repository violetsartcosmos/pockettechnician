import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'header'},
            {key: 'viewProfile'},
            {key: 'yourVehicle'},
            {key: 'tips'},
            {key: 'parts'},
            {key: 'education'},
            {key: 'settings'},
            {key: 'pro'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

